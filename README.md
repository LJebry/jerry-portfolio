[![My Skills](https://skillicons.dev/icons?i=react,ts,tailwind,vite)](https://skillicons.dev)

# Jerry Robayo's Portfolio

This repository contains the source code for my personal portfolio website. It's a modern, single-page application built with React and TypeScript, showcasing my skills, projects, and passion for creative frontend development. The design features a unique pixel-art aesthetic, complete with custom animations and a responsive layout.

[**Live Demo »**](https://jerry-portfolio-hazel.vercel.app)

<img width="1424" height="756" alt="Screenshot 2025-09-01 at 1 27 40 PM" src="https://github.com/user-attachments/assets/9b2b68d6-8035-435f-839f-62095902e708" />



## Key Features

*   **Pixel-Art Design:** A retro, code-centric aesthetic with custom "pixel" components and shadows.
*   **Interactive UI:** Engaging animations including orbiting skill icons, animated background paths, and interactive square grids.
*   **Responsive Layout:** Fully responsive design that looks great on desktops, tablets, and mobile devices.
*   **Contact Form:** An integrated contact form using EmailJS to send messages directly from the site, with a `mailto:` fallback.
*   **Light/Dark Mode:** A theme toggle to switch between light and dark modes, with preferences saved in local storage.
*   **Component-Based:** Built with a modular and scalable component architecture using React.

## Tech Stack

*   **Framework:** [React](https://reactjs.org/)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Build Tool:** [Vite](https://vitejs.dev/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/) with custom pixel-art themes and animations.
*   **UI Components:** Built with [Shadcn/UI](https://ui.shadcn.com/) primitives.
*   **Animations:** [Framer Motion](https://www.framer.com/motion/) for animations and transitions. (21st.dev is also a great resource)
*   **Icons:** [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/).
*   **Contact Form:** [EmailJS](https://www.emailjs.com/) for serverless email sending.
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

3.  **Set up environment variables:**
    The contact form uses EmailJS. Create a `.env.local` file in the root of the project and add your EmailJS credentials.

    ```env
    VITE_EMAILJS_SERVICE_ID=your_service_id
    VITE_EMAILJS_TEMPLATE_ID=your_template_id
    VITE_EMAILJS_PUBLIC_KEY=your_public_key
    ```
    For detailed instructions on setting up EmailJS, refer to the [EMAILJS_SETUP.md](./EMAILJS_SETUP.md) guide. If these variables are not provided, the contact form will fall back to opening the user's default email client.

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
