var timerCount = document.querySelector(".timer-text");
var startButton = document.querySelector("#start-button");


// Arrays to display a list of questions
var questions = 
[{
    question: "Commonly used data types DO NOT include:",
    options: ["Strings", "Booleans", "Alerts", "Numbers"],
    answer: "Alerts"
},
{
    question: "The condition in an if/else statement is enclosed within _______.",
    options: ["Quotes", "Curly brackers", "Parentheses", "Square brackets"],
    answer: "Parenthesis"
},
{
    question: "Inside which HTML element do we put the Javascript?",
    options: ["<script>","<js>","<javascript>","<scripting>"],
    answer: "<script>"
},
{
    question: "Arrays in Javascript can be used to store ______.",
    options: ["Numbers and strings", "Other arrays", "Booleans", "All of the above"],
    answer: "All of the above"
},
{
    question: "String values must be enclosed within ________ when being assigned to variables.",
    options: ["Commas", "Curly brackets", "Quotes", "Parenthesis"],
    answer: "Quotes"
},
    question: "A very useful tool for used during development and debugging for printing content to the debugger is:",
    options: ["Javascript", "Terminal/Bash", "For loops", "Console log"],
    answer: "Console log"
}];


// Setting default values
var score = 0;
var currentQuestion = 0;
var timeLeft = 71;
var penaltyTime = 15;

// Timer functions
// Start button to run functions

// Stop timer when questions are answered or time runs out

// Display questions 
 