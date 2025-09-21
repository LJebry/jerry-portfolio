[![My Skills](https://skillicons.dev/icons?i=react,ts,tailwind,vite)](https://skillicons.dev)

# Jerry Robayo's Portfolio

This repository contains the source code for my personal portfolio website. It's a modern, single-page application built with React and TypeScript, showcasing my skills, projects, and passion for creative frontend development. The design features a unique pixel-art aesthetic, complete with custom animations and a responsive layout.

[**Live Demo »**](https://jerry-portfolio-hazel.vercel.app)

<img width="1424" height="756" alt="Screenshot 2025-09-01 at 1 27 40 PM" src="https://github.com/user-attachments/assets/9b2b68d6-8035-435f-839f-62095902e708" />



## Key Features

*   **Pixel-Art Design:** A retro, code-centric aesthetic with custom "pixel" components and shadows.
*   **Interactive UI:** Engaging animations including orbiting skill icons, animated background paths, and interactive square grids.
*   **Responsive Layout:** Fully responsive design that looks great on desktops, tablets, and mobile devices.
*   **Contact Form:** An integrated contact form that posts to a Vercel serverless email endpoint, with a `mailto:` fallback when the backend is unavailable.
*   **Light/Dark Mode:** A theme toggle to switch between light and dark modes, with preferences saved in local storage.
*   **Component-Based:** Built with a modular and scalable component architecture using React.

## Tech Stack

*   **Framework:** [React](https://reactjs.org/)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Build Tool:** [Vite](https://vitejs.dev/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/) with custom pixel-art themes and animations.
*   **UI Components:** Built with [Shadcn/UI](https://ui.shadcn.com/) primitives.
*   **Animations:** [Framer Motion](https://www.framer.com/motion/) (All animations came from 21st.dev)
*   **Icons:** [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/).
*   **Contact Form Backend:** Vercel serverless function powered by [Nodemailer](https://nodemailer.com/).
*   **Routing:** [React Router DOM](https://reactrouter.com/)

## Project Structure

The project is organized into the following main directories:

-   `public/`: Contains static assets like favicons, `robots.txt`, and the web manifest.
-   `src/`: The main source code for the application.
    -   `components/`: Contains the primary React components for different sections of the page (Hero, About, Projects, etc.).
        -   `ui/`: Reusable, low-level UI components (buttons, backgrounds, tooltips) based on Shadcn/UI.
    -   `hooks/`: Custom React hooks, such as `use-mobile` for detecting device width.
    -   `lib/`: Utility functions, like `cn` for merging Tailwind CSS classes.
    -   `pages/`: Top-level page components managed by React Router.

## Getting Started

To run this project locally and make some custom changes for yourself, follow these steps:

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/LJebry/jerry-portfolio.git
    cd jerry-portfolio
    ```

2.  **Install dependencies:**
    ```sh
    npm install
    ```

3.  **Configure email sending:**
    The contact form posts to `/api/send-email`, a Vercel serverless function that uses Nodemailer. In your Vercel project settings add the following environment variables (Production, and Preview if needed):

    | Key | Example | Description |
    | --- | --- | --- |
    | `SMTP_HOST` | `smtp.gmail.com` | SMTP server hostname |
    | `SMTP_PORT` | `587` | SMTP port (`587` TLS / `465` SSL) |
    | `SMTP_USER` | `you@example.com` | SMTP login/username |
    | `SMTP_PASS` | `app-password` | SMTP password or app password |
    | `CONTACT_RECIPIENT` | `you@example.com` | Destination inbox |
    | `CONTACT_FROM_EMAIL` *(optional)* | `portfolio@yourdomain.com` | From header override |
    | `CONTACT_FROM_NAME` *(optional)* | `Your Portfolio` | Friendly sender name |

    Redeploy after saving the values. For local development you can either run `vercel dev` (so the API runs locally) or set `VITE_CONTACT_API_URL=https://your-site.vercel.app/api/send-email` in `.env.local` to call the deployed endpoint from `npm run dev`.

4.  **Run the development server:**
    ```sh
    npm run dev
    ```
    The application will be available at `http://localhost:8080`.

## Customization

You can easily customize this portfolio for your own use:

*   **Content:** Update the text, project details, and skills in the corresponding components located in `src/components/` (e.g., `About.tsx`, `Projects.tsx`, `Skills.tsx`).
*   **Styling:** Modify the color palette, fonts, and other design tokens in `tailwind.config.ts` and `src/index.css`. The core colors are defined using HSL variables for easy theming.
*   **Resume:** Replace the `/public/Jerry_Resume.pdf` file with your own resume to update the "Download Resume" button functionality.


Please credit me if you are going to use this repository for your own custom website, thank you!
