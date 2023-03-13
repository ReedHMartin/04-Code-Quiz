// Wait for the DOM to load before executing the code
window.addEventListener('DOMContentLoaded', () => {

  // Retrieve high scores from local storage
  let highScores = JSON.parse(localStorage.getItem('highScores')) || [];

  // Get reference to the high scores list
  const highScoresList = document.getElementById('highScores');

  // Loop through the high scores and add them to the list
  highScores.forEach(score => {
    const li = document.createElement('li');
    li.innerText = `${score.initials} - ${score.score}`;
    highScoresList.appendChild(li);
  });

  // Get reference to the clear scores button
  const clearScoresButton = document.getElementById('clearScores');

  // Add click event listener to clear scores button
  clearScoresButton.addEventListener('click', clearScores);

  // Clear high scores from local storage when clear button is clicked
  function clearScores() {
    localStorage.removeItem('highScores');
    highScoresList.innerHTML = '';
  }

  // Prompt the user for their initials
  const initials = prompt('Please enter your initials:');

  // Save the score
  saveScore(initials);

});

function saveScore(score) {
  // Prompt user for their initials
  const initials = prompt('Please enter your initials:');
  if (!initials) return; // Don't save the score if user cancels or enters an empty string

  // Retrieve existing high scores from local storage or initialize as an empty array
  const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

  // Add the new score object to the high scores array with the initials attached
  highScores.push({ name: initials, score: score });

  // Sort the high scores array in descending order by score
  highScores.sort((a, b) => b.score - a.score);

  // Only keep the top 5 high scores
  highScores.splice(5);

  // Save the updated high scores array to local storage
  localStorage.setItem('highScores', JSON.stringify(highScores));
}

