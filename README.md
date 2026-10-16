# Axel Apaza — Technical Project Manager Portfolio

A fully responsive web-based portfolio for **Axel Apaza**, a **Technical Project Manager** with experience in Agile/Scrum delivery, cross-functional leadership, enterprise software operations, and AI integrations.

---

## 👨‍💼 Professional Summary

- **Role**: Technical Project Manager / Software Project Manager
- **Location**: Buenos Aires, Argentina (Open to Remote & Hybrid)
- **Email**: axelinformaticafiuba@gmail.com
- **LinkedIn**: [linkedin.com/in/axelapaza](https://www.linkedin.com/in/axelapaza)
- **Background**: Software Engineering student with hands-on technical management, QA execution, and operational architecture experience.

### Key Impact & Record
- **10+ End-to-End Projects Delivered**: Covering mobile applications, in-house ERP platforms, and AI-enabled telephony systems.
- **12+ Cross-Functional Team Members Led**: Synchronizing frontend, backend, UI/UX designers, manual QA, and executive stakeholders.
- **100+ Concurrent Real-Time Users**: Supported across live production deployments in real estate inspections and operations.

---

## 🚀 Featured Projects & Case Studies

The portfolio features deep-dive interactive case studies powered by dynamic data in [`script.js`](script.js) and structured cards in [`index.html`](index.html):

### 1. iNSPECT — Mobile Inspections App
- **Domain**: Real Estate Inspections / Mobile
- **Role**: Project Manager & Manual QA • 8 Months • 4-Person Squad (1 Frontend, 1 Backend, 1 QA, 1 UI/UX Designer)
- **Tech Stack**: Dart, Flutter, Jira, TestFlight, Scrum, Design Thinking
- **The Challenge**: Synchronizing real-time data collection across mobile devices with a high-availability backend under strict federal housing compliance standards (NSPIRE, NSPIRE-V, and HQS).
- **Solution & Delivery**: Executed an Agile Scrum framework (6 two-week sprints to MVP) before transitioning to Kanban for continuous delivery. Implemented offline data persistence with auto-sync, geotracking for inspector presence, and an end-to-end unit verification flow.
- **Key Metrics & Impact**:
  - **-45%** reduction in inspection cycle turnaround time.
  - **+600** inspections processed daily across all client accounts.
  - **100%** company-wide adoption rate.

### 2. GIS Portal — Inspections Operations ERP System
- **Domain**: Real Estate Tech / In-House Enterprise ERP
- **Role**: Technical Project Manager & QA • 10 Months • 5-Person Squad (2 Fullstack Engineers, 2 UI/UX Designers, 1 QA)
- **Tech Stack**: Python, Django, PostgreSQL, Jira, Figma, Kanban
- **The Challenge**: The Inspections Department needed a full digital back-office platform to streamline operations, coordinate on-field inspectors, and maintain auditable inspection records.
- **Solution & Delivery**: Led development using Kanban with strict Work-In-Progress (WIP) limits. Delivered an asynchronous report generation engine handling 1,000+ weekly client-customized exports, multi-tenant Role-Based Access Control (RBAC), and automated letter delivery to landlords and tenants.
- **Key Metrics & Impact**:
  - **-80%** time saved on manual data entry tasks.
  - **+30** new enterprise clients onboarded.
  - **100%** automated report generation.

### 3. Reception with AI Integration
- **Domain**: Call Center / Voice & AI Automation
- **Role**: Project Manager • 2 Months • 4-Person Engineering Team
- **Tech Stack**: Python, Django, OpenAI Whisper, Zoom Phone API, Cloud Storage
- **The Challenge**: Architecting an automated operational flow to route incoming phone calls, resolve repetitive inquiries via speech-to-text AI, and preserve human receptionist handoffs.
- **Solution & Delivery**: Managed sprint delivery and Zoom Phone API integration standards to deliver an operational Heads-Up Display (HUD) for receptionists paired with Whisper-powered call transcription, query deflection, and auditable logging.
- **Key Metrics & Impact**:
  - **-10% to -17%** incoming call volume delegated to and resolved by AI.
  - **+50** concurrent users continuously uploading requests to cloud storage.
  - **3-month** rapid lifecycle delivery from inception to production.

### 4. Landlord-Oriented Portal for Unit Management
- **Domain**: Property Management / Real Estate
- **Role**: Technical Business Analyst • 4 Months (MVP) • 4-Person Squad (1 PM, 1 Fullstack, 1 Frontend, 1 UI/UX Designer)
- **Tech Stack**: Jira, Confluence, Design Thinking, Monolithic Architecture Integration
- **The Challenge**: Providing property owners and landlords with a direct portal to manage units, tenants, and inspection remediation requests in compliance with local housing ordinances.
- **Solution & Delivery**: Led user discovery interviews with landlords, mapped user stories and integration workflows with the core monolith, and coordinated Kanban-driven QA testing.

---

## 🛠️ Core Competencies & Technical Stack

### Methodologies & Frameworks
- **Agile / Scrum / Kanban**: Sprint planning, backlog refinement, user story estimation, daily standups, retrospectives.
- **Prioritization Frameworks**: MoSCoW, RICE scoring for MVP scope defense and feature bloat elimination.
- **Roadmap & Delivery**: Gantt charting, dependency mapping, risk mitigation, and RAID logging.
- **Release Management**: CI/CD staging gates, cherry-picking, deployment sign-offs, rollbacks.

### Project & Collaboration Tools
- **Project Tracking**: Jira Software, Confluence, Notion
- **Design & Ideation**: Figma (design review and developer handoff), Excalidraw
- **Communication & IDE**: Zoom Workplace, Microsoft Teams, Visual Studio Code, Antigravity

### Technical Literacy
- **Architecture**: Monolithic and Microservices architectures, RESTful API integration.
- **Databases & Data Stores**: PostgreSQL, MongoDB, Neo4j.
- **AI & Emerging Tech**: Whisper API voice integration, vectorization, LLM-assisted workflows.
- **DevOps & Quality**: Git/GitHub version control, automated deployment pipelines, manual QA testing.

---

## 💻 Interactive Portfolio Features

1. **Interactive Deep Dive Modals**: Clicking **"Deep Dive Case Study"** opens an accessible modal with full architectural breakdown, problem statements, governance notes, and metrics dynamically populated from [`script.js`](script.js).
2. **Category Filtering**: Instant client-side filtering by category (*All Projects*, *Real Estate*, *AI Integration*).
3. **Dark / Light Theme Switcher**: Toggle with `localStorage` memory and automatic OS color scheme detection (`prefers-color-scheme`).
4. **Direct CV Download**: Hero button directly downloads [`Axel_Apaza_Salazar_CV.pdf`](Axel_Apaza_Salazar_CV.pdf).
5. **Print & PDF Resume View**: Dedicated `@media print` rules format the page into an executive paper resume via the **"Print / PDF"** button.

---

## 📂 Project Structure

```text
Portfolio/
├── Axel_Apaza_Salazar_CV.pdf   # Direct download PDF Curriculum Vitae
├── index.html                  # Semantic markup, sections, cards, and modal container
├── script.js                   # Interactive modal data (projectData), theme, and filters
├── style.css                   # Custom CSS variables, responsive grid, animations, and print styles
└── README.md                   # Project documentation and portfolio overview
```

---

## 🚀 How to Run Locally

### Option 1: Browser Direct
Double-click [`index.html`](index.html) or open it with any modern web browser (Chrome, Edge, Firefox, Safari).

### Option 2: Local Development Server
Run any of the following in this directory:

- **Python**:
  ```bash
  python -m http.server 8000
  ```
  Open `http://localhost:8000`

- **Node.js**:
  ```bash
  npx serve .
  ```

- **VS Code**:
  Install the **Live Server** extension and click **Go Live**.

---

## ✏️ How to Update Your Information

| File | Section | What to Edit |
| :--- | :--- | :--- |
| [`index.html`](index.html) | Hero, Experience, Credentials | Update contact information, stats, career timeline entries, and certification statuses. |
| [`script.js`](script.js) | `projectData` object (lines 7–82) | Edit or add project case studies, features, governance notes, and KPIs for the modal view. |
| [`style.css`](style.css) | `:root` CSS variables (lines 1–50) | Customize primary accent colors, gradients, font stacks, and card radiuses. |
| Root folder | `Axel_Apaza_Salazar_CV.pdf` | Replace the PDF file when releasing an updated version of your resume. |
