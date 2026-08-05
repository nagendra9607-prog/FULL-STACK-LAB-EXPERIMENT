/* ==========================================
   QuickMart - script.js
   Part D1
========================================== */

// =============================
// DOM Elements
// =============================

const loginBtn = document.getElementById("loginBtn");
const loginModal = document.getElementById("loginModal");
const closeBtn = document.querySelector(".close");

const productModal = document.getElementById("productModal");
const productClose = document.querySelector(".product-close");

const darkModeBtn = document.getElementById("darkModeBtn");

const toast = document.getElementById("toast");

const loader = document.getElementById("loader");

const sellForm = document.getElementById("sellForm");

const newsletterForm =
document.getElementById("newsletterForm");

const searchInput =
document.getElementById("searchInput");

const searchBtn =
document.getElementById("searchBtn");

const viewButtons =
document.querySelectorAll(".view-btn");

// =============================
// Loader
// =============================

window.addEventListener("load", () => {

    setTimeout(() => {

        loader.style.display = "none";

    }, 1200);

});

// =============================
// Toast
// =============================

function showToast(message) {

    toast.innerHTML = message;

    toast.classList.add("show");

    setTimeout(() => {

        toast.classList.remove("show");

    }, 3000);

}

// =============================
// Login Modal
// =============================

loginBtn.addEventListener("click", () => {

    loginModal.style.display = "flex";

});

closeBtn.addEventListener("click", () => {

    loginModal.style.display = "none";

});

// =============================
// Close Modal Outside
// =============================

window.addEventListener("click", (e) => {

    if (e.target == loginModal) {

        loginModal.style.display = "none";

    }

});

// =============================
// Product Modal
// =============================

viewButtons.forEach((btn) => {

    btn.addEventListener("click", () => {

        productModal.style.display = "flex";

    });

});

productClose.addEventListener("click", () => {

    productModal.style.display = "none";

});

window.addEventListener("click", (e) => {

    if (e.target == productModal) {

        productModal.style.display = "none";

    }

});

// =============================
// Dark Mode
// =============================

darkModeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

});

// =============================
// Search Button
// =============================

searchBtn.addEventListener("click", () => {

    let value = searchInput.value.trim();

    if (value === "") {

        showToast("Please enter a product name.");

    } else {

        showToast("Searching for " + value);

    }

});
/* ==========================================
   QuickMart - script.js
   Part D2
========================================== */

// =============================
// Wishlist
// =============================

const wishlistBtn =
document.getElementById("wishlistBtn");

let wishlistCount = 0;

wishlistBtn.addEventListener("click", () => {

    wishlistCount++;

    showToast(
        "Wishlist Items : " + wishlistCount
    );

});

// =============================
// Sell Form
// =============================

sellForm.addEventListener("submit", function (e) {

    e.preventDefault();

    showToast(
        "Advertisement Posted Successfully!"
    );

    sellForm.reset();

});

// =============================
// Newsletter
// =============================

newsletterForm.addEventListener("submit", function (e) {

    e.preventDefault();

    showToast(
        "Subscribed Successfully!"
    );

    newsletterForm.reset();

});

// =============================
// Contact Seller
// =============================

const contactBtn =
document.querySelector(".contact-btn");

contactBtn.addEventListener("click", () => {

    showToast(
        "Seller Contact Request Sent!"
    );

});

// =============================
// Login Submit
// =============================

const loginSubmit =
document.getElementById("loginSubmit");

loginSubmit.addEventListener("click", () => {

    showToast(
        "Login Successful!"
    );

    loginModal.style.display = "none";

});

// =============================
// Search Using Enter Key
// =============================

searchInput.addEventListener("keyup", function (e) {

    if (e.key === "Enter") {

        searchBtn.click();

    }

});

// =============================
// Product Hover Animation
// =============================

const cards =
document.querySelectorAll(".product-card");

cards.forEach((card) => {

    card.addEventListener("mouseenter", () => {

        card.style.transform =
            "translateY(-8px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "translateY(0px)";

    });

});

// =============================
// Smooth Scroll for Navigation
// =============================

document.querySelectorAll('nav a').forEach((link) => {

    link.addEventListener("click", function (e) {

        const target =
            document.querySelector(
                this.getAttribute("href")
            );

        if (target) {

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});
/* ==========================================
   QuickMart - script.js
   Part D3
========================================== */

// =============================
// Save Dark Mode
// =============================

if (localStorage.getItem("theme") === "dark") {

    document.body.classList.add("dark");

}

darkModeBtn.addEventListener("click", () => {

    if (document.body.classList.contains("dark")) {

        localStorage.setItem("theme", "dark");

    } else {

        localStorage.setItem("theme", "light");

    }

});

// =============================
// Dynamic Product Details
// =============================

const modalTitle =
document.getElementById("modalTitle");

const modalPrice =
document.getElementById("modalPrice");

const modalImage =
document.getElementById("modalImage");

const modalDescription =
document.getElementById("modalDescription");

cards.forEach((card) => {

    card.addEventListener("click", () => {

        const title =
        card.querySelector("h3").innerText;

        const price =
        card.querySelector("h4").innerText;

        const image =
        card.querySelector("img").src;

        const desc =
        card.querySelector("p").innerText;

        modalTitle.innerText = title;

        modalPrice.innerText = price;

        modalDescription.innerText = desc;

        modalImage.src = image;

    });

});

// =============================
// Fake Loading Animation
// =============================

setTimeout(() => {

    if (loader) {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        }, 400);

    }

}, 1000);

// =============================
// Welcome Toast
// =============================

setTimeout(() => {

    showToast("Welcome to QuickMart 🚀");

}, 1500);

// =============================
// Scroll Animation
// =============================

window.addEventListener("scroll", () => {

    const cards =
    document.querySelectorAll(
        ".category-card,.product-card"
    );

    cards.forEach((item) => {

        const top =
        item.getBoundingClientRect().top;

        if (top < window.innerHeight - 80) {

            item.style.opacity = "1";

            item.style.transform =
            "translateY(0px)";

        }

    });

});

// =============================
// Initial Animation Style
// =============================

document
.querySelectorAll(
".category-card,.product-card")
.forEach((item)=>{

    item.style.opacity="0";

    item.style.transform="translateY(40px)";

    item.style.transition=".5s";

});

// =============================
// Footer Year
// =============================

const year =
new Date().getFullYear();

const copy =
document.querySelector(".copyright p");

if(copy){

copy.innerHTML=
`© ${year} QuickMart. All Rights Reserved.`;

}

// =============================
// Console Message
// =============================

console.log(
"QuickMart Loaded Successfully."
);

// =============================
// END OF SCRIPT
// =============================