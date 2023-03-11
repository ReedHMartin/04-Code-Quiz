// Define the questions array with each object containing a question, multiple choice options, and the correct answer
const questions = [
    {
      question: "Commonly used data types DO NOT include:",
      options: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts",
    },
    {
      question:
        "The condition in an if / else statement is enclosed within ____.",
      options: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses",
    },
    {
      question: "Arrays in Javascript can be used to store ____.",
      options: [
        "numbers and strings",
        "other arrays",
        "booleans",
        "all of the above",
      ],
      answer: "all of the above",
    },
    {
      question:
        "String values must be enclosed within ____ when being assigned to variables.",
      options: ["commas", "curly brackets", "quotes", "parenthesis"],
      answer: "quotes",
    },
    {
      question:
        "A very useful tool used during development and debugging for printing content to the debugger is:",
      options: ["Javascript", "terminal / bash", "for loops", "console log"],
      answer: "console log",
    },
  ];
  
  // Define variables for elements in the HTML DOM
  const homePage = document.getElementById("homePage");
  const questionPage = document.getElementById("questionPage");
  const option1 = document.getElementById("option1");
  const option2 = document.getElementById("option2");
  const option3 = document.getElementById("option3");
  const option4 = document.getElementById("option4");
  const question1 = document.getElementById("question1");
  
  // Define variables for quiz state, including the index of the current question, the timer, time left, and score
  let index = 0;
  let timer;
  let timeLeft = 30;
  let score = 0;
  let scores = JSON.parse(localStorage.getItem("scores")) || []; // Parse existing scores or initialize an empty array
  
  // Define function to start the quiz
  function startQuiz() {
    homePage.classList.add("hide"); // Hide the home page element
    questionPage.classList.remove("hide"); // Show the question page element
    displayQuestion(); // Display the current question
    
    // Set the time left to 30 seconds and display the timer element
    timeLeft = 30;
    const timerElement = document.getElementById("timer");
    
    // Set an interval to update the timer every second
    timer = setInterval(() => {
      timerElement.textContent = timeLeft; // Display the remaining time on the timer element
  
      // End the quiz if time runs out
      if (timeLeft <= 0) {
        clearInterval(timer); // Stop the timer interval
        const newScore = timeLeft;
        scores.push(newScore); // Add the new score to the scores array
        localStorage.setItem("scores", JSON.stringify(scores)); // Save the updated scores to local storage
        window.location.href = "high_scores.html"; // Redirect to the high scores page
      } else {
        timeLeft--; // Decrement the time left by 1 second
      }
    }, 1000);
  }
  
  // Define function to display the current question and options
  function displayQuestion() {
    question1.textContent = questions[index].question;
    option1.textContent = questions[index].options[0];
    option2.textContent = questions[index].options[1];
    option3.textContent = questions[index].options[2];
    option4.textContent = questions[index].options[3];
  }
  function checkAnswer(e) {
    // Check if the clicked element is a button
    if (e.target.matches("button")) {
      // Get the text content of the clicked button and the correct answer for the current question
      const selectedAnswer = e.target.textContent;
      const correctAnswer = questions[index].answer;
  
      // If the selected answer is correct, increase the score and move on to the next question
      if (selectedAnswer === correctAnswer) {
        score++;
        index++;
  
        // If there are more questions to display, show the next question
        if (index < questions.length) {
          displayQuestion();
        } else {
          // If there are no more questions, stop the timer and go to the high scores page
          clearInterval(timer);
          questionPage.classList.add("hide");
  
          // If there is still time left, use it as the score
          if (timeLeft > 0) {
            score = timeLeft;
          }
  
          // Add the score to the scores array and save it to local storage
          scores.push(score);
          localStorage.setItem("scores", JSON.stringify(scores));
          window.location.href = "high_scores.html";
        }
  
        // Clear the result text content
        document.getElementById("result").textContent = "";
      } else {
        // If the selected answer is incorrect, subtract 5 seconds from the timer and show the "Incorrect" result message
        document.getElementById("result").textContent = "Incorrect";
        timeLeft -= 5;
      }
    }
  }
  
  // Add event listeners for the "Start Quiz" and answer buttons
  document.getElementById("startQuiz").addEventListener("click", startQuiz);
  document.getElementById("buttons").addEventListener("click", checkAnswer);
  