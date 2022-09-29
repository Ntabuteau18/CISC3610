var fruit = [
    { name: "Strawberry", quantity: 15, color: "red" },
    { name: "Peach", quantity: 10, color: "orange" },
    { name: "Banana", quantity: 25, color: "yellow" },
    { name: "Pear", quantity: 10, color: "green" },
    { name: "Grape", quantity: 20, color: "purple" }
];

var canvas = document.getElementById("mycanvas");
var ctxx = canvas.getContext("2d");

var chart =function (){
    
    var x=0;
    for (var i=0;i<fruit.length;i++){

    ctxx.fillStyle = fruit[i].color;
    ctxx.fillRect(x,canvas.height-20* fruit[i].quantity,95,600);

    ctxx.fillStyle = "black";
    ctxx.font = "bold 20px Calibri";
    
    ctxx.fillText(fruit[i].name,x,650);
    ctxx.fillText(fruit[i].quantity,x,630);
    ctxx.stroke();
    x=x+120;
    }
};

chart();