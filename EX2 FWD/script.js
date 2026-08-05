// Register User
function register(){

    let user=document.getElementById("regUser").value;
    let pass=document.getElementById("regPass").value;
    let confirm=document.getElementById("regConfirm").value;

    if(user=="" || pass=="" || confirm==""){
        alert("Please fill all fields");
        return;
    }

    if(pass!=confirm){
        alert("Password and Confirm Password do not match");
        return;
    }

    localStorage.setItem("username",user);
    localStorage.setItem("password",pass);

    alert("Registration Successful");

    document.getElementById("registerPage").style.display="none";
    document.getElementById("loginPage").style.display="block";
}

// Login User
function login(){

    let username=document.getElementById("username").value;
    let password=document.getElementById("password").value;

    let savedUser=localStorage.getItem("username");
    let savedPass=localStorage.getItem("password");

    if(username==savedUser && password==savedPass){

        document.getElementById("loginPage").style.display="none";
        document.getElementById("todoPage").style.display="block";

    }
    else{
        alert("Invalid Username or Password");
    }

}

// Show Login Page
function showLogin(){

    document.getElementById("registerPage").style.display="none";
    document.getElementById("loginPage").style.display="block";

}

// Show Register Page
function showRegister(){

    document.getElementById("loginPage").style.display="none";
    document.getElementById("registerPage").style.display="block";

}

// Add Task
function addTask(){

    let input=document.getElementById("taskInput");

    if(input.value==""){
        alert("Please Enter a Task");
        return;
    }

    let li=document.createElement("li");

    li.innerHTML=`
        <span>${input.value}</span>
        <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
    `;

    li.querySelector("span").onclick=function(){

        this.style.textDecoration="line-through";
        this.style.color="green";

    }

    document.getElementById("taskList").appendChild(li);

    updateCount();

    input.value="";

}

// Delete Task
function deleteTask(button){

    button.parentElement.remove();

    updateCount();

}

// Task Counter
function updateCount(){

    document.getElementById("count").innerText=
    document.getElementById("taskList").children.length;

}

// Logout
function logout(){

    alert("Logout Successful");

    document.getElementById("todoPage").style.display="none";

    document.getElementById("loginPage").style.display="block";

    document.getElementById("username").value="";
    document.getElementById("password").value="";

}