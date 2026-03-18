# Colorsgen 🎨

A modern, minimal, and professional color palette generator built with **Next.js 16**, **TypeScript**, and **Tailwind CSS v4**.

![Deployment](https://img.shields.io/badge/Deployment-Vercel-black?style=for-the-badge&logo=vercel)
![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind--CSS-v4-38bdf8?style=for-the-badge&logo=tailwind-css)

## 🌐 Live Demo
Visit the live application: [colorsgen.vercel.app](https://colorsgen.vercel.app)

---

## ✨ Features

- **🪄 Palette Generator**: Describe a vibe or brand style (e.g., "Minimalist Ocean") or enter a HEX code to generate a harmonic 5-color palette.

- **🖥️ Live UI Injection**: Instantly preview your generated palette on a realistic dashboard mockup to see how colors interact on buttons, cards, and sidebars.

- **🎭 Color Shades & Tints**: Generate a complete spectrum of shades from 10% to 100% for any specific core color.

- **♿ Accessibility Scoring**: Real-time contrast ratio checks with AA/AAA badges to ensure your designs are inclusive and readable.

- **📋 One-Click Copy**: Fast and easy HEX code copying directly to your clipboard.

- **📱 Fully Responsive**: A beautiful dashboard-centric layout that works seamlessly across mobile, tablet, and desktop.

## 🛠️ Tech Stack

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)

- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)

- **Logic**: [Values.js](https://github.com/noeldelgado/values.js) (Color engine)

- **UI Components**: Custom minimal components with glassmorphism effects.

- **Notifications**: [React-Toastify](https://fkhadra.github.io/react-toastify/introduction/)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- Yarn or NPM

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/color_generator.git
   ```

2. Install dependencies:
   ```bash
   yarn install
   # or
   npm install
   ```

3. Run the development server:
   ```bash
   yarn dev
   # or
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure

- `app/`: Next.js App Router (Pages: Home, Color Shades, How to Use).

- `components/`: Reusable UI components (Sidebar, SoloColor).

- `public/`: Static assets.

---

Made by [Ashcroft](https://github.com/neyaznafiz)