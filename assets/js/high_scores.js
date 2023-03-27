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

});

