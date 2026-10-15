# Landing Page Requirements

## Tech Stack
Next.js (App Router), React, Tailwind CSS, TypeScript, Lucide React (Icons), Next/Image.

## Core Objective
Build a standalone landing page for "DeepCore Prep", a psychometric licensure exam platform utilizing RAG (Retrieval Augmented Generation). 

## Asset Mapping
All visual assets are located in the `public/images/` directory. Use the Next.js `<Image />` component with the exact file paths provided below. If a profile image fails to load or is not found, implement a fallback mechanism using a default user icon from Lucide React.

## Page Structure
1. **Navigation Bar**: 
   * Left side: Use `<Image src="/images/deepcore_logo.png" />` to display the primary platform branding.
   * Right side: Links (Features, Tech, Team, Contact) and a prominent "Partner With Us" button using the MMCL Academic Red color.
2. **Hero Section**: 
   * Strong headline about AI licensure prep. Subheadline about RAG questionnaire generation. 
   * Include the login portal visual representation using `<Image src="/images/deepcore_login.png" />`.
   * Two buttons: "Try Beta" and "Request Demo".
3. **Features Grid**: Three distinct cards highlighting the different user portals. Do not use placeholders; use the provided assets:
   * Card 1: Learner Dashboard. Highlight the weekly activity tracking and test schedules. Image: `<Image src="/images/learner_dashboard.png" />`.
   * Card 2: Faculty Dashboard. Highlight exam management and pending validations for teachers. Image: `<Image src="/images/faculty_dashboard.png" />`.
   * Card 3: Admin Overview. Highlight global system health, API requests, and token consumption. Image: `<Image src="/images/admin_dashboard.png" />`.
4. **How It Works (Tech Section)**: A 3 step visual layout explaining RAG architecture, vector ingestion, and exam generation using Supabase.
5. **Team and Contact Information**: A dedicated section introducing the research team and faculty. Wrap the emails in `mailto:` links for easy contact.
   * **Research Members**:
     * Carl Justine M. Abel (2023cjmabel@live.mcl.edu.ph). Image: `<Image src="/images/abel_profile.png" />`
     * Mark Angelo E. Dabandan (2023maedabandan@live.mcl.edu.ph). Image: `<Image src="/images/dabandan_profile.png" />`
     * Ryzel Clifford C. Realon (2023rccrealon@live.mcl.edu.ph). Image: `<Image src="/images/realon_profile.png" />`
   * **Research Adviser**:
     * Micheal James F. Gnilo (mjfgnilo@mcl.edu.ph). Image: `<Image src="/images/gnilo_profile.png" />`
   * **Program Chair**:
     * Jonalyn G. Ebron (jgebron@mcl.edu.ph). Image: `<Image src="/images/ebron_profile.png" />`
6. **Academic Roots**: A section acknowledging development by students from the College of Computer and Information Science at Mapúa Malayan Colleges Laguna. 
   * Include `<Image src="/images/ccis_logo_horizontal.png" />` and `<Image src="/images/mmcl_seal_horizontal.png" />` to represent the academic institutions.
7. **Footer**: Copyright text, simple navigation links, and a repeat of the contact emails. Include the standalone college shield `<Image src="/images/ccis_logo.png" />` or the university seal `<Image src="/images/mmcl_seal.png" />` as a subtle watermark or footer element.
