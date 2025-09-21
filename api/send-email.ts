import type { VercelRequest, VercelResponse } from '@vercel/node'
import nodemailer from 'nodemailer'

const requiredEnvVars = [
  'SMTP_HOST',
  'SMTP_PORT',
  'SMTP_USER',
  'SMTP_PASS',
  'CONTACT_RECIPIENT',
]

const missingEnv = requiredEnvVars.filter((key) => !process.env[key])

if (missingEnv.length > 0) {
  console.warn(
    `Email API missing required environment variables: ${missingEnv.join(', ')}`
  )
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method Not Allowed' })
  }

  if (missingEnv.length > 0) {
    return res.status(500).json({
      error:
        'Email service not configured. Please set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, and CONTACT_RECIPIENT.',
    })
  }

  try {
    const payload =
      typeof req.body === 'string' ? JSON.parse(req.body) : req.body ?? {}

    const { name, email, company, message } = payload as {
      name?: string
      email?: string
      company?: string
      message?: string
    }

    if (!name || !email || !message) {
      return res.status(400).json({
        error: 'Missing required fields. Please provide name, email, and message.',
      })
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    await transporter.sendMail({
      from:
        process.env.CONTACT_FROM_EMAIL && process.env.CONTACT_FROM_NAME
          ? `${process.env.CONTACT_FROM_NAME} <${process.env.CONTACT_FROM_EMAIL}>`
          : process.env.CONTACT_FROM_EMAIL ?? process.env.SMTP_USER!,
      to: process.env.CONTACT_RECIPIENT,
      replyTo: email,
      subject: `Portfolio Contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nCompany: ${company ?? 'N/A'}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;">
          <h2 style="margin-bottom: 16px;">New Portfolio Contact</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${company ?? 'N/A'}</p>
          <hr style="margin: 16px 0;" />
          <p style="margin-bottom: 8px;"><strong>Message:</strong></p>
          <p style="white-space: pre-line;">${message}</p>
        </div>
      `,
    })

    return res.status(200).json({ success: true })
  } catch (error) {
    console.error('Error sending contact email:', error)
    return res.status(500).json({
      error: 'Failed to send email. Please try again later.',
    })
  }
}
