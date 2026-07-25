/* ==========================================================
   ResearchCopilot
   Project Hub
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    lucide.createIcons();

    loadHub();

});

/* ==========================================================
   MOCK DATA
========================================================== */

const hubData = {

    overview:
        "Based on the research analysis, this project has strong technical feasibility and clear market differentiation. The recommended architecture emphasizes scalability, modularity and rapid development for hackathons as well as production deployment.",

    techStack: [

        {
            name: "React",
            role: "Frontend",
            description: "Build a responsive and component-based user interface."
        },

        {
            name: "FastAPI",
            role: "Backend",
            description: "High-performance REST API for AI requests and authentication."
        },

        {
            name: "Gemini API",
            role: "AI",
            description: "Idea validation, research summarization and report generation."
        },

        {
            name: "PostgreSQL",
            role: "Database",
            description: "Store users, projects, research reports and history."
        },

        {
            name: "Docker",
            role: "Deployment",
            description: "Containerize the application for easy deployment."
        },

        {
            name: "Redis",
            role: "Caching",
            description: "Improve response speed and cache AI results."
        }

    ],

    roadmap: [

        {
            week: "Week 1",
            tasks: [
                "Project setup",
                "Authentication",
                "Research workflow",
                "Database schema"
            ]
        },

        {
            week: "Week 2",
            tasks: [
                "Frontend pages",
                "Backend APIs",
                "Gemini integration"
            ]
        },

        {
            week: "Week 3",
            tasks: [
                "Testing",
                "Performance optimization",
                "Deployment"
            ]
        },

        {
            week: "Week 4",
            tasks: [
                "Documentation",
                "Presentation",
                "Final polish"
            ]
        }

    ],

    features: [

        "Authentication",

        "Idea Validation",

        "Research Report",

        "Architecture Generator",

        "Project Roadmap",

        "Export PDF",

        "Dashboard",

        "AI Recommendations"

    ],

    deliverables: [

        "Responsive Web Application",

        "AI-powered Validation",

        "Research Dashboard",

        "Architecture Planner",

        "Development Roadmap",

        "Technical Documentation",

        "Presentation Slides"

    ]

};

/* ==========================================================
   LOAD EVERYTHING
========================================================== */

function loadHub(){

    renderOverview();

    renderTech();

    renderRoadmap();

    renderFeatures();

    renderDeliverables();

}

/* ==========================================================
   OVERVIEW
========================================================== */

function renderOverview(){

    document.getElementById("project-overview").textContent =
        hubData.overview;

}

/* ==========================================================
   TECH STACK
========================================================== */

function renderTech(){

    const container =
        document.getElementById("tech-grid");

    hubData.techStack.forEach(item => {

        container.innerHTML += `

        <div class="tech-card">

            <div class="tech-header">

                <div class="tech-title">

                    ${item.name}

                </div>

                <div class="tech-role">

                    ${item.role}

                </div>

            </div>

            <div class="tech-description">

                ${item.description}

            </div>

        </div>

        `;

    });

}

/* ==========================================================
   ROADMAP
========================================================== */

function renderRoadmap(){

    const roadmap =
        document.getElementById("roadmap");

    hubData.roadmap.forEach(step => {

        roadmap.innerHTML += `

        <div class="roadmap-step">

            <h3>

                ${step.week}

            </h3>

            <ul>

                ${step.tasks
                    .map(task => `<li>${task}</li>`)
                    .join("")}

            </ul>

        </div>

        `;

    });

}

/* ==========================================================
   FEATURES
========================================================== */

function renderFeatures(){

    const featureGrid =
        document.getElementById("feature-grid");

    hubData.features.forEach(feature => {

        featureGrid.innerHTML += `

        <div class="feature">

            <i data-lucide="check-circle-2"></i>

            <span>

                ${feature}

            </span>

        </div>

        `;

    });

    lucide.createIcons();

}

/* ==========================================================
   DELIVERABLES
========================================================== */

function renderDeliverables(){

    const list =
        document.getElementById("deliverables");

    hubData.deliverables.forEach(item => {

        list.innerHTML += `

        <li>

            <i data-lucide="badge-check"></i>

            ${item}

        </li>

        `;

    });

    lucide.createIcons();

}

/* ==========================================================
   BUTTON
========================================================== */

document.addEventListener("click", (e) => {

    if(e.target.id === "continueDashboard"){

        window.location.href = "dashboard.html";

    }

});

/* ==========================================================
   SIMPLE CARD ANIMATION
========================================================== */

const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if(entry.isIntersecting){

                entry.target.classList.add("fade-up");

            }

        });

    },

    {

        threshold:0.15

    }

);

window.addEventListener("load", () => {

    document.querySelectorAll(

        ".card,.metric,.tech-card,.feature,.roadmap-step"

    ).forEach(item => {

        observer.observe(item);

    });

});