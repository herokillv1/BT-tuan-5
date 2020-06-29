let Ball = function (x,y,dx,dy,radius,lives) {
    this.x = x ;
    this.y = y ;
    this.dx = dx ;
    this.dy = dy ;
    this.radius = radius ;
    this.lives = lives ;


    this.drawBall = function () {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI,true);
        ctx.fillStyle = '#ff3333';
        ctx.fill();
        ctx.closePath();
    }

    this.drawLives = function () {
        ctx.font = "16px Arial";
        ctx.fillStyle = '#ececec';
        ctx.fillText("Lives: "+lives, canvas.width-65, 20);
    }


    this.moveBall = function () {
        if(this.x + this.dx > canvas.width-this.radius || this.x + this.dx < this.radius) {
            this.dx = -this.dx;
        }
        if(this.y + this.dy < this.radius) {
            this.dy = -this.dy;
        }else if (this.y + this.dy > canvas.height-this.radius){
            if (this.x>paddle.paddleX-5 && this.x<paddle.paddleX+200+5){
                this.dy = -this.dy;
            }else {
                lives--;
                if (!lives){
                    alert('Thua Rồi Bạn Ơi')
                    document.location.reload();
                }else {
                    this.x = canvas.width/2;
                    this.y = canvas.height-15;
                    this.dx = 5;
                    this.dy = -5;
                    paddle.paddleX = (canvas.width-200)/2;
                }
            }
        }
        this.x += this.dx*2;
        this.y += this.dy*2;
    }
}