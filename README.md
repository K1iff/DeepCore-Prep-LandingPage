# DeepCore Prep Landing Page

This repository contains the source code for the DeepCore Prep landing page. This project serves as the main web interface for a psychometric licensure exam platform that utilizes Retrieval Augmented Generation (RAG).

The live website can be viewed at: **[https://deep-core-prep-landing-page.vercel.app/](https://deep-core-prep-landing-page.vercel.app/)**

## About The Project

DeepCore Prep is a standalone landing page designed to introduce an AI-powered platform for psychometric licensure exam preparation. It is built using the Next.js App Router, React, and Tailwind CSS. The page details the platform's features, technology, and the academic team behind it.

## Key Features

*   **Purpose-Built Portals**: The landing page showcases three distinct user dashboards for Learners, Faculty, and Administrators, each with a specific interface and functionality.
*   **RAG Technology Explained**: A dedicated section visually breaks down the three-step architecture: Vector Ingestion, Context Retrieval, and Exam Generation using a Supabase vector database.
*   **Team & Academic Showcase**: Introduces the student research members, faculty advisers, and Program Chair, complete with profile images and contact links.
*   **Institutional Branding**: Integrates the official branding of Mapúa Malayan Colleges Laguna (MMCL) and the College of Computer and Information Science (CCIS).
*   **Responsive Design**: A fully responsive layout built with Tailwind CSS, ensuring a seamless experience across all devices.

## Technology Stack

*   **Framework**: [Next.js](https://nextjs.org/) (App Router)
*   **Library**: [React](https://reactjs.org/)
*   **Language**: [TypeScript](https://www.typescriptlang.org/)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
*   **Icons**: [Lucide React](https://lucide.dev/)
*   **Linting**: [ESLint](https://eslint.org/)

## Design System

The visual theme merges a modern startup aesthetic with formal academic branding.

*   **Color Palette**:
    *   **Primary Blue**: `#2563EB` (Primary buttons, active states)
    *   **Navy Background**: `#0F172A` (Dark sections, footer)
    *   **MMCL Academic Red**: `#B91C1C` (Primary call-to-action buttons)
    *   **Main Background**: `#F8FAFC` (Slate 50)
*   **Typography**:
    *   **Primary Font**: Inter (sans-serif)
*   **Component Styling**:
    *   **Borders**: `rounded-xl` is used for all cards and buttons.
    *   **Shadows**: Soft shadows (`shadow-sm`, `shadow-md`) are used to create depth.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

*   Node.js (v20 or later)
*   npm or a compatible package manager

### Installation

1.  Clone the repository:
    ```sh
    git clone https://github.com/k1iff/deepcore-prep-landingpage.git
    ```
2.  Navigate to the project directory:
    ```sh
    cd deepcore-prep-landingpage
    ```
3.  Install NPM packages:
    ```sh
    npm install
    ```
4.  Run the development server:
    ```sh
    npm run dev
    ```
5.  Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
