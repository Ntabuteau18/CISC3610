const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// set up speech recogniton
var action = document.getElementById("action");
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var SpeechGrammarList = SpeechGrammarList || window.webkitSpeechGrammarList;
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent
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



let radiusSize = 25;
//initial circle
ctx.beginPath();
ctx.fillStyle = "black";
ctx.arc(300, 300, radiusSize, 0, 2 * Math.PI);
ctx.fill();

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

const btn = document.getElementById("button");

// ✅ Change button text on click
btn.addEventListener("click", function runSpeechRecognition() {
    const initialText = "Speak";

    if (btn.textContent.toLowerCase().includes(initialText.toLowerCase())) {
        btn.textContent = "Stop";
        

        // if the button says "stop" now - we can create a speach object
        var output = document.getElementById("output");

        if (SpeechGrammarList) {
            // SpeechGrammarList is not currently available in Safari, and does not have any effect in any other browser.
            // This code is provided as a demonstration of possible capability. You may choose not to use it.
            var speechRecognitionList = new SpeechGrammarList();
            var grammar = '#JSGF V1.0; grammar colors; public <color> = ' + colors.join(' | ') + ' ;'
            speechRecognitionList.addFromString(grammar, 1);
            recognition.grammars = speechRecognitionList;
          }

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