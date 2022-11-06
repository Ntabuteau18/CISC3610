// global object to store form values
let formObject = {};

// set constant values for canvas width and height
const canvasWidth = 800;
const canvasHeight = 300;

// const name for local storage
const storageName = "FORM_VALUES";
let formValues;

// initial declaration
let canvas;
let ctx;

window.onload =function(){  
    // get canvas element and set width and height
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");

    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    canvas.style.width = canvasWidth;
    canvas.style.Height = canvasHeight;

    // redner form values into canvas
    const drawOnCanvas = () => {
        canvas.style.background = formValues.backgroundColor;
        // setting font-size, font family, font-color
        ctx.font = `${formValues.fontSize}px ${formValues.fontType}`;
        ctx.textAlign = "center";
        ctx.fillStyle = formValues.textColor;
        ctx.fillText(formValues.name, 400, 100);
    };

    // check if local storage if defined
    if (typeof localStorage !== undefined) {
        try {
            localStorage.setItem("feature_test", "yes");
            if (localStorage.getItem("feature_test") === "yes") {
                localStorage.removeItem("feature_test");
                alert("Local Storage Is Enabled");
                // get stored form values in local storage if exist
                if (localStorage.getItem(storageName) !== null) {
                    formValues = JSON.parse(localStorage.getItem(storageName));
                    drawOnCanvas();
                }
            } else {
                alert("Local Storage Is Disabled: Failed");
            }
        } catch (error) {
            alert("Local Storage Is Disabled: ", error);
        }
    } else {
        alert("Browser does not support local storage");
    }
};

// function takes the value of the input:range and updates the inner HTML of its associated <span>
const handleRangeChange = (value) => {
    let span = document.getElementById("font-size-span");
    span.innerHTML = parseInt(value);
};

// clear canvas
const clearCanvas = () => {
    ctx.clearRect(0, 0, 800, 300);
};

// draw form values onto canvas
const drawCanvas = (name, backgroundColor, textColor, fontSize, fontType) => {
    canvas.style.background = backgroundColor;
    // setting font-size, font family, font-color
    ctx.font = `${fontSize}px ${fontType}`;
    ctx.textAlign = "center";
    ctx.fillStyle = textColor;
    ctx.fillText(name, 400, 100);
};

// handle form submit
const handleSubmit = (event) => {
    // prevent default reset
    event.preventDefault();
    // get all the values of the forms
    let name = document.getElementById("name").value;
    let backgroundColor = document.getElementById("bgd-color").value;
    let textColor = document.getElementById("text-color").value;
    let fontSize = document.getElementById("font-size").value;
    let fontType = document.querySelector(
        "input[name=font-name]:checked"
    ).value;

    let values = {
        name,
        backgroundColor,
        textColor,
        fontSize,
        fontType,
    };

    localStorage.setItem(storageName, JSON.stringify(values));
    console.log(values);
    clearCanvas();
    drawCanvas(name, backgroundColor, textColor, fontSize, fontType);
};