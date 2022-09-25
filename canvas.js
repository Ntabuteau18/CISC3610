console.log('Placeholder')

//The background
var canvas = document.getElementById("mycanvas");
var ctxx = canvas.getContext("2d");

ctxx.fillStyle = '#84C1F0';
ctxx.fillRect(0,0,canvas.width, canvas.height);

// sun
ctxx.fillStyle = "yellow";
ctxx.lineWidth = 5;
ctxx.beginPath();
ctxx.arc(80, 70, 50, 0, 2 * Math.PI);
ctxx.stroke();
ctxx.fill();

// lines of sun
ctxx.beginPath();
ctxx.lineWidth = 5;
ctxx.moveTo(80,120);
ctxx.lineTo(80,180);
ctxx.strokeStyle = 'yellow';
ctxx.stroke();

// lines of sun
ctxx.beginPath();
ctxx.moveTo(130, 60);
ctxx.lineTo(200, 40);
ctxx.stroke();
// lines of sun
ctxx.beginPath();
ctxx.moveTo(120, 100);
ctxx.lineTo(200, 130);
ctxx.stroke();


// grass
var x = 0
for (i = 0; i < 70; i++) {
  ctxx.fillStyle = "green";
  ctxx.beginPath();
  ctxx.lineWidth = 3;
  ctxx.arc(x, 600, 50, 0,Math.PI, true);
  //ctxx.arc(10, 500, 50, 0, 2 * Math.PI);
  ctxx.strokeStyle = "black";
  ctxx.stroke();
  ctxx.fill();
  x = x + 70;
}
// walls of house
ctxx.fillStyle = "orange";
ctxx.beginPath();
ctxx.moveTo(450, 300);
ctxx.lineTo(450, 900);
ctxx.lineTo(800, 300);
ctxx.stroke();
ctxx.fill();

//walls of house
ctxx.beginPath();
ctxx.moveTo(450, 300);
ctxx.lineTo(800, 300);
ctxx.lineTo(800, 900);
ctxx.stroke();
ctxx.fill();

// door
ctxx.fillStyle = "brown";
ctxx.beginPath();
ctxx.moveTo(600, 450);
ctxx.lineTo(600, 900);
ctxx.lineTo(600, 450);
ctxx.lineTo(650, 450);
ctxx.lineTo(650, 700);
ctxx.lineTo(600, 800);
ctxx.stroke();
ctxx.fill();

//doorknob
ctxx.fillStyle = "yellow";
ctxx.beginPath();
ctxx.arc(640, 515, 5, 0, 2 * Math.PI);
ctxx.stroke();
ctxx.fill();

//window left
ctxx.beginPath()
ctxx.fillStyle = "white";
ctxx.lineWidth = "4";
ctxx.fillRect(470, 330, 100, 100);
ctxx.rect(470, 330, 100, 100);
ctxx.stroke();

// left window lines horizontal
ctxx.beginPath();
ctxx.moveTo(470, 375);
ctxx.lineTo(570, 375);
ctxx.stroke();

// left windows line vertical
ctxx.beginPath();
ctxx.moveTo(520,430);
ctxx.lineTo(520, 330);
ctxx.stroke();

//window right
ctxx.beginPath()
ctxx.fillStyle = "white";
ctxx.lineWidth = "4";
ctxx.fillRect(670, 330, 100, 100);
ctxx.rect(670, 330, 100, 100);
ctxx.stroke();

// right window lines horizontal
ctxx.beginPath();
ctxx.moveTo(670, 375);
ctxx.lineTo(770, 375);
ctxx.stroke();

// right windows line vertical
ctxx.beginPath();
ctxx.moveTo(720, 430);
ctxx.lineTo(720, 330);
ctxx.stroke();

// chimney vertical
ctxx.beginPath()
ctxx.fillStyle = "crimson";
ctxx.lineWidth = "3";
ctxx.fillRect(700, 199, 50, 100);
ctxx.rect(700, 199, 50, 100);
ctxx.stroke();

//chimney top
ctxx.beginPath()
ctxx.fillStyle = "gray";
ctxx.fillRect(675, 170, 100, 55);
ctxx.rect(675, 170, 100, 55);
ctxx.stroke();

// chimney smoke
ctxx.beginPath();
ctxx.lineWidth = "2";
ctxx.fillStyle = "grey";
ctxx.arc(700, 150, 15, 0, 2 * Math.PI);
ctxx.stroke();
ctxx.fill();

// chimney smoke
ctxx.beginPath();
ctxx.lineWidth = "2";
ctxx.fillStyle = "grey";
ctxx.arc(750, 140, 15, 0, 2 * Math.PI);
ctxx.stroke();
ctxx.fill();

// chimney smoke
ctxx.beginPath();
ctxx.lineWidth = "2";
ctxx.fillStyle = "grey";
ctxx.arc(750, 100, 10, 0, 2 * Math.PI);
ctxx.stroke();
ctxx.fill();

// chimney smoke
ctxx.beginPath();
ctxx.lineWidth = "2";
ctxx.fillStyle = "grey";
ctxx.arc(800, 80, 8, 0, 2 * Math.PI);
ctxx.stroke();
ctxx.fill();

// chimney smoke
ctxx.beginPath();
ctxx.lineWidth = "2";
ctxx.fillStyle = "grey";
ctxx.arc(850, 55, 5, 0, 2 * Math.PI);
ctxx.stroke();
ctxx.fill();

// text
ctxx.fillStyle = "purple";
ctxx.font = "20px Arial";
ctxx.fillText("Peace Away from the City", 500, 20);