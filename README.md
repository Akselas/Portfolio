# Axel — Technical Project Manager Portfolio & CV

A high-performance, modern, and fully responsive web-based CV and portfolio designed specifically for **Technical Project Managers**, **Agile Delivery Leads**, and **Scrum Masters**.

---

## 🌟 Key Features

1. **Dedicated Projects & Feature Showcase**:
   - Structured space to present the **Challenge**, **Key Features & Modules Delivered**, and **Measurable Business Impact** for every initiative.
   - Interactive category filter tabs (*SaaS*, *Fintech & E-Commerce*, *Mobile & HealthTech*, *DevOps & Internal Tools*).
   - "Deep Dive Case Study" modals that break down problem statements, architecture, sprint governance, and technical milestones.

2. **Metrics & Impact Dashboard**:
   - Visual KPI highlight cards: Projects Delivered, On-Time Sprint Completion Rate, Cross-Functional Team Headcount, and Time-to-Market Acceleration.

3. **Core Competencies & PM Tool Stack**:
   - Methodologies (*Agile, Scrum, Kanban, RICE, MoSCoW, RAID*).
   - Tools (*Jira Software, Confluence, Linear, Asana, Notion, Miro, Figma*).
   - Technical Literacy (*Microservices, REST APIs, CI/CD, SQL, AWS, Test Automation*).

4. **Career Timeline & Credentials**:
   - Clean professional experience progression.
   - Certifications breakdown (*PMP, Certified ScrumMaster CSM, PMI-ACP*).

5. **Theme Switcher & PDF Print Ready**:
   - Dark / Light mode toggle with system preference auto-detection.
   - Dedicated `@media print` CSS stylesheet: clicking **"Print / PDF"** formats the page into a crisp, recruiter-friendly paper resume.

---

## 🚀 How to Run & View

### Option 1: Direct in Browser
Simply double-click [`index.html`](index.html) or right-click and choose **Open with > Chrome / Edge / Firefox / Safari**.

### Option 2: Local Web Server
You can launch a quick static server with any of the following:

- **Python**:
  ```bash
  python -m http.server 8000
  ```
  Then visit `http://localhost:8000`

- **Node.js (npx)**:
  ```bash
  npx serve .
  ```

- **VS Code**:
  Install the **Live Server** extension and click **Go Live**.

---

## 🛠️ How to Customize Your Details

All files are cleanly structured and commented:

| File | Purpose | Customization Tips |
| :--- | :--- | :--- |
| [`index.html`](index.html) | Page structure & text | Edit your name, bio, job titles, and contact links (search for `axel.pm@example.com` or `linkedin.com/in/axel-pm`). |
| [`script.js`](script.js) | Interactive behavior & modal data | Edit `projectData` at the top of the file to customize the deep-dive modal contents for each of your projects. |
| [`style.css`](style.css) | Colors, fonts, layout & print styles | Edit `:root` CSS variables at the top to change accent colors, brand gradients, or spacing. |

---

## 🖨️ Exporting to PDF / Printing

1. Click the **"Print / PDF"** button in the navigation header or hero section (or press `Ctrl + P` / `Cmd + P`).
2. Set Destination to **"Save as PDF"**.
3. Under More Settings:
   - Margins: **Default** or **Minimum**
   - Background Graphics: **Enabled** (checked)
4. Click **Save** to generate a clean PDF resume.
