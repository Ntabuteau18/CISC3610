canvas = document.getElementById('mycanvas');
ctx = canvas.getContext('2d');

canvas_width = canvas.width = 1200;
canvas_height = canvas.height = 600;

Spriteimage = new Image();
Spriteimage.src = '../images/spritesheet.png';

spritewidth = 232;
spriteheight = 183;
let frameX = 0;
let frameY = 0;
let gameFrame = 0;
staggerFrames = 5;



function animate(){
    ctx.clearRect(0,0,canvas_width, canvas_height);
    ctx.drawImage(Spriteimage, frameX*spritewidth,frameY*spriteheight,spritewidth,spriteheight,0,410,235,
        183);
        if(gameFrame % staggerFrames == 0){
        if(frameX< 5) frameX++;
        else frameX=0;
}
    gameFrame++;    
    requestAnimationFrame(animate);

ctx.beginPath()
ctx.lineWidth = "2";
ctx.fillStyle = "#e7dede";
ctx.rect(250, 250, 300, 100);
ctx.fillRect(250, 250, 300, 100);
ctx.stroke();
ctx.fillStyle = "black";
ctx.font = "20px Arial";
ctx.fillText("Where'd all my friends go", 300, 300);
};

animate();


