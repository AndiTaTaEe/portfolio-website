# <AndiMarian/> Portfolio Website

A personal developer portfolio built with **Next.js** and **Tailwind CSS**, designed to showcase my engineering journey, technical projects, and professional experience. 

The application is fully responsive and statically exported for seamless hosting on GitHub Pages.

### Live Demo
**[View the Live Portfolio](https://anditataee.github.io/portfolio-website/)**

---

## Tech Stack

*   **Framework:** [Next.js](https://nextjs.org/) (App Router, Static Export)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Icons:** [Lucide React](https://lucide.dev/)
*   **Deployment:** GitHub Pages (via GitHub Actions)

---

## Featured Projects Highlighted

This portfolio highlights projects bridging hardware and software, including:

1.  **Mushroom Farm Monitoring System:** An edge-to-cloud IoT architecture utilizing a Raspberry Pi 5, environmental sensors, Firebase, and a React Native mobile application for real-time climate monitoring.
2.  **BCD to Digits Converter:** A functional verification environment built with SystemVerilog and UVM methodology.
3.  **Food Delivery Web Application:** A full-stack application built on the MERN stack featuring secure Stripe payment processing.
4.  **Traffic Lights Control System:** A finite state machine implementation in Verilog on a MachXO3LF FPGA.

---

## Local Development

To run this project locally on your machine:

**1. Clone the repository**
```bash
git clone [https://github.com/AndiTaTaEe/portfolio-website.git](https://github.com/AndiTaTaEe/portfolio-website.git)
cd portfolio-website
```
**2. Install dependencies**
```bash
npm install
```
**3. Run the dev server**
```bash
npm run dev
```
Open http://localhost:3000 in your browser to view the application.

## Deployment architecture
This project is deployed to GitHub Pages using a custom GitHub Actions workflow. Because it is hosted on a subpath (`/portfolio-website`), the `next.config.ts` has been heavily optimized for static HTML export:

*   **Static Export:** Configured with `output: "export"`.
*   **Asset Routing:** Utilizes `basePath: "/portfolio-website"` to ensure all compiled CSS, JS, and local PDFs map correctly in production.
*   **Image Optimization:** Unoptimized native Next.js images to allow static hosting without a Node.js runtime.
*   **Jekyll Bypass:** Contains a `.nojekyll` file in the public directory to ensure the `_next` folder is not purged during deployment.

---

## About the Author

**Andi-Marian Cilichidreanu**  
*Computer Engineer | IoT & Distributed Systems*

Passionate about integrating hardware and software to build efficient, intelligent systems. Graduate of Transilvania University of Brașov and pursuing a Master's degree in Advanced Software Services at the National University of Science and Technology POLITEHNICA of Bucharest.

*   [LinkedIn](https://www.linkedin.com/in/andi-marian-cilichidreanu/)
*   [GitHub](https://github.com/AndiTaTaEe)
