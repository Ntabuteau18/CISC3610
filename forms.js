let formObject = {};
const canvasHeight = 500;
const canvasWidth = 400;

let canvas;
let ctx;
const storageName = "FORM_VALUES";
let formValues;


let window =function(onload){  
canvas = document.getElementById("mycanvas");
ctx = canvas.getContext("2d");

    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    canvas.style.width = canvasWidth;
    canvas.style.Height = canvasHeight;

         drawOnCanvas = function(){
        canvas.style.background = formValues.backgroundColor;
        // setting font-size, font family, font-color
        ctx.font = `${formValues.fontSize}px ${formValues.fontType}`;
        ctx.fillStyle = formValues.textColor;
        ctx.fillText(formValues.name, 200, 200);
    };
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
}

const rangeC = function(value) {
    let span = document.getElementById("sizespan");
    span.innerHTML = parseInt(value);
};

const clearCanvas = function() {
    ctx.clearRect(0, 0, 400, 500);
};


drawCanvas = (name, backgroundColor, textColor, fontSize, fontType) =>{
    canvas.style.background = backgroundColor;
    // setting font-size, font family, font-color
    ctx.font = `${fontSize}px ${fontType}`;
    ctx.fillStyle = textColor;
    ctx.fillText(name, 400, 100);
};

const handleSubmit = function(event){
    // prevent default reset
    
    // get all the values of the forms
    let name = document.getElementById("name").value;
    let backgroundColor = document.getElementById("bgdcolor").value;
    let textColor = document.getElementById("txtcolor").value;
    let fontSize = document.getElementById("fontsize").value;
    let fontType = document.querySelector("input[name=Fontname]:checked").value;

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

}
