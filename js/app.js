/* ==========================================================
   ResearchCopilot
   app.js
   Phase 1
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    console.log("ResearchCopilot Loaded 🚀");

    initializeSidebar();

    initializeHeroAnimation();

    initializeIdeaInput();

    initializeCounters();

});

/* ==========================================================
   SIDEBAR
========================================================== */

function initializeSidebar(){

    const navLinks = document.querySelectorAll(".nav a");

    navLinks.forEach(link => {

        link.addEventListener("click", function(e){

            navLinks.forEach(item =>
                item.classList.remove("active")
            );

            this.classList.add("active");

        });

    });

}

/* ==========================================================
   HERO ANIMATION
========================================================== */

function initializeHeroAnimation(){

    const hero = document.querySelector(".hero");

    if(hero){

        hero.classList.add("fade-up");

    }

}

/* ==========================================================
   IDEA INPUT
========================================================== */

function initializeIdeaInput(){

    const textarea = document.querySelector("textarea");

    if(!textarea) return;

    textarea.addEventListener("focus", ()=>{

        document.querySelector(".idea-box")
            .style.borderColor = "#2563EB";

    });

    textarea.addEventListener("blur", ()=>{

        document.querySelector(".idea-box")
            .style.borderColor = "#E5E7EB";

    });

}

/* ==========================================================
   COUNTER ANIMATION
========================================================== */

function animateCounter(element,target,suffix=""){

    let current = 0;

    const increment = target / 60;

    const timer = setInterval(()=>{

        current += increment;

        if(current >= target){

            current = target;

            clearInterval(timer);

        }

        element.innerHTML = Math.floor(current) + suffix;

    },20);

}

function initializeCounters(){

    const stats = document.querySelectorAll(".stat h2");

    if(stats.length !== 3) return;

    animateCounter(stats[0],4800,"+");

    setTimeout(()=>{

        stats[1].innerHTML="47s";

    },900);

    setTimeout(()=>{

        stats[2].innerHTML="4 hrs";

    },1200);

}

/* ==========================================================
   BUTTON RIPPLE
========================================================== */

const buttons = document.querySelectorAll(".primary-btn");

buttons.forEach(button=>{

    button.addEventListener("click",function(e){

        const circle=document.createElement("span");

        const diameter=Math.max(
            this.clientWidth,
            this.clientHeight
        );

        circle.style.width=diameter+"px";
        circle.style.height=diameter+"px";

        circle.style.left=
        e.clientX-this.getBoundingClientRect().left-diameter/2+"px";

        circle.style.top=
        e.clientY-this.getBoundingClientRect().top-diameter/2+"px";

        circle.classList.add("ripple");

        const ripple=this.getElementsByClassName("ripple")[0];

        if(ripple){

            ripple.remove();

        }

        this.appendChild(circle);

    });

});

/* ==========================================================
   FUTURE PLACEHOLDERS
========================================================== */

// Phase 2
// Idea Validation Loading

// Phase 3
// Research API Integration

// Phase 4
// Dashboard Logic

// End