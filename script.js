/* ==========================================================================
   AXEL | TECHNICAL PROJECT MANAGER CV & PORTFOLIO
   Interactive Client Script
   ========================================================================== */

// Detailed Case Studies Data for Modal Deep Dives
const projectData = {
  p1: {
    tag: "Real Estate Inspections",
    title: "iNSPECT - Mobile Inspections App",
    role: "Project Manager and Manual QA • 8 Months • Team of 4 (1 Frontend, 1 backend, 1 QA, 1 UI/UX Designer)",
    challenge: "Synzhronizing real-time data collection across mobile devices with a highavailability backend, all while maintaining data integrity and meeting the reporting demands of federal housing standards and compliance frameworks.",
    solution: "Through design-thinking we got into the inspector behavior and protocol. Implemented a complete workflow for inspectors, organized an Agile Scrum framework with 6 2-week sprints to complete an MVP, then we switched to a Kanban methodology to manage ongoing improvements, client and in-house requests.",
    features: [
      "Workflow Implementation: Implemented a comprehensive workflow for inspectors that allows them to report findings with the NSPIRE, NSPIRE-V and HQS protocols.",
      "Offline Data Persistence: Implemented a local database to store inspection data when offline, with automatic synchronization to the backend once connectivity is restored.",
      "Geotracking: Integrated a geolocation service to track inspector movements.",
      "Unit Verification: Implemented a unit verification system to ensure that inspectors are on-site and performing inspections at the correct locations.",
      "Metrics Tracking: Implemented a real-time metrics tracking system to ensure that inspection metrics are always up-to-date and accessible to all stakeholders. Metrics used: Time to complete inspections, Inspector's start and end of shifts, # inspections failed and # inspections passed.",
    ],
    governance: "Validated workflow solution with real Inspectors, Contained the source of truth, Managed daily standups with the team, conducted weekly reviews with the Inspections Department to ensure alignment and transparency.",
    metrics: [
      { val: "-45%", desc: "Reduced time on the Inspections Cycle" },
      { val: "+600", desc: "Inspections processed per day across all clients" },
      { val: "100%", desc: "Adoption Rate in the company" }
    ]
  },

  p2: {
    tag: "In House Project",
    title: "GIS Portal Inspections Operations ERP System",
    role: "Technical Project Manager and QA • 10 Months • Team of 5 (2 Fullstacks, 2 UI/UX Designers, 1 QA)",
    challenge: "The inspection Department needed a full digital solution to streamline their back-office operations, manage cross-functional workflows with on-field inspectors and persist auditable records.",
    solution: "Led the delivery of a portal with full management of the operational cycle of inspections. Utilized Kanban methodology with strict WIP (Work-In-Progress) limits to maintain engineering flow and unblock cross-team dependencies this project had to be delivered along the inspections mobile app.",
    features: [
      "Inspection Workflow: Built a scalable system that supports the most used housing protocols: HQS, NSPIRE and NSPIRE-V.",
      "Asynchronous Report Generation: Engine handling 1000+ weekly exports with client customization.",
      "Multi-Tenant Role-Based Access Control (RBAC): Using Django we built granular permissions allowing tenant administrators to manage their own portals.",
      "Asynchronous backend support: Delivered a robust backend architecture to handle high-volume and high-latency on-field operations.",
      "User-Assisted Email Delivery: Implemented a user-assisted flow to deliver daily reports and letters directly to Landlords and Tenants."
    ],
    governance: "Conducted weekly reviews with the Inspections Department stakeholders. Eliminated scope creep requests via structured MoSCoW prioritization, and maintained a single source of truth for all stakeholders using Confluence documentation. Managed the technical scope and completed the MVP in 6 months the backlog refinement and full solution was finished in 10 months. ",
    metrics: [
      { val: "-80%", desc: "Time Saved on Manual Data Entry tasks" },
      { val: "+30", desc: "New Clients Onboarded" },
      { val: "100%", desc: "Automated Report Generation with client customization" }
    ]
  },

  p3: {
  tag: "Call Center",
  title: "Reception with AI Integration",
  role: "Project Manager",
  challenge: "Integrating a full operational flow for handling incoming calls with AI-assisted routing and automated response systems.",
  solution: "Led a 4-person engineering team over 2 months to architect a Django and Python-based operational HUD integrated with Zoom Phone and OpenAI Whisper, automating routine inquiries while maintaining auditable human-agent handoffs.",
  features: [
    "Operational HUD for Receptionists: Centralized operational dashboard to streamline incoming call handling via Zoom Phone.",
    "AI-Based Call Handling: Automated workflow powered by OpenAI Whisper to deflect and resolve repetitive call inquiries.",
    "Auditable Logging Per Call: Comprehensive audit trail capturing interactions between human receptionists and AI agents.",
  ],
  governance: "Managed a cross-functional 4-person team across a 2-month delivery lifecycle, overseeing Sprint delivery, Zoom Phone API integration standards, and operational audit compliance.",
  metrics: [
    { val: "-10%", desc: "Call Volume Reduced and Delegated to AI" },
    { val: "+50", desc: "Concurrent Users Continuously Uploading Requests to Cloud Storage" },
    { val: "3 Months", desc: "Delivery Timeline by a 4-Person Team" }
  ]
},

  p4: {
    tag: "Property Management",
    title: "Landlord Portal for Unit Management",
    role: "Technical Business Analyst • 3 Months (MVP) • Team of 4 (1 PM, 1 Fullstack, 1 Frontend, 1 UI/UX Designer)",
    challenge: "Creating a portal for landlords to manage their units, tenants, and maintenance requests while ensuring compliance with local housing regulations.",
    solution: "Made an strategy to best integrate the project into our ecosystem and our main monolith, using Design Thinking principles for user research, feature discovery and feedback loops with landlords. Implemented a Kanban workflow to manage feature delivery and QA testing.",
    features: [
      "Unit Management Portal: Developed a comprehensive portal for landlords to manage their properties, tenants, and inspections results.",
      "Inspection Request Management: Implemented a workflow for landlords to submit and track inspection requests for failed inspections.",
    ],
    governance: "Performed interviews with landlords to gather requirements, creation of User Stories, and designed workflows for backend integration with the main monolith.",
    metrics: [{ val: "", desc: "No metrics available due to the project being in early stages of adoption and feedback collection." }]
  },
};

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initFilters();
  initNavScroll();
  initMobileMenu();
});

