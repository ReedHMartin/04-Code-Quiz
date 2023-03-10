var questions = [
    {
        question: "Commonly used data types DO NOT include:",
        options: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        question: "The condition in an if / else statement is enclosed within ____.",
        options: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    {
        question: "Arrays in Javascript can be used to store ____.",
        options: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
    },
    {
        question: "String values must be enclosed within ____ when being assigned to variables.",
        options: ["commas", "curly brackets", "quotes", "parenthesis"],
        answer: "quotes"
    },
    {
        question: "A very useful tool for used during development and debugging for printing content to the debugger is:",
        options: ["Javascript", "terminal / bash", "for loops", "console log"],
        answer: "console log"
    },

];

var homePage = document.getElementById("homePage")
var questionPage = document.getElementById("questionPage")
var option1 = document.getElementById("option1")
var option2 = document.getElementById("option2")
var option3 = document.getElementById("option3")
var option4 = document.getElementById("option4")
var question1 = document.getElementById('question1')
let index = 0

function startQuiz() {
   homePage.classList.add('hide')
   questionPage.classList.remove('hide')
   displayQuestion()
   //TO DO start timer
}

function displayQuestion() {
    question1.textContent = questions[index].question
    option1.textContent = questions[index].options[0]
    option2.textContent = questions[1].options[1]
    option3.textContent = questions[1].options[2]
    option4.textContent = questions[1].options[3]
}

function checkAnswer(e) {
    console.log(e)
    if(e.target.matches("button")){
        console.log("BUTTON CLICKED")
        console.log(e.target.textContent)

        //check if answer is correct


        index++
        //TO DOis index at the end yet
        displayQuestion()
    }
}

document.getElementById("startQuiz").addEventListener("click", startQuiz)
document.getElementById('buttons').addEventListener('click', checkAnswer)