var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var radius = 15;
var x = canvas.width/2;
var y = canvas.height-30;
var circle= new Circle(x, y, radius);
var paddleHeight = 15;
var paddleWidth = 150;
var paddleX = (canvas.width-paddleWidth)/2;
var rightPressed = false;
var leftPressed = false;

document.addEventListener("keydown", keyDown, false);
document.addEventListener("keyup", keyUp, false);

function keyDown(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = true;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = true;
    }
}

function keyUp(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = false;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = false;
    }
}

function Circle(x, y, radius){
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.dx =5;
    this.dy =-5;
}

function paddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "#000000";
    ctx.fill();
    ctx.closePath();
}

function createCircle(){
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
    ctx.fillStyle = "#ff0000";
    ctx.fill();
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    createCircle();
    paddle();

    if(circle.x + circle.dx > canvas.width-radius || circle.x + circle.dx < radius) {
        circle.dx = -circle.dx;
    }
    if(circle.y + circle.dy < radius) {
        circle.dy = -circle.dy;
    }else if (circle.y + circle.dy > canvas.height-radius){
        if (circle.x>paddleX && circle.x<paddleX+paddleWidth){
            circle.dy = -circle.dy;
        }else {
            alert('GAME OVER');
            document.location.reload();
            clearInterval(interval);
        }
    }

    if(rightPressed && paddleX < canvas.width-paddleWidth) {
        paddleX += 7;
    }
    else if(leftPressed && paddleX > 0) {
        paddleX -= 7;
    }


    circle.x += circle.dx*1.8;
    circle.y += circle.dy*1.3;
}

var interval = setInterval(draw, 10);