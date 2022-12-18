var canvas = document.getElementById("mycanvas");
var ctx = canvas.getContext("2d");

var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var SpeechGrammarList = SpeechGrammarList || window.webkitSpeechGrammarList
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent

var recognition = new(window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();
recognition.continuous = false;
recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.maxAlternatives = 1;

var colors = [
    "red",
    "blue",
    "yellow",
    "green",
    "Brown",
    "gray",
    "white",
    "black",
    "orange", 
    "purple",
    "gold",
    "teal",
    "pink",
    "cyan",
    "silver",
    "chocolate",
    "violet",
    "maroon",
    "magenta",
];

//var button = document.getElementById("Sbtn");

var SpeechResult = function() {
    if (Sbtn.innerHTML == "Speak") {
        recognition.start();
        Sbtn.innerHTML = "Stop";

    } else if (Sbtn.innerHTML == "Stop") {
        recognition.stop();
        Sbtn.innerHTML = "Speak";
    }
}

//initial circle
let radiusSize = 25;
ctx.beginPath();
ctx.fillStyle = "black";
ctx.arc(300, 300, radiusSize, 0, 2 * Math.PI);
ctx.fill();

var output = document.getElementById("outputmsg");


recognition.onresult = function(event) {
        var VoiceResult = event.results[0][0].transcript;

        if (VoiceResult >= 25 && VoiceResult <= 300) {
            draw(VoiceResult, currentColor);
            radiusSize = VoiceResult;
        } else if (VoiceResult > 300) {
            output.innerHTML = "circle radius must be less than 300";
            
        } else if (VoiceResult < 25) {
            output.innerHTML = "circle radius is less than 25";

        } else if (colors.includes(VoiceResult)) {
            draw(radiusSize, VoiceResult);
            currentColor = VoiceResult;
        } else
        if (VoiceResult == "help") {
            output.innerHTML ="Say a color to set the circle color. Say a number between 25 and 300 to set the radius of the circle.";
        } else {
            output.innerHTML = "ERROR, unknown command detected. Try Again";
        }
    }
    // function to change radius and color
function draw(newradius, color) {
    ctx.beginPath();
    ctx.arc(300, 300, newradius, 0, 2 * Math.PI, false);
    ctx.fillStyle = color;
    ctx.stroke();
    ctx.fill()    
}