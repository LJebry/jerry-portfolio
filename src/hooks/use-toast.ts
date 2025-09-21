import * as React from "react"

import type {
  ToastActionElement,
  ToastProps,
} from "@/components/ui/toast"

const TOAST_LIMIT = 1
const TOAST_REMOVE_DELAY = 1000

type ToasterToast = ToastProps & {
  id: string
  title?: React.ReactNode
  description?: React.ReactNode
  action?: ToastActionElement
}

type ToastState = {
  toasts: ToasterToast[]
}

const actionTypes = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST",
} as const

type ActionType = typeof actionTypes

type Action =
  | {
      type: ActionType["ADD_TOAST"]
      toast: ToasterToast
    }
  | {
      type: ActionType["UPDATE_TOAST"]
      toast: Partial<ToasterToast>
    }
  | {
      type: ActionType["DISMISS_TOAST"] | ActionType["REMOVE_TOAST"]
      toastId?: ToasterToast["id"]
    }

let listeners: Array<(state: ToastState) => void> = []
let memoryState: ToastState = { toasts: [] }

const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>()

const addToRemoveQueue = (toastId: string) => {
  if (toastTimeouts.has(toastId)) {
    return
  }

  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId)
    dispatch({
      type: actionTypes.REMOVE_TOAST,
      toastId,
    })
  }, TOAST_REMOVE_DELAY)

  toastTimeouts.set(toastId, timeout)
}

const reducer = (state: ToastState, action: Action): ToastState => {
  switch (action.type) {
    case actionTypes.ADD_TOAST: {
      const nextToasts = [action.toast, ...state.toasts]

      return {
        ...state,
        toasts: nextToasts.slice(0, TOAST_LIMIT),
      }
    }

    case actionTypes.UPDATE_TOAST: {
      return {
        ...state,
        toasts: state.toasts.map((toast) =>
          toast.id === action.toast.id ? { ...toast, ...action.toast } : toast
        ),
      }
    }

    case actionTypes.DISMISS_TOAST: {
      const { toastId } = action

      return {
        ...state,
        toasts: state.toasts.map((toast) => {
          if (toast.id === toastId || toastId === undefined) {
            addToRemoveQueue(toast.id)
            return {
              ...toast,
              open: false,
            }
          }

          return toast
        }),
      }
    }

    case actionTypes.REMOVE_TOAST: {
      return {
        ...state,
        toasts: state.toasts.filter((toast) => toast.id !== action.toastId),
      }
    }
  }
}

let toastCount = 0
const genToastId = () => {
  toastCount = (toastCount + 1) % Number.MAX_SAFE_INTEGER
  return `toast-${toastCount}`
}

const dispatch = (action: Action) => {
  memoryState = reducer(memoryState, action)
  listeners.forEach((listener) => {
    listener(memoryState)
  })
}

const toast = (props: ToastProps) => {
  const id = genToastId()

  const update = {
    ...props,
    id,
    open: true,
  }

  dispatch({
    type: actionTypes.ADD_TOAST,
    toast: update,
  })

  return {
    id,
    dismiss: () => dispatch({ type: actionTypes.DISMISS_TOAST, toastId: id }),
    update: (updatedProps: ToastProps) =>
      dispatch({
        type: actionTypes.UPDATE_TOAST,
        toast: { ...updatedProps, id },
      }),
  }
}

const dismiss = (toastId?: string) => {
  dispatch({
    type: actionTypes.DISMISS_TOAST,
    toastId,
  })
}

function useToast() {
  const [state, setState] = React.useState<ToastState>(memoryState)

  React.useEffect(() => {
    listeners.push(setState)

    return () => {
      listeners = listeners.filter((listener) => listener !== setState)
    }
  }, [])

  return {
    ...state,
    toast,
    dismiss,
  }
}

export { useToast, toast, dismiss }
