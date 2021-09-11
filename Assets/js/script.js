var timerCount = document.querySelector(".timer-text");
var startButton = document.querySelector("#start-button");
var header1 = document.querySelector("h1");
var header2 = document.querySelector("#header-2");
var displayQuestion = document.querySelector("#text-2");



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
    ask: "A very useful tool for used during development and debugging for printing content to the debugger is:",
    options: ["Javascript", "Terminal/Bash", "For loops", "Console log"],
    answer: "Console log"
}];


// Setting default values
var score = 0;
var currentQuestion = 0;
var timeLeft = 76;
var penaltyTime = 15;

// Create new elements
var answersUl = document.createElement("ul");
var answerLi1 = document.createElement("li");
var answerLi2 = document.createElement("li");
var answerLi3 = document.createElement("li");
var answerLi4 = document.createElement("li");

// Timer functions
// Start timer
function startTimer() {
    timerCount.textContent = timeLeft; // Display timeLeft = 76

    countDown = setInterval(function() { // Start reducing time by 1 second and display on screen
        timeLeft--;
        timerCount.textContent = timeLeft;
        if (timeLeft <= 0) { // Stop game when time runs out
            clearInterval(countDown);
            endGame();
        }
    }, 1000);
};



// Start button
startButton.addEventListener("click",function() {
    // Start timer 
    startTimer();
    // Display first question 
    startQuestion(qIndex);
}

)
// Display questions 
function startQuestion();
    // Clear values to start off
    header1.textContent = "";
    header2.textContent = "";
    displayQuestion.textContent = "";

    // Loop through and display first question
    for (var i=0; i < questions.length; i++) {
        var askQuestion = questions[i].ask;
        var chooseAnswers = questions[i].options;
        displayQuestion.textContent = askQuestion;
    }

    //Append 
    

// End Game
function endGame() {

}