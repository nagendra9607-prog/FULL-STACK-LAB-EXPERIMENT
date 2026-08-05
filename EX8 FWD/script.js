const questions = [
{
question: "What is your favorite programming language?",
options: ["Java", "Python", "JavaScript", "C++"]
},
{
question: "Which device do you use the most?",
options: ["Laptop", "Mobile", "Tablet", "Desktop"]
},
{
question: "How many hours do you use the internet daily?",
options: ["1-2 Hours", "3-5 Hours", "6-8 Hours", "More than 8 Hours"]
},
{
question: "Which social media platform do you use most?",
options: ["Instagram", "Facebook", "WhatsApp", "X (Twitter)"]
},
{
question: "Do you like online learning?",
options: ["Yes", "No"]
},
{
question: "What is your favorite operating system?",
options: ["Windows", "Linux", "macOS", "Android"]
},
{
question: "Which browser do you use most?",
options: ["Chrome", "Edge", "Firefox", "Safari"]
},
{
question: "Would you recommend this survey?",
options: ["Yes", "No"]
}
];

const container = document.getElementById("questionsContainer");
const form = document.getElementById("surveyForm");
const resultBox = document.getElementById("resultBox");
const surveyBox = document.getElementById("surveyBox");
const answers = document.getElementById("answers");

function shuffle(array){
    return array.sort(() => Math.random() - 0.5);
}

const selectedQuestions = shuffle([...questions]).slice(0,5);

selectedQuestions.forEach((q,index)=>{

    let div=document.createElement("div");
    div.className="question";

    let html=`<p>${index+1}. ${q.question}</p>`;

    q.options.forEach(option=>{
        html+=`
        <label>
        <input type="radio"
        name="q${index}"
        value="${option}" required>
        ${option}
        </label>
        `;
    });

    div.innerHTML=html;

    container.appendChild(div);

});

form.addEventListener("submit",function(e){

    e.preventDefault();

    surveyBox.style.display="none";
    resultBox.style.display="block";

    answers.innerHTML="";

    selectedQuestions.forEach((q,index)=>{

        const value=document.querySelector(`input[name="q${index}"]:checked`).value;

        answers.innerHTML+=`
        <div class="answer-item">
        <strong>${q.question}</strong><br>
        Your Answer: ${value}
        </div>
        `;

    });

});