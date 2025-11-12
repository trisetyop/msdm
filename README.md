# Kuis Cerdas SDM

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/trisetyop/kuis-cerdas-sdm)

An interactive and visually engaging quiz application to test knowledge in Human Resource Management based on EKMA4214 competency standards.

Kuis Cerdas SDM is a visually stunning and interactive web application designed to test and enhance knowledge in Human Resource Management (MSDM). The application presents users with a comprehensive set of multiple-choice questions categorized into nine core competency areas. The user experience is crafted to be engaging and educational, with instant feedback and a detailed results summary. The application is built as a Single Page Application (SPA) with three main views: a category selection screen, an active quiz screen, and a final results screen, all managed seamlessly through a client-side state manager.

## Key Features

-   **Interactive Category Selection**: A beautiful grid of nine HRM competency areas to choose from.
-   **Engaging Quiz Interface**: Questions are presented one by one with a progress bar, navigation controls, and immediate visual feedback for answers.
-   **Detailed Results Screen**: A summary of the user's final score, percentage, and a celebratory animation upon completion.
-   **State-Driven Architecture**: Built as a fast Single Page Application (SPA) using Zustand for efficient and predictable state management.
-   **Visually Stunning & Responsive**: A modern, professional, and clean design that looks great on all devices, from mobile phones to desktops.
-   **Educational Content**: 45 multiple-choice questions covering key areas of Human Resource Management.

## Technology Stack

-   **Frontend**: React, Vite, TypeScript
-   **Styling**: Tailwind CSS, shadcn/ui
-   **State Management**: Zustand
-   **Animation & Effects**: Framer Motion, react-confetti
-   **Icons**: Lucide React

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

-   [Node.js](https://nodejs.org/) (v18 or later recommended)
-   [Bun](https://bun.sh/) package manager

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/kuis_cerdas_sdm.git
    cd kuis_cerdas_sdm
    ```

2.  **Install dependencies:**
    This project uses Bun for package management.
    ```bash
    bun install
    ```

### Running the Development Server

To start the local development server, run the following command:

```bash
bun run dev
```

The application will be available at `http://localhost:3000`. The server will automatically reload when you make changes to the code.

## Project Structure

The project is organized as a standard Vite + React application:

-   `src/`: Contains all the frontend source code.
-   `src/pages/HomePage.tsx`: The main entry point and primary component that renders all views.
-   `src/components/`: Contains reusable React components, including UI components from shadcn/ui.
-   `src/data/`: Holds the static quiz data.
-   `src/store/`: Contains the Zustand store for global state management.
-   `public/`: Static assets that are served directly.

## Deployment

This project is configured for easy deployment to Cloudflare Pages.

### Deploy with Wrangler CLI

1.  **Login to Wrangler:**
    ```bash
    bunx wrangler login
    ```

2.  **Build the project:**
    ```bash
    bun run build
    ```

3.  **Deploy to Cloudflare:**
    ```bash
    bun run deploy
    ```

Wrangler will build and deploy your application. After deployment, you will receive a URL to your live application.

### Deploy with the Cloudflare Button

You can also deploy this project directly to your Cloudflare account by clicking the button below.

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/trisetyop/kuis-cerdas-sdm)