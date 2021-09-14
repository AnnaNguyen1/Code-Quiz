var timerCount = document.querySelector("#timer-text");
var startButton = document.querySelector("#start-button");
var header = document.querySelector(".title");
var displayQuestionNumber = document.querySelector(".question-number");
var displayQuestionText = document.querySelector(".question");
var displayAnswersText = document.querySelector(".buttons-container");
var displayResult = document.querySelector(".result");
var initials = document.querySelector(".initials-container")



// Arrays to display a list of questions
var questions = 
[{
    ask: "Commonly used data types DO NOT include:",
    options: ["Strings", "Booleans", "Alerts", "Numbers"],
    answer: "Alerts"
},
{
    ask: "The condition in an if/else statement is enclosed within _______.",
    options: ["Quotes", "Curly brackets", "Parentheses", "Square brackets"],
    answer: "Parentheses"
},
{
    ask: "Inside which HTML element do we put the Javascript?",
    options: ["<script>","<js>","<javascript>","<scripting>"],
    answer: "<script>"
},
{
    ask: "Arrays in Javascript can be used to store ______.",
    options: ["Numbers and strings", "Other arrays", "Booleans", "All of the above"],
    answer: "All of the above"
},
{
    ask: "String values must be enclosed within ________ when being assigned to variables.",
    options: ["Commas", "Curly brackets", "Quotes", "Parenthesis"],
    answer: "Quotes"
},
{
    ask: "A very useful tool for used during development and debugging for printing content to the debugger is:",
    options: ["Javascript", "Terminal/Bash", "For loops", "Console log"],
    answer: "Console log"
}];


// Setting default values
var score = 0;
var numberQuestionsCorrect = 0;
var currentQuestionIndex = -1;
var timeLeft = 76;
var penaltyTime = 15;
var correctScore = 10;
var incorrectScore = 5;

// Timer functions
// Start timer
function startTimer() {
    timerCount.textContent = timeLeft; // Display timeLeft = 76

    countDown = setInterval(function() { 
        timeLeft--;
        timerCount.textContent = timeLeft;

        if (timeLeft <= 0) { // Stop game when time runs out
            clearInterval(countDown);
            timerCount.textContent = 0;
            endGame();
            return;
        }
        
    }, 1000);
};



// Start button
startButton.addEventListener("click", function() {
    startTimer();
    displayQuestion();
    startButton.style.display = "none";
}

)
// Display questions 
function displayQuestion() {
    // Start off at 0
    currentQuestionIndex++;

    // Display Q number
    displayQuestionNumber.textContent = "Question " + (currentQuestionIndex + 1);
    displayQuestionNumber.style.textAlign = "left";

    // Set variables for the question, choices and answers
    var question = questions[currentQuestionIndex].ask;
    var options = questions[currentQuestionIndex].options;

    // End game if index is larger than the number of questions
    if (currentQuestionIndex > questions.length) {
        endGame();
        return;
    }

    // Display question according to index
    var currentQuestion = question;
    displayQuestionText.textContent = currentQuestion;
    displayQuestionText.style.textAlign = "left";

    // Clear existing answer values
    displayAnswersText.innerHTML = [];
    
    // For loop over the answer buttons
    for (var i=0; i < options.length; i++ ) {
        var buttonAnswer = document.createElement("button");
        buttonAnswer.setAttribute("class", "btn-options")
        buttonAnswer.textContent = options[i];
        displayAnswersText.appendChild(buttonAnswer);
        buttonAnswer.addEventListener('click', checkAnswer);

    }

}

// Answer click function 
function checkAnswer(event) {
    var correct = "Correct!";
    var incorrect = "Incorrect!";

    event.preventDefault();
    var element = event.target; // event.target refers to the clicked event 

    if (currentQuestionIndex != (questions.length - 1)) {
        if (element.textContent === questions[currentQuestionIndex].answer) {
        displayResult.textContent = correct;
        score += correctScore;
        numberQuestionsCorrect++;
        } else {
        displayResult.textContent = incorrect;
        score -= incorrectScore;
        timeLeft -= penaltyTime;
        }
    }

    // Remove text after 1 second
    setTimeout(function() {
        displayResult.textContent = "";
    }, 1000);

    if (currentQuestionIndex === (questions.length - 1)) {
        endGame();
    } else
        displayQuestion();
}


// End Game
function endGame() {
    timerCount = 0;
    console.log(score);

    if (score <= 0) {
        score = 0;
        console.log("score", score);
    }
    displayAnswersText.innerHTML = [];
    header.textContent = "End of Quiz!";
    if (numberQuestionsCorrect === 1) {
        displayQuestionText.textContent = "You got " + numberQuestionsCorrect + " question correct.";
    } else 
    displayQuestionText.textContent = "You got " + numberQuestionsCorrect + " questions correct.";

    displayQuestionNumber.textContent = "Your final score is " + score + "!";

    // Create input details
    if (score >= 0) {
    var resultInputContent = `
    <p class="input">Enter your name to save your score:</p>
    <input type= "text" id= "initials" placeholder = "Name">
    <button onclick="storeScore()"> Save Score </button>
    <button onclick ="resetGame()"> Cancel </button>`;

    initials.innerHTML = resultInputContent;
    }
}

// Cancel and do not save in local storage
function resetGame() {
    console.log("resetGame");
    score = 0;
    currentQuestionIndex = -1
    timeLeft = 0;
    location.reload();
}

// Enter high score into local storage
function storeScore(event) {
    // Store as an object 
    var storeNewScore = {
        initials: document.querySelector("#initials").value.trim(),
        highScore: score
    };
    
    // Grab what is already in local storage and turn it back into an Array 
    var scoreArray = localStorage.getItem("allHighScores");
    if (scoreArray === null) { // if there is nothing in the array then it will return undefined
        scoreArray = [];
    } else {
        scoreArray = JSON.parse(scoreArray);
    }

    // Pushed to empty array
    scoreArray.push(storeNewScore);

    // stored as a string
    var newScore = JSON.stringify(scoreArray);
    localStorage.setItem("allHighScores", newScore);
    
    // render scores onscreen 
    renderScore();
}

// Function to display score after entering Initials
function renderScore() {
    var renderScoreArray = JSON.parse(localStorage.getItem("highScores"));
    var scoringBoard = document.createElement("ul");
    displayQuestionText.appendChild(scoringBoard);
    scoringBoard.setAttribute("class", "scoring-tally");


    displayQuestionNumber.textContent = "Scoring Board";
    displayQuestionText.textContent = ""; 
    initials.style.display = "none"; 


    // Create a new li for each score
    if (renderScoreArray != null) {
        for (i=0; i < renderScoreArray.length; i++) {
        var set = renderScoreArray[i].initials + " : " + renderScoreArray[i].highScore;
        var scoreList = document.createElement("li");
        scoreList.setAttribute("class", "score-list");
        scoreList.textContent = set;
        displayQuestionText.appendChild(scoreList);
        }
    }
}