/* ==========================================================================
   THEME SWITCHER (Dark / Light)
   ========================================================================== */
function initTheme() {
  const themeToggle = document.getElementById('theme-toggle');
  const savedTheme = localStorage.getItem('axel-theme');
  
  if (savedTheme) {
    document.body.setAttribute('data-theme', savedTheme);
  } else {
    // Detect system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.body.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = document.body.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.body.setAttribute('data-theme', newTheme);
      localStorage.setItem('axel-theme', newTheme);
    });
  }
}

/* ==========================================================================
   PROJECT CATEGORY FILTERING
   ========================================================================== */
function initFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Toggle active button
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (filterValue === 'all' || cardCategory === filterValue) {
          card.style.display = 'flex';
          card.style.animation = 'fadeIn 0.3s ease forwards';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ==========================================================================
   PROJECT CASE STUDY MODAL
   ========================================================================== */
function openProjectModal(projectId) {
  const modal = document.getElementById('project-modal');
  const target = document.getElementById('modal-content-target');
  const data = projectData[projectId];

  if (!modal || !target || !data) return;

  target.innerHTML = `
    <span class="modal-tag">${data.tag}</span>
    <h3 class="modal-title">${data.title}</h3>
    <div class="modal-role">${data.role}</div>

    <div class="modal-section">
      <h4>🎯 The Problem & Objective</h4>
      <p>${data.challenge}</p>
    </div>

    <div class="modal-section">
      <h4>💡 Strategic Delivery & Execution Approach</h4>
      <p>${data.solution}</p>
    </div>

    <div class="modal-section">
      <h4>🚀 Core Features & Architectural Deliverables</h4>
      <ul class="modal-list">
        ${data.features.map(f => `<li>${f}</li>`).join('')}
      </ul>
    </div>

    <div class="modal-section">
      <h4>📋 Project Governance & Stakeholder Alignment</h4>
      <p>${data.governance}</p>
    </div>

    <div class="modal-metrics-strip">
      ${data.metrics.map(m => `
        <div>
          <div class="metric-val" style="font-size: 1.5rem;">${m.val}</div>
          <div class="metric-desc">${m.desc}</div>
        </div>
      `).join('')}
    </div>
  `;

  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden'; // Lock background scroll
}

function closeProjectModal() {
  const modal = document.getElementById('project-modal');
  if (modal) {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
}

// Close on backdrop click or Escape key
document.addEventListener('click', (e) => {
  const modal = document.getElementById('project-modal');
  if (modal && e.target === modal) {
    closeProjectModal();
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeProjectModal();
  }
});

/* ==========================================================================
   NAVIGATION & ACTIVE STATE HIGHLIGHTING
   ========================================================================== */
function initNavScroll() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 120;
      const sectionId = section.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        current = sectionId;
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

function initMobileMenu() {
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const navMenu = document.getElementById('nav-menu');

  if (mobileBtn && navMenu) {
    mobileBtn.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });

    // Close menu when clicking a link
    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
      });
    });
  }
}

/* ==========================================================================
   FORM SUBMISSION FEEDBACK
   ========================================================================== */
function handleFormSubmit(event) {
  event.preventDefault();
  const status = document.getElementById('form-status');
  const name = document.getElementById('name').value;

  if (status) {
    status.className = 'form-status success';
    status.textContent = `Thank you, ${name}! Your message has been prepared. (Demo mode: Connect your form endpoint or email).`;

    // Clear inputs after brief moment
    setTimeout(() => {
      event.target.reset();
    }, 1500);
  }
}
