
let Show =function () {
    this.showGameOver = function () {
            ctx.font = "60px Arial";
            ctx.strokeStyle = "#00ff00";
            ctx.textAlign = "center";
            ctx.strokeText("GAME OVER! PLEASE TRY AGAIN", canvas.width / 2, canvas.height / 2);
        }

    this.showWin = function () {
        ctx.font = "60px Arial";
        ctx.strokeStyle = "#00ff00";
        ctx.textAlign = "center";
        ctx.strokeText("YOU WIN! CONGRATULATIONS ", canvas.width / 2, canvas.height / 2);
    }
}


