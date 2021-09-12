var timerCount = document.querySelector("#timer-text");
var startButton = document.querySelector("#start-button");
var header2 = document.querySelector(".header-2");
var displayQuestionText = document.querySelector(".question");
var displayAnswersText = document.querySelector(".buttons-container");
var displayResult = document.querySelector(".result");


// Arrays to display a list of questions
var questions = 
[{
    ask: "Commonly used data types DO NOT include:",
    options: ["Strings", "Booleans", "Alerts", "Numbers"],
    answer: "Alerts"
},
{
    ask: "The condition in an if/else statement is enclosed within _______.",
    options: ["Quotes", "Curly brackers", "Parentheses", "Square brackets"],
    answer: "Parenthesis"
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
        if (timeLeft <= 0) { // Stop game when time runs out
            clearInterval(countDown);
            endGame();
            return;
        }
        timeLeft--;
        timerCount.textContent = timeLeft;
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
    // Clear values to start off
    header2.textContent = "";

    // Start off at 0
    currentQuestionIndex++;

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
    
    // For loop over the answer buttons
    for (var i=0; i < options.length; i++ ) {
        var buttonAnswer = document.createElement("button");
        buttonAnswer.setAttribute("class", "btn-options")
        buttonAnswer.textContent = (i + 1) + "." + options[i];
        displayAnswersText.appendChild(buttonAnswer);
        buttonAnswer.addEventListener('click', checkAnswer);
    }

}

// Answer click function 
function checkAnswer(event) {
    event.preventDefault();
    var element = event.target; // event.target refers to the clicked event 
    if (element.textContent === questions[currentQuestionIndex].answer) {
        displayResult.textContent = "Correct!"
        score += correctScore;
    } else 
        displayResult.textContent = "Incorrect!"
        score -= incorrectScore;

    if (currentQuestionIndex === questions.length) {
        endGame();
    } else
        displayQuestion();
}


// End Game
function endGame() {

}