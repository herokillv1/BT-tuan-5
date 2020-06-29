let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let ball = new Ball((canvas.width/2), (canvas.height-30),5,-5, 15,3);
let paddle = new Paddle(15,200,(canvas.width-200)/2);
let monster = new Monster(5,6,150,30,32,30,70,0);


function playgame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ball.drawBall();
    paddle.drawPaddle();
    ball.drawLives();
    monster.drawMonster();
    monster.drawScore();
    monster.collisionCheck();
    ball.moveBall();
    paddle.movePallde();
    requestAnimationFrame(playgame);
    document.getElementById("start").innerHTML = 'Lever Up' ;
}


function restart() {
    document.location.reload();
}


function load() {
    ball.drawBall();
    paddle.drawPaddle();
    monster.drawMonster();
}
 load();


