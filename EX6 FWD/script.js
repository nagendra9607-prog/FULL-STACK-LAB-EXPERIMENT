// ===============================
// Live Date & Time
// ===============================

function updateDateTime() {

    let now = new Date();

    let options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    };

    document.getElementById("date").innerHTML =
        now.toLocaleDateString("en-US", options) +
        " | " +
        now.toLocaleTimeString();

}

setInterval(updateDateTime, 1000);

updateDateTime();


// ===============================
// Search Function
// ===============================

function searchLeave() {

    let search = document.getElementById("search").value;

    if (search == "") {

        alert("Please Enter Leave Type");

    }

    else {

        alert("Search Result : " + search);

    }

}


// ===============================
// Submit Function
// ===============================

function submitLeave() {

    alert("✅ Leave Application Submitted Successfully!");

}


// ===============================
// Download / Print
// ===============================

function printSlip() {

    alert("Downloading Leave Slip...");

    window.print();

}


// ===============================
// Dark Mode
// ===============================

let dark = false;

function darkMode() {

    if (!dark) {

        document.body.style.background = "#121212";
        document.body.style.color = "white";

        dark = true;

    }

    else {

        document.body.style.background = "#eef3f9";
        document.body.style.color = "black";

        dark = false;

    }

}


// ===============================
// Reset Alert
// ===============================

document.addEventListener("DOMContentLoaded", function () {

    let form = document.querySelector("form");

    form.addEventListener("reset", function () {

        setTimeout(function () {

            alert("Form Reset Successfully");

        }, 100);

    });

});