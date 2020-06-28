var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var radius = 15;
var x = canvas.width/2;
var y = canvas.height-30;
var circle= new Circle(x, y, radius);

function Circle(x, y, radius){
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.dx =5;
    this.dy =-5;
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

    if(circle.x + circle.dx > canvas.width-radius || circle.x + circle.dx < radius) {
        circle.dx = -circle.dx;
    }
    if(circle.y + circle.dy > canvas.height-radius||circle.y + circle.dy < radius) {
        circle.dy = -circle.dy;
    }

    circle.x += circle.dx*1.8;
    circle.y += circle.dy*1.3;
}

setInterval(draw, 10);