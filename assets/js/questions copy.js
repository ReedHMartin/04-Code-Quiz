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
  
  const homePage = document.getElementById("homePage");
  const questionPage = document.getElementById("questionPage");
  const option1 = document.getElementById("option1");
  const option2 = document.getElementById("option2");
  const option3 = document.getElementById("option3");
  const option4 = document.getElementById("option4");
  const question1 = document.getElementById("question1");
  let index = 0;
  let timer;
  let timeLeft = 30;
  let score = 0;
  let scores = JSON.parse(localStorage.getItem("scores")) || []; // Parse existing scores or initialize an empty array
  
  function startQuiz() {
    homePage.classList.add("hide");
    questionPage.classList.remove("hide");
    displayQuestion();
  
    timeLeft = 30;
    const timerElement = document.getElementById("timer");
  
    timer = setInterval(() => {
      timerElement.textContent = timeLeft;
  
      if (timeLeft <= 0) {
        clearInterval(timer);
        const newScore = timeLeft;
        scores.push(newScore); // Add the new score to the scores array
        localStorage.setItem("scores", JSON.stringify(scores)); // Save the updated scores to local storage
        window.location.href = "high_scores.html";
      } else {
        timeLeft--;
      }
    }, 1000);
  }
  
  function displayQuestion() {
    question1.textContent = questions[index].question;
    option1.textContent = questions[index].options[0];
    option2.textContent = questions[index].options[1];
    option3.textContent = questions[index].options[2];
    option4.textContent = questions[index].options[3];
  }
  
  function checkAnswer(e) {
    if (e.target.matches("button")) {
      const selectedAnswer = e.target.textContent;
      const correctAnswer = questions[index].answer;
  
      if (selectedAnswer === correctAnswer) {
        score++;
        index++;
        if (index < questions.length) {
          displayQuestion();
        } else {
          clearInterval(timer);
  
          questionPage.classList.add("hide");
  
          if (timeLeft > 0) {
            score = timeLeft;
          }
  
          scores.push(score); // Add the new score to the scores array
          localStorage.setItem("scores", JSON.stringify(scores)); // Save the updated scores to local storage
          window.location.href = "high_scores.html";
        }
        document.getElementById("result").textContent = "";
    } else {
        document.getElementById("result").textContent = "Incorrect";
        timeLeft -= 5; // Subtract 5 seconds from the timer if the answer is incorrect
      }
    }
  }
  
  document.getElementById("startQuiz").addEventListener("click", startQuiz);
  document.getElementById("buttons").addEventListener("click", checkAnswer);
  