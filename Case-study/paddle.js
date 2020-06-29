let Paddle = function (paddleHeight,paddleWidth,paddleX) {
    this.paddleHeight = paddleHeight ;
    this.paddleWidth = paddleWidth ;
    this.paddleX = paddleX ;
    let rightPressed = false;
    let leftPressed = false;

    document.addEventListener("keydown", keyDown, false);
    document.addEventListener("keyup", keyUp, false);

    function keyDown(e) {
        if(e.key == "ArrowRight") {
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

    this.drawPaddle = function () {
        ctx.beginPath();
        ctx.rect(this.paddleX, canvas.height - this.paddleHeight, this.paddleWidth, this.paddleHeight);
        ctx.fillStyle = "#000000";
        ctx.fill();
        ctx.closePath();
    }

    this.movePallde = function () {
        if(rightPressed && this.paddleX < canvas.width-this.paddleWidth) {
            this.paddleX += 15;
        }
        else if(leftPressed && this.paddleX > 0) {
            this.paddleX -= 15;
        }
    }
}