var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var radius = 15;
var x = canvas.width/2;
var y = canvas.height-30;
var circle= new Circle(x, y, radius);

var paddleHeight = 15;
var paddleWidth = 200;
var paddleX = (canvas.width-paddleWidth)/2;
var rightPressed = false;
var leftPressed = false;

var monster = [];
var monsterRowCount = 5;
var monsterColumnCount = 6;
var monsterWidth = 150;
var monsterHeight = 15;
var monsterPadding = 32;
var monsterOffsetTop = 30;
var monsterOffsetLeft = 70;

var score = 0;
var lives = 3;


function drawScore() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#000000";
    ctx.fillText("Score: "+score, 8, 20);
}

function drawLives() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#000000";
    ctx.fillText("Lives: "+lives, canvas.width-65, 20);
}

function Circle(x, y, radius){
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.dx =5;
    this.dy =-5;
}

for(var i=0; i<monsterColumnCount; i++) {
    monster[i] = [];
    for(var j=0; j<monsterRowCount; j++) {
        monster[i][j] = { x: 0, y: 0, status: 1 };
    }
}

document.addEventListener("keydown", keyDown, false);
document.addEventListener("keyup", keyUp, false);

function keyDown(e) {
    if(e.key == "ArrowRight" || e.key == 'D') {
        rightPressed = true;
    }
    else if( e.key == "ArrowLeft") {
        leftPressed = true;
    }
}

function keyUp(e) {
    if( e.key == "ArrowRight") {
        rightPressed = false;
    }
    else if( e.key == "ArrowLeft") {
        leftPressed = false;
    }
}

function collisionCheck() {
    for (var i = 0; i < monsterColumnCount; i++) {
        for (var j = 0; j < monsterRowCount; j++) {
            var b = monster[i][j];
            if (b.status == 1) {
                if (circle.x > b.x && circle.x < b.x + monsterWidth && circle.y > b.y && circle.y < b.y + monsterHeight) {
                    circle.dy = -circle.dy;
                    b.status = 0;
                    score++;
                    if(score == monsterRowCount*monsterColumnCount) {
                        alert("YOU WIN !");
                        document.location.reload();
                    }
                }
            }
        }
    }
}

function createCircle(){
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI,true);
    ctx.fillStyle = "#ff3333";
    ctx.fill();
    ctx.closePath();
}

function paddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "#000000";
    ctx.fill();
    ctx.closePath();
}

function getRandom(){
    return Math.floor(Math.random()*350);
}

function getRandomColor(){
    var red = getRandom();
    var green = getRandom();
    var blue = getRandom();
    return "rgb(" + red + "," + blue + "," + green +")";
}

function drawMonster() {
    for(var i=0; i<monsterColumnCount; i++) {
        for(var j=0; j<monsterRowCount; j++) {
            if (monster[i][j].status == 1) {
                var monsterX = (i * (monsterWidth + monsterPadding)) + monsterOffsetLeft;
                var monsterY = (j * (monsterHeight + monsterPadding)) + monsterOffsetTop;
                var color = getRandomColor();
                monster[i][j].x = monsterX;
                monster[i][j].y = monsterY;
                ctx.beginPath();
                ctx.rect(monsterX, monsterY, monsterWidth, monsterHeight);
                ctx.fillStyle = color;
                ctx.fill();
                ctx.closePath();
            }
        }
    }
}

function move() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    createCircle();
    paddle();
    drawMonster();
    drawScore();
    drawLives();
    collisionCheck();


    if(circle.x + circle.dx > canvas.width-radius || circle.x + circle.dx < radius) {
        circle.dx = -circle.dx;
    }
    if(circle.y + circle.dy < radius) {
        circle.dy = -circle.dy;
    }else if (circle.y + circle.dy > canvas.height-radius){
        if (circle.x>paddleX-5 && circle.x<paddleX+paddleWidth+5){
            circle.dy = -circle.dy;
        }else {
            lives--;
            if (!lives){
                alert('Game Over');
                document.location.reload();
            }else {
                circle.x = canvas.width/2;
                circle.y = canvas.height-15;
                circle.dx = 5;
                circle.dy = -5;
                paddleX = (canvas.width-paddleWidth)/2;
            }
        }
    }

    if(rightPressed && paddleX < canvas.width-paddleWidth) {
        paddleX += 15;
    }
    else if(leftPressed && paddleX > 0) {
        paddleX -= 15;
    }

    circle.x += circle.dx*2;
    circle.y += circle.dy*2;
    requestAnimationFrame(move);
}

move();