/* ==========================================================
   ResearchCopilot Validation Workflow
========================================================== */
console.log("validation.js loaded");
document.addEventListener("DOMContentLoaded", () => {

    initializeValidation();

});

/* ==========================================================
   Mock Validation Result
========================================================== */

let validationResult = null;

/* ==========================================================
   Steps
========================================================== */

const pipelineSteps=[

    "Parsing your idea...",

    "Searching GitHub repositories...",

    "Reading Research Papers...",

    "Comparing Existing Products...",

    "Finding Innovation Gap...",

    "Generating Final Report..."

];

/* ==========================================================
   Initialize
========================================================== */

function initializeValidation(){

    const button=document.querySelector(".primary-btn");

    if(!button) return;

    button.addEventListener("click",startValidation);

}

/* ==========================================================
   Start Validation
========================================================== */

async function startValidation() {

    console.log("1. Button clicked");

    const idea = document.querySelector("textarea").value.trim();

    if (!idea) {
        alert("Please enter your idea first.");
        return;
    }

    console.log("2. Idea:", idea);

    createOverlay();

    console.log("3. Overlay created");

    try {

        console.log("4. About to call fetch");

        const response = await fetch(
            "https://researchcopilot-8x1d.onrender.com/validate/",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    idea: idea
                })
            }
        );

        console.log("5. Fetch completed");

        validationResult = await response.json();

        console.log("6. Response:", validationResult);

        localStorage.setItem(
            "validationResult",
            JSON.stringify(validationResult)
        );

        runPipeline();

    } catch (error) {

        console.error("ERROR:", error);

    }

}
/* ==========================================================
   Create Overlay
========================================================== */

function createOverlay(){

    const overlay=document.createElement("div");

    overlay.className="validation-overlay active";

    overlay.innerHTML=`

    <div class="validation-container">

        <h2 class="validation-title">
            Validating your Idea
        </h2>

        <p class="validation-subtitle">
            Please wait while our AI researches trusted sources.
        </p>

        <div class="pipeline"></div>

        <div class="progress">

            <div class="progress-bar">

                <div class="progress-fill"></div>

            </div>

            <div class="progress-text">

                <span>Research Progress</span>

                <span id="progress-percent">0%</span>

            </div>

        </div>

        <div class="verdict-card">

        </div>

    </div>

    `;

    document.body.appendChild(overlay);

    const pipeline=document.querySelector(".pipeline");

    pipelineSteps.forEach(step=>{

        pipeline.innerHTML+=`

        <div class="pipeline-step">

            <div class="step-icon">

                <div class="spinner"></div>

            </div>

            <div class="step-content">

                <h4>${step}</h4>

                <p>Waiting...</p>

            </div>

        </div>

        `;

    });

}

/* ==========================================================
   Pipeline Animation
========================================================== */

function runPipeline(){

    const steps=document.querySelectorAll(".pipeline-step");

    const progress=document.querySelector(".progress-fill");

    const percent=document.querySelector("#progress-percent");

    let current=0;

    function nextStep(){

        if(current>0){

            steps[current-1].classList.remove("active");

            steps[current-1].classList.add("completed");

            steps[current-1]
            .querySelector(".step-icon")
            .innerHTML="✓";

            steps[current-1]
            .querySelector("p")
            .innerHTML="Completed";

        }

        if(current<steps.length){

            steps[current].classList.add("active");

            steps[current]
            .querySelector("p")
            .innerHTML="Processing...";

            const value=((current)/steps.length)*100;

            progress.style.width=value+"%";

            percent.innerHTML=Math.floor(value)+"%";

            current++;

            setTimeout(nextStep,1200);

        }

        else{

            progress.style.width="100%";

            percent.innerHTML="100%";

            setTimeout(showVerdict,700);

        }

    }

    nextStep();

}

/* ==========================================================
   Verdict
========================================================== */

function showVerdict(){

    const card=document.querySelector(".verdict-card");

    card.classList.add("show");

    card.innerHTML = `

<div class="score">
    ${validationResult.score}
</div>

<div class="verdict">
    🟢 ${validationResult.verdict}
</div>

<div class="idea-box-small">

    <h5>AI Summary</h5>

    <p>
        ${validationResult.summary}
    </p>

</div>

<div class="idea-box-small">

    <h5>Strengths</h5>

    <ul>

        ${validationResult.strengths
            .map(item => `<li>✔ ${item}</li>`)
            .join("")}

    </ul>

</div>

<button class="primary-btn continue-btn">

    Continue to Research →

</button>

`;

    document
    .querySelector(".continue-btn")
    .addEventListener("click",()=>{

        window.location.href="research.html";

    });

}