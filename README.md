[![Netlify Status](https://api.netlify.com/api/v1/badges/6da58e8d-ccd8-4de9-9d74-728e2de58e3b/deploy-status)](https://app.netlify.com/projects/design-declares/deploys)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=flat&logo=react&logoColor=%2361DAFB)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=flat&logo=tailwind-css&logoColor=white)
# Design Declares Web App

A modern web application promoting sustainable design principles. This project showcases a responsive React.js application with a newsletter signup, contact form, and low-carbon web development practices.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Deployment](#deployment)
- [Demo](#demo)
- [Screenshots](#screenshots)
- [License](#license)

## Features
- **Responsive Design**:
  - Optimized for mobile, tablet, and desktop devices.
  - Mobile-friendly navigation and footer interactions.
- **Dynamic Routing**:
  - Supports multiple pages: Home, About, Contact, Privacy Policy, Latest, and 15 detail pages for updates.
  - Built with React Router for seamless navigation.
- **Scroll Progress Bar**:
  - Visual indicator of scroll position for enhanced user experience.
- **Low-Carbon Principles**:
  - Built with energy-efficient web development practices.
- **Contact Form**:
  - Users can send messages with fields for name, email, team, and enquiry type.

## Tech Stack
- **Frontend**: React.js, React Router, Tailwind CSS
- **Animations**: Framer Motion for smooth transitions
- **Libraries**:
  - react-scroll for smooth scrolling on Contact page
  - react-icons for UI (if used in components)
- **Tools**:Netlify for deployment

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/rushichandavale/design-declares-clone.git
   cd design-declares
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
4. Open `http://localhost:3000` in your browser.

## Usage
1. **Navigate the Site**:
   - Visit the **Home** page (`/`) for an overview of the Design Declares initiative.
   - Explore the **About** page (`/about`) for mission details.
   - Use the **Contact** page (`/contact`) to send a message.
   - Check the **Latest** section (`/latest`) and detail pages (`/latest/1` to `/latest/15`) for updates.
   - Review the **Privacy Policy** (`/privacy-policy`) for data handling information.
2. **Interact with the Footer**:
   - Sign up for the newsletter with your email.
   - Click links to Contact, Instagram, LinkedIn, or Privacy Policy.
3. **Test Responsiveness**:
   - Resize the browser or use a mobile device to verify the responsive design.

## Deployment
- **Live Demo**: https://design-declares.netlify.app/ 
- Deployed on Netlify with continuous integration from GitHub.

## Demo
- Home page with scroll progress bar
- Contact form submission
- Navigation across pages (Home, About, Contact, Latest, Privacy Policy)
- Mobile responsiveness


## License
MIT License. See [LICENSE](LICENSE) for details.
