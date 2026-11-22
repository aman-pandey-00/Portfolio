# Aman Kumar Pandey — Personal Portfolio

A modern, responsive personal portfolio website showcasing my professional profile, education, work experience, technical skills, projects, achievements, certifications, and resume.

## Overview

This repository contains a static portfolio built with HTML5, CSS3, and JavaScript. It can be published directly with GitHub Pages. A small Node.js server is included for local testing.

## About Me

I am Aman Kumar Pandey, pursuing a Bachelor of Computer Applications (BCA) in Data Science & Artificial Intelligence at Babu Banarasi Das University, Lucknow, with a 9.05 CGPA. My interests include software engineering, full-stack web development, and data analytics.

## Education

| Qualification | Institution | Year |
|---|---|---|
| BCA — Data Science & AI (CGPA: 9.05) | Babu Banarasi Das University, Lucknow | 2024–2027 |
| Diploma in Computer Application (DCA) | Sanjay Gandhi Computer Saksharta Mission, New Delhi | 2025 |
| Intermediate (PCB) | Umanath Singh Higher Secondary School, Jaunpur | 2024 |
| High School | Umanath Singh Higher Secondary School, Jaunpur | 2022 |

## Work Experience

**Internshala Student Partner (ISP) — Internshala Student Engagement Program**

- Promoted technical internships, software development roles, and online certification programs among 500+ college students.
- Conducted campus outreach initiatives, contributing to more than 35% increased engagement across departments.
- Developed leadership, technical communication, digital marketing, teamwork, and event coordination skills.

## Technical Skills

- **Programming:** Python, SQL, JavaScript (ES6+)
- **Data Analytics:** Pandas, NumPy, Matplotlib, Data Analysis, Microsoft Excel
- **Web & Databases:** HTML5, CSS3, Node.js, Express.js, REST APIs, MySQL, PostgreSQL
- **Tools:** Git, GitHub, VS Code, Jupyter Notebook, pgAdmin, Postman

## Projects

### SevaConnect — Local Service Finder
**HTML5, CSS3, JavaScript, Node.js, MySQL, Google Maps API, REST APIs**

- Full-stack application connecting customers with local service vendors.
- Customer, Vendor, and Admin authentication modules.
- Google Maps navigation and AI-powered conversational chatbot.
- Database query and REST API performance improvements.

### NEXA-GUARD — Smart Hostel Security Platform
**HTML5, CSS3, JavaScript, UI/UX Design**

- Responsive role-based dashboards for Students, Parents, Guards, Wardens, and System Administrators.
- Interactive frontend workflows, QR verification logic, digital gate pass forms, and activity monitoring screens.

### India Super Tools — All-in-One Online Utilities Platform
**HTML5, CSS3, JavaScript**

- Unified portal for browser-based utility tools and developer resources.
- Categorized navigation and mobile-first responsive layout.

## Achievements

- Smart India Hackathon (SIH) 2026 Internal Hackathon — Shortlisted Team Member, Babu Banarasi Das University, Lucknow.

## Certifications

- Generative AI for All — Infosys Springboard (Oct 24, 2026)
- AI Tools Workshop — Be10x (Oct 10, 2026)
- Create a Budget with Microsoft Excel — Coursera (Mar 05, 2026)
- Digital Application Fundamentals — FutureSkills (Feb 14, 2026)
- Python 101 for Data Science — IBM (Dec 11, 2025)
- Data Analytics Job Simulation — Deloitte (Nov 01, 2025)
- Business Analytics with Microsoft Excel — Simplilearn (Nov 01, 2025)
- Introduction to Prompt Engineering — Simplilearn (Oct 01, 2025)
- Diploma in Computer Application (DCA) — Sanjay Gandhi Institute, New Delhi (Nov 25, 2024)

## Features

- Responsive portfolio layout with dark/light theme support.
- Profile, education, experience, skills, projects, achievements, and certifications sections.
- Resume opens from the **View Resume** button. The current PDF is embedded inside `index.html`, so a separate resume PDF file is not required in `assets/`.
- EmailJS-based contact form.

## Technology Stack

| Technology | Purpose |
|---|---|
| HTML5 | Page structure |
| CSS3 | Styling and responsive layout |
| JavaScript | Client-side interactions |
| EmailJS | Contact form integration |
| Node.js | Optional local development server |
| Git and GitHub | Version control and source hosting |
| GitHub Pages | Static website hosting |

## Project Structure

```text
Portfolio-/
├── assets/
│   └── profile.jpg
├── index.html
├── local-server.js
├── package.json
├── .env                 # Local configuration; keep out of public GitHub commits
├── .gitignore
├── README.md
├── START-HERE.txt
└── vercel.json
```

> `assets/profile.jpg` is the current profile photo. The latest resume PDF is embedded in `index.html`, so a separate resume PDF is not required. The `.env` file is included for local reference and is excluded by `.gitignore`; do not upload it or commit it to a public GitHub repository. GitHub Pages cannot read `.env` files. The EmailJS service ID, template ID, and browser public key are configured in the static page for the client-side contact form; the recipient is controlled by the EmailJS template settings.

## Run Locally

Requirements: Node.js 20 or later.

```bash
npm start
```

Then open <http://localhost:3000> in your browser. `npm install` is not needed because `package.json` currently declares no external npm dependencies. The local server blocks dotfiles (including `.env`) from HTTP access.

## Deploy with GitHub Pages

1. Upload the repository contents to the root of your GitHub repository.
2. Open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select the `main` branch and `/ (root)` folder, then save.
5. Wait for the Pages deployment to finish and open the URL shown in the Pages settings.

GitHub Pages serves the static `index.html` and its assets directly. You do not need to run the Node.js server after deployment. Do not commit `.env`; it is local-only configuration and is ignored by Git.

## Contact

**Aman Kumar Pandey**  
Lucknow, Uttar Pradesh, India  
Email: rampandey4636@gmail.com  
Phone: +91 8853781310  
GitHub: <https://github.com/aman-pandey-00>

## License

No open-source license has currently been specified. All rights remain reserved unless a license is added to this repository.
