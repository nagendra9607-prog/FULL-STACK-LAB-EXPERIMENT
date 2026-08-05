const form = document.getElementById("taskForm");
const tasks = document.getElementById("tasks");
const totalTasks = document.getElementById("totalTasks");
const pendingTasks = document.getElementById("pendingTasks");

let count = 0;

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const name = document.getElementById("taskName").value;
    const desc = document.getElementById("taskDesc").value;
    const priority = document.getElementById("priority").value;
    const date = document.getElementById("dueDate").value;

    const card = document.createElement("div");
    card.classList.add("task-card");

    card.innerHTML = `
        <h3>${name}</h3>

        <p>${desc}</p>

        <p><b>Priority:</b> ${priority}</p>

        <p><b>Due Date:</b> ${date}</p>

        <span class="status">Pending</span>

        <br><br>

        <button class="statusBtn">Change Status</button>
        <button class="editBtn">Edit</button>
        <button class="deleteBtn">Delete</button>
    `;

    // Add Card
    tasks.appendChild(card);

    // Update Dashboard Count
    count++;
    totalTasks.innerText = count;
    pendingTasks.innerText = count;

    // Clear Form
    form.reset();

    // Change Status
    card.querySelector(".statusBtn").addEventListener("click", function () {

        const status = card.querySelector(".status");

        if (status.innerText === "Pending") {
            status.innerText = "In Progress";
            status.style.background = "blue";
        }
        else if (status.innerText === "In Progress") {
            status.innerText = "Completed";
            status.style.background = "green";
        }
        else {
            status.innerText = "Pending";
            status.style.background = "orange";
        }

    });

    // Edit Task
    card.querySelector(".editBtn").addEventListener("click", function () {

        const newName = prompt("Enter New Task Name", card.querySelector("h3").innerText);

        if (newName) {
            card.querySelector("h3").innerText = newName;
        }

    });

    // Delete Task
    card.querySelector(".deleteBtn").addEventListener("click", function () {

        card.remove();

        count--;

        totalTasks.innerText = count;
        pendingTasks.innerText = count;

    });

});