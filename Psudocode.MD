1. HTML Pages
    a. Quiz
    b. High SCores List

2. Quiz HTML -- how to structure?
    a. 4 button options
    b. text label
    c. note underneath showing if you got it right

3. Option A -> build the buttons and text boxes without content, then game fills the text in for you.
4. Preferred Option B -> pretty empty. Just a box to add the questions to, JS creates the buttons.

JS Reference mini project

3. Functions:
    - Start Timer
    - Clear Timer
    - Reduce time left when wrong answer
    - init function to render home page with the button
    - Render a single question
        - Build the question text, all buttons for answering, add them all to the page
    - function to check answer
        -If not correct - call function to reduce remaining time and check if done
        - If correct -- check if done
    -CHeck If Done
            - if not done -- render next question
            - If done - render high score form
    - Function to render high score form
        - Show the form
        - on submit, add score to local storage


    High scores HTML page is just going to have a container JS will pull info from local storage into container 


    The biggest logic is going to be the logic to render the question

- 2 JS files
    - one for index and one for High_Scores
    - 1 script will save to local storage.
    - 1 script will load from local storage

- Link From high score page back to index.html