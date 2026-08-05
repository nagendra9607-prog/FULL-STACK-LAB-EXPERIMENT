// =============================
// Typing Animation
// =============================

const words = [
    "Web Developer",
    "Frontend Developer",
    "Java Programmer",
    "UI Designer",
    "Student"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function typeEffect() {

    if (!typing) return;

    let current = words[wordIndex];

    if (!deleting) {
        typing.textContent = current.substring(0, charIndex++);
    } else {
        typing.textContent = current.substring(0, charIndex--);
    }

    let speed = deleting ? 70 : 120;

    if (!deleting && charIndex > current.length) {
        deleting = true;
        speed = 1500;
    }

    if (deleting && charIndex < 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        speed = 300;
    }

    setTimeout(typeEffect, speed);

}

typeEffect();


// =============================
// Dark Mode
// =============================

const themeBtn = document.getElementById("theme-btn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        themeBtn.innerHTML =
        '<i class="fa-solid fa-sun"></i>';

    }else{

        themeBtn.innerHTML =
        '<i class="fa-solid fa-moon"></i>';

    }

});


// =============================
// Contact Form
// =============================

const form = document.querySelector("form");

if(form){

form.addEventListener("submit",function(e){

    e.preventDefault();

    alert("Thank You! Your message has been sent successfully.");

    form.reset();

});

}


// =============================
// Scroll Animation
// =============================

const sections = document.querySelectorAll("section");

function reveal(){

sections.forEach(section=>{

const windowHeight = window.innerHeight;

const revealTop = section.getBoundingClientRect().top;

if(revealTop < windowHeight-120){

section.style.opacity="1";
section.style.transform="translateY(0)";

}

});

}

sections.forEach(section=>{

section.style.opacity="0";
section.style.transform="translateY(40px)";
section.style.transition=".7s";

});

window.addEventListener("scroll",reveal);

reveal();


// =============================
// Active Navbar
// =============================

const navLinks=document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-150;

if(pageYOffset>=sectionTop){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});


// =============================
// Smooth Hover
// =============================

const cards=document.querySelectorAll(".project-card,.skill,.timeline-box");

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-10px)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0px)";

});

});


// =============================
// Welcome Message
// =============================

window.onload=()=>{

console.log("Nagendra Portfolio Loaded Successfully");

};
// =======================
// Loading Screen
// =======================

window.addEventListener("load",function(){

    const loader=document.getElementById("loader");

    loader.style.opacity="0";

    loader.style.visibility="hidden";

});