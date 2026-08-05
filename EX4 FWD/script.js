// ===============================
// SELECT ELEMENTS
// ===============================

const menuBtn = document.getElementById("menu-btn");
const navbar = document.querySelector(".navbar");

const searchBtn = document.getElementById("search-btn");
const searchBox = document.querySelector(".search-box");

const themeBtn = document.getElementById("theme-btn");

const topBtn = document.getElementById("topBtn");

const wishlistBtns = document.querySelectorAll(".food-icons .fa-heart");

const cartBtns = document.querySelectorAll(".food-icons .fa-cart-shopping");

// ===============================
// MOBILE MENU
// ===============================

menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("active");
});

// ===============================
// SEARCH BOX
// ===============================

searchBtn.addEventListener("click", () => {
    searchBox.classList.toggle("active");
});

// ===============================
// CLOSE MENU ON LINK CLICK
// ===============================

document.querySelectorAll(".navbar a").forEach(link => {
    link.addEventListener("click", () => {
        navbar.classList.remove("active");
    });
});

// ===============================
// DARK MODE
// ===============================

if(localStorage.getItem("theme") === "dark"){

    document.body.classList.add("dark");

    themeBtn.classList.remove("fa-moon");
    themeBtn.classList.add("fa-sun");

}

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        themeBtn.classList.remove("fa-moon");
        themeBtn.classList.add("fa-sun");

        localStorage.setItem("theme","dark");

    }else{

        themeBtn.classList.remove("fa-sun");
        themeBtn.classList.add("fa-moon");

        localStorage.setItem("theme","light");

    }

});

// ===============================
// WISHLIST BUTTON
// ===============================

wishlistBtns.forEach(btn => {

    btn.addEventListener("click", () => {

        btn.classList.toggle("fa-solid");
        btn.classList.toggle("fa-regular");

        btn.style.color =
            btn.style.color === "red" ? "" : "red";

    });

});

// ===============================
// CART BUTTON
// ===============================

cartBtns.forEach(btn => {

    btn.addEventListener("click", () => {

        alert("Item added to cart!");

    });

});

// ===============================
// BACK TO TOP BUTTON
// ===============================

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        topBtn.classList.add("show");
    } else {
        topBtn.classList.remove("show");
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// ===============================
// CLOSE SEARCH ON SCROLL
// ===============================

window.addEventListener("scroll", () => {

    searchBox.classList.remove("active");
    navbar.classList.remove("active");

});

// ===============================
// REVEAL ANIMATION
// ===============================

const revealElements = document.querySelectorAll(
    ".food-card, .box, .review-box, .faq-box"
);

function revealOnScroll() {

    const trigger = window.innerHeight * 0.85;

    revealElements.forEach(element => {

        const top = element.getBoundingClientRect().top;

        if (top < trigger) {

            element.style.opacity = "1";
            element.style.transform = "translateY(0)";

        }

    });

}

revealElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(50px)";
    element.style.transition = "0.6s ease";

});

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// ===============================
// ACTIVE NAVBAR LINK
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

// ===============================
// CLICK OUTSIDE SEARCH BOX
// ===============================

document.addEventListener("click", (e) => {

    if (
        !searchBox.contains(e.target) &&
        !searchBtn.contains(e.target)
    ) {
        searchBox.classList.remove("active");
    }

});

// ===============================
// PAGE LOADED
// ===============================

window.addEventListener("load", () => {

    console.log("Food Delivery Website Loaded Successfully!");

});
// ===============================
// CATEGORY FILTER
// ===============================

const categoryBoxes = document.querySelectorAll(".category-container .box");
const foodCards = document.querySelectorAll(".food-card");

categoryBoxes.forEach(box => {

    box.addEventListener("click", () => {

        const filter = box.dataset.filter;

        foodCards.forEach(card => {

            if (card.dataset.category === filter) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });

});
