/* ==========================================================
   ResearchCopilot
   Research Page
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    lucide.createIcons();

    loadResearch();

});

/* ==========================================================
   MOCK DATA
========================================================== */

let researchData = null;

/* ==========================================================
   LOAD EVERYTHING
========================================================== */

function loadResearch() {

    const validation = JSON.parse(
        localStorage.getItem("validationResult")
    );

    if (!validation) {

        alert("No research data found.");

        window.location.href = "index.html";

        return;

    }

    researchData = {

        summary: validation.summary,

        gap: `
<h3>Weaknesses</h3>

<ul>
${validation.weaknesses.map(item =>
`<li>${item}</li>`).join("")}
</ul>

<h3>Recommendations</h3>

<ul>
${validation.recommendations.map(item =>
`<li>${item}</li>`).join("")}
</ul>
`,

        tech: [
    "Gemini AI",
    "FastAPI",
    "Startup Validation",
    "LLM Analysis",
    "Research Intelligence"
],

        sources: [

            {
                type: "ai",
                icon: "brain",
                badge: "AI",

                title: "Gemini Analysis",

                description:
`AI analysed the startup idea and generated a feasibility report with strengths, weaknesses and recommendations.`,

                link: "#"

            }

        ],

        comparison: [

            {
                solution: "Your Idea",

                tech: "AI",

                strength:
validation.strengths
.map(x=>"• "+x)
.join("<br>"),

                limitation:
validation.weaknesses
.map(x=>"• "+x)
.join("<br>")

            }

        ]

    };

    // Update Score Dashboard
document.getElementById("score-number").textContent =
    validation.score;

document.getElementById("verdict-text").textContent =
    validation.verdict;

// Change colour based on score
const circle = document.querySelector(".score-card");

if (validation.score >= 80) {

    circle.style.background = "#16a34a";   // Green

}
else if (validation.score >= 60) {

    circle.style.background = "#f59e0b";   // Orange

}
else {

    circle.style.background = "#dc2626";   // Red

}

    document.getElementById("score-number").textContent =
    validation.score;

document.getElementById("verdict-text").textContent =
    validation.verdict;

renderInsights();

renderSources();

renderComparison();

renderGap();

renderTech();

initializeAnimations();
    

}

/* ==========================================================
   SUMMARY
========================================================== */

function renderSummary(){

    document.getElementById("summary-text").textContent =
        researchData.summary;

}

/* ==========================================================
   INSIGHTS
========================================================== */

function renderInsights() {

    const validation = JSON.parse(
        localStorage.getItem("validationResult")
    );

    const strengthList =
        document.getElementById("strength-list");

    const weaknessList =
        document.getElementById("weakness-list");

    strengthList.innerHTML = "";
    weaknessList.innerHTML = "";

    validation.strengths.forEach(item => {

        strengthList.innerHTML +=
            `<li>✅ ${item}</li>`;

    });

    validation.weaknesses.forEach(item => {

        weaknessList.innerHTML +=
            `<li>⚠ ${item}</li>`;

    });

}

/* ==========================================================
   SOURCE CARDS
========================================================== */

function renderSources(){

    const grid=document.getElementById("source-grid");

    researchData.sources.forEach(source=>{

        grid.innerHTML+=`

        <div class="source-card fade-up">

            <div class="source-top">

                <div class="source-icon">

                    <i data-lucide="${source.icon}"></i>

                </div>

                <span class="badge badge-${source.type}">

                    ${source.badge}

                </span>

            </div>

            <div>

                <div class="source-title">

                    ${source.title}

                </div>

            </div>

            <div class="source-description">

                ${source.description}

            </div>

            <div class="source-footer">

                <span>Verified Source</span>

                <a href="${source.link}"

                   class="source-link">

                   Open →

                </a>

            </div>

        </div>

        `;

    });

    lucide.createIcons();

}

/* ==========================================================
   COMPARISON TABLE
========================================================== */

function renderComparison(){

    const tbody=document.getElementById("comparison-table");

    researchData.comparison.forEach(item=>{

        tbody.innerHTML+=`

        <tr>

            <td>${item.solution}</td>

            <td>${item.tech}</td>

            <td>${item.strength}</td>

            <td>${item.limitation}</td>

        </tr>

        `;

    });

}

/* ==========================================================
   GAP
========================================================== */

function renderGap(){

    document.getElementById("gap-text").innerHTML=

    researchData.gap;

}

/* ==========================================================
   TECH STACK
========================================================== */

function renderTech(){

    const container=document.getElementById("tech-list");

    researchData.tech.forEach(stack=>{

        container.innerHTML+=`

        <div class="tech-chip">

            ${stack}

        </div>

        `;

    });

}

/* ==========================================================
   BUTTON
========================================================== */

document.addEventListener("click",(e)=>{

    if(e.target.id==="continueHub"){

        window.location.href="hub.html";

    }

});

/* ==========================================================
   ANIMATIONS
========================================================== */

function initializeAnimations(){

    const observer=new IntersectionObserver(

        entries=>{

            entries.forEach(entry=>{

                if(entry.isIntersecting){

                    entry.target.classList.add("fade-up");

                }

            });

        },

        {

            threshold:.15

        }

    );

    document.querySelectorAll(

        ".card,.source-card,.comparison,.tech-stack"

    ).forEach(el=>{

        observer.observe(el);

    });

}