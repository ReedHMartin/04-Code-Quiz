const questions = [
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
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        options: ["Javascript", "terminal / bash", "for loops", "console log"],
        answer: "console log"
    }
];

const homePage = document.getElementById("homePage");
const questionPage = document.getElementById("questionPage");
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const option4 = document.getElementById("option4");
const question1 = document.getElementById('question1');
let index = 0;
let timer; // variable to hold the timer ID
let timeLeft = 30; // variable to hold the time left in seconds

function startQuiz() {
    homePage.classList.add('hide');
    questionPage.classList.remove('hide');
    displayQuestion();

    timeLeft = 30; // Set the initial time left to 30 seconds
    const timerElement = document.getElementById('timer'); // Get the timer element

    timer = setInterval(() => {
        // Update the timer element every second
        timerElement.textContent = timeLeft;

        if (timeLeft <= 0) {
            // Stop the timer and show the score if time runs out
            clearInterval(timer);
            questionPage.classList.add('hide');
            // TODO show scores after finishing quiz
        } else {
            // Decrement the time left by 1 second
            timeLeft--;
        }
    }, 1000);
}


function displayQuestion() {
    question1.textContent = questions[index].question
    option1.textContent = questions[index].options[0]
    option2.textContent = questions[index].options[1]
    option3.textContent = questions[index].options[2]
    option4.textContent = questions[index].options[3]
}

function checkAnswer(e) {
    if (e.target.matches("button")) {
        const selectedAnswer = e.target.textContent;
        const correctAnswer = questions[index].answer;

        if (selectedAnswer === correctAnswer) {
            // TODO increment score or perform other actions for correct answer
            index++;
            if (index < questions.length) {
                displayQuestion();
            } else {
                // stop the timer
                clearInterval(timer);

                questionPage.classList.add('hide');
                // TODO show scores after finishing quiz
            }
            document.getElementById('result').textContent = ''; // Clear the result text
        } else {
            document.getElementById('result').textContent = 'Incorrect';
            timeLeft -= 5; // Subtract 5 seconds from the timer if the answer is incorrect
        }
    }
}



document.getElementById("startQuiz").addEventListener("click", startQuiz);
document.getElementById('buttons').addEventListener('click', checkAnswer);
