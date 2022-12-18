var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;


var currentRadius = 25;
var currentColor = 'black'
var X = 300;
var Y = 300;
ctx.beginPath();
ctx.arc(X, Y, currentRadius, 0, 2 * Math.PI, false);
ctx.fillStyle = currentColor;
ctx.fill()
ctx.stroke();

var action = document.getElementById("action");
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var SpeechGrammarList =
    SpeechGrammarList || window.webkitSpeechGrammarList;
// new speech recognition object
var recognition = new SpeechRecognition();


var colors = [
    "red",
    "blue",
    "yellow",
    "green",
    "brown",
    "grey",
    "white",
    "black",
    "orange", 
    "purple",
    "gold",
    "teal",
    "skyblue",
    "pink",
    "lime",
    "cyan",
    "silver",
    "maroon",
    "chocolate",
    "navy",
    "azure",
    "crimson",
    "smoke"
];

function changeColor(color) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.arc(300, 300, radiusSize, 0, 2 * Math.PI);
    ctx.fill();
}
function changeRadius(radius) {
    radiusSize = radius;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(300, 300, radiusSize, 0, 2 * Math.PI);
    ctx.fill();
}
var btn = document.getElementById("button");

btn.addEventListener("click", function runSpeechRecognition() {
    const initialText = "Speak";

    if (btn.textContent.toLowerCase().includes(initialText.toLowerCase())) {
        btn.textContent = "Stop";


        // if the button says "stop" now - we can create a speach object
        var output = document.getElementById("output");

        const speechRecognitionList = new SpeechGrammarList();
        speechRecognitionList.addFromString(grammar, 1);
        recognition.grammars = speechRecognitionList;
        recognition.continuous = false;
        recognition.lang = "en-US";
        recognition.interimResults = false;
        recognition.maxAlternatives = 1;

        // This runs when the speech recognition service starts
        recognition.onstart = function () {
            action.innerHTML = "<small>listening, please speak...</small>";
        };

        recognition.onspeechend = function () {
            action.innerHTML = "";
            recognition.stop();
            btn.textContent = initialText;
        };

        // This runs when the speech recognition service returns result
        recognition.onresult = function (event) {
            //take the result -
            //if the first word is "color"-> changeColor ,
            //else if the first word is "size"-> chnageRadius ,
            //else if the first word is "help" -> write the text on the screen
            //else -> error

            var response = event.results[0][0].transcript;
            output.innerHTML = "Result received: " + response;
            const arrayResponse = response.split(" ");

            if (arrayResponse[0] == "color") {
                if (colors.includes(arrayResponse[1])) {
                    changeColor(arrayResponse[1]);
                } else {
                    output.innerHTML = "cannot find that color";
                }
            } else if (arrayResponse[0] == "size") {
                if (parseInt(arrayResponse[1]) < 400) {
                    changeRadius(parseInt(arrayResponse[1]));
                } else {
                    output.innerHTML = "circle radius must be less than 300";
                }
            } else if (arrayResponse[0] == "help") {
                output.innerHTML =
                    "Say \"color\", followed by a color, to set the circle color. Say \"size\" followed by a number from 1 to 300 to set the radius of the circle.";
            } else {
                output.innerHTML = "I didn't recognise that command.";
            }
        };

        recognition.onnomatch = function (event) {
            output.innerHTML = "I didn't recognise that color.";
        };

        recognition.onerror = function (event) {
            output.innerHTML = "Error occurred in recognition: " + event.error;
        };
        // start recognition
        recognition.start();
    }
    else {
        action.innerHTML = "";
        btn.textContent = initialText;
        recognition.stop();
    }
});