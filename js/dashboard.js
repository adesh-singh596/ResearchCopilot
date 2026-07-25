/* ==========================================================
   ResearchCopilot Dashboard
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    lucide.createIcons();

    initializeDashboard();

});

/* ==========================================================
   INITIALIZE
========================================================== */

function initializeDashboard(){

    seedProjects();

    loadStats();

    loadProjects();

    loadActivity();

    loadContinueCard();

    setupButtons();

}

/* ==========================================================
   DEMO DATA
========================================================== */

function seedProjects(){

    if(localStorage.getItem("rc-projects")) return;

    const projects=[

        {
            id:1,
            title:"AI Research Copilot",
            status:"Completed",
            score:91,
            reports:4,
            updated:"2 hours ago",
            stage:"Project Hub Completed"
        },

        {
            id:2,
            title:"Smart Farming AI",
            status:"In Progress",
            score:84,
            reports:2,
            updated:"Yesterday",
            stage:"Research Completed"
        },

        {
            id:3,
            title:"Healthcare Assistant",
            status:"Completed",
            score:95,
            reports:6,
            updated:"3 days ago",
            stage:"Dashboard"
        }

    ];

    localStorage.setItem(

        "rc-projects",

        JSON.stringify(projects)

    );

}

/* ==========================================================
   GET PROJECTS
========================================================== */

function getProjects(){

    return JSON.parse(

        localStorage.getItem("rc-projects")

    ) || [];

}

/* ==========================================================
   STATS
========================================================== */

function loadStats(){

    const projects=getProjects();

    document.getElementById("totalProjects").textContent=

        projects.length;

    document.getElementById("totalReports").textContent=

        projects.reduce((sum,p)=>sum+p.reports,0);

    document.getElementById("timeSaved").textContent=

        "32 hrs";

    document.getElementById("successRate").textContent=

        "91%";

}

/* ==========================================================
   PROJECT LIST
========================================================== */

function loadProjects(){

    const container=document.getElementById(

        "projects-list"

    );

    container.innerHTML="";

    getProjects().forEach(project=>{

        container.innerHTML+=`

        <div class="project-card">

            <div class="project-top">

                <div>

                    <div class="project-title">

                        ${project.title}

                    </div>

                    <small>

                        ${project.updated}

                    </small>

                </div>

                <div class="project-status

                ${project.status==="Completed"

                ?"completed"

                :"progress"}">

                ${project.status}

                </div>

            </div>

            <div class="project-meta">

                <span>

                    ⭐ ${project.score}/100

                </span>

                <span>

                    📄 ${project.reports} Reports

                </span>

                <span>

                    ${project.stage}

                </span>

            </div>

        </div>

        `;

    });

}

/* ==========================================================
   CONTINUE PROJECT
========================================================== */

function loadContinueCard(){

    const project=getProjects()[0];

    document.getElementById(

        "continue-project"

    ).innerHTML=`

    <div class="continue-card">

        <h3>

            ${project.title}

        </h3>

        <p>

            ${project.stage}

        </p>

        <button

        class="primary-btn"

        id="continueResearch">

            Continue →

        </button>

    </div>

    `;

}

/* ==========================================================
   ACTIVITY
========================================================== */

function loadActivity(){

    const activity=[

        {

            icon:"search",

            title:"Research Report Generated",

            time:"11:30 AM"

        },

        {

            icon:"git-branch",

            title:"Architecture Created",

            time:"11:42 AM"

        },

        {

            icon:"list-checks",

            title:"Roadmap Generated",

            time:"12:05 PM"

        },

        {

            icon:"folder",

            title:"Dashboard Updated",

            time:"12:15 PM"

        }

    ];

    const container=document.getElementById(

        "activity-list"

    );

    activity.forEach(item=>{

        container.innerHTML+=`

        <div class="activity">

            <div class="activity-icon">

                <i data-lucide="${item.icon}"></i>

            </div>

            <div class="activity-info">

                <h4>

                    ${item.title}

                </h4>

                <p>

                    ${item.time}

                </p>

            </div>

        </div>

        `;

    });

    lucide.createIcons();

}

/* ==========================================================
   BUTTONS
========================================================== */

function setupButtons(){

    document.addEventListener("click",(e)=>{

        if(e.target.id==="continueResearch"){

            window.location.href="research.html";

        }

    });

}