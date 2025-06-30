# EmailJS Setup Guide

## What is EmailJS?

EmailJS allows you to send emails directly from your frontend application without needing a backend server.

## Setup Instructions

### 1. Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### 2. Create an Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID**

### 3. Create an Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Set the **Subject** field to:

   ```
   New Contact from {{name}} - Portfolio
   ```

4. **Option A: Simple template that works with your current code**:

```html
<div style="font-family: system-ui, sans-serif, Arial; font-size: 12px">
  <div>
    A message by {{name}} has been received. Kindly respond at your earliest
    convenience.
  </div>
  <div
    style="
      margin-top: 20px;
      padding: 15px 0;
      border-width: 1px 0;
      border-style: dashed;
      border-color: lightgrey;
    "
  >
    <table role="presentation">
      <tr>
        <td style="vertical-align: top">
          <div
            style="
              padding: 6px 10px;
              margin: 0 10px;
              background-color: aliceblue;
              border-radius: 5px;
              font-size: 26px;
            "
            role="img"
          >
            &#x1F464;
          </div>
        </td>
        <td style="vertical-align: top">
          <div style="color: #2c3e50; font-size: 16px">
            <strong>{{name}}</strong>
          </div>
          <div style="color: #7f8c8d; font-size: 13px">
            Email: {{email}}<br />
            Company: {{company}}
          </div>
          <p style="font-size: 16px">{{message}}</p>
          <div style="color: #cccccc; font-size: 11px; margin-top: 10px">
            Sent from portfolio contact form
          </div>
        </td>
      </tr>
    </table>
  </div>
</div>
```

**Option B: Enhanced version**:

```html
<div style="font-family: system-ui, sans-serif, Arial; font-size: 12px">
  <div
    style="margin-bottom: 20px; padding: 15px; background-color: #f8f9fa; border-radius: 8px;"
  >
    <h3 style="margin: 0; color: #2c3e50;">New Portfolio Contact Message</h3>
    <p style="margin: 5px 0 0 0; color: #7f8c8d;">
      Someone reached out through your portfolio!
    </p>
  </div>

  <div
    style="margin-top: 20px; padding: 20px; border: 1px solid #e9ecef; border-radius: 8px; background-color: #ffffff;"
  >
    <table role="presentation" style="width: 100%;">
      <tr>
        <td style="vertical-align: top; width: 60px;">
          <div
            style="padding: 8px 12px; background-color: aliceblue; border-radius: 50%; font-size: 24px; text-align: center; width: 40px; height: 40px;"
            role="img"
          >
            &#x1F464;
          </div>
        </td>
        <td style="vertical-align: top; padding-left: 15px;">
          <div style="color: #2c3e50; font-size: 18px; margin-bottom: 8px;">
            <strong>{{name}}</strong>
          </div>

          <div style="margin-bottom: 12px;">
            <div style="color: #7f8c8d; font-size: 14px; margin-bottom: 4px;">
              📧 <strong>Email:</strong> {{email}}
            </div>
            <div style="color: #7f8c8d; font-size: 14px; margin-bottom: 4px;">
              🏢 <strong>Company:</strong> {{company}}
            </div>
          </div>

          <div style="margin-top: 15px;">
            <div
              style="color: #495057; font-size: 14px; font-weight: bold; margin-bottom: 8px;"
            >
              💬 Message:
            </div>
            <div
              style="background-color: #f8f9fa; padding: 15px; border-left: 4px solid #007bff; border-radius: 4px; font-size: 16px; line-height: 1.5; color: #212529;"
            >
              {{message}}
            </div>
          </div>

          <div
            style="color: #adb5bd; font-size: 12px; margin-top: 20px; text-align: center; padding-top: 15px; border-top: 1px dashed #dee2e6;"
          >
            Sent from your portfolio contact form
          </div>
        </td>
      </tr>
    </table>
  </div>
</div>
```

5. **Important Template Variables**: Make sure your template uses these variable names to match your contact form:

   - `{{name}}` - for the sender's name
   - `{{email}}` - for the sender's email
   - `{{company}}` - for the company field
   - `{{message}}` - for the message content

6. Note down your **Template ID**

### 4. Get Your Public Key

1. Go to "Account" in your dashboard
2. Find your **Public Key** (User ID)

### 5. Update Environment Variables

1. Open your `.env.local` file
2. Replace the placeholder values:

```
VITE_EMAILJS_SERVICE_ID=your_actual_service_id
VITE_EMAILJS_TEMPLATE_ID=your_actual_template_id
VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key
```

### 6. Restart Your Development Server

```bash
npm run dev
```

## Fallback Behavior

If EmailJS is not configured, the form will fall back to opening the user's default email client with a pre-filled email (mailto link).

## Free Tier Limits

- 200 emails per month
- EmailJS branding in emails
- Basic support

## Testing

1. Fill out the contact form on your portfolio
2. Check your email for the message
3. Verify the sender information is correct
