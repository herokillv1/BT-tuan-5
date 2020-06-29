let Monster = function (monsterRowCount,monsterColumnCount,
                        monsterWidth,monsterHeight,
                        monsterPadding,monsterOffsetTop,
                        monsterOffsetLeft,score) {
    this.monsterRowCount = monsterRowCount;
    this.monsterColumnCount = monsterColumnCount;
    this.monsterWidth = monsterWidth;
    this.monsterHeight = monsterHeight;
    this.monsterPadding = monsterPadding;
    this.monsterOffsetTop = monsterOffsetTop;
    this.monsterOffsetLeft = monsterOffsetLeft;
    this.score = score ;
    var monster = [];

    this.drawScore = function () {
        ctx.font = "16px Arial";
        ctx.fillStyle = "#000000";
        ctx.fillText("Score: "+score, 8, 20);
    }

    for(var i=0; i<this.monsterColumnCount; i++) {
        monster[i] = [];
        for(var j=0; j<this.monsterRowCount; j++) {
            monster[i][j] = { x: 0, y: 0, status: 1 };
        }
    }

    this.collisionCheck = function () {
        for (var i = 0; i < this.monsterColumnCount; i++) {
            for (var j = 0; j < this.monsterRowCount; j++) {
                var b = monster[i][j];
                if (b.status == 1) {
                    if (ball.x > b.x && ball.x < b.x + this.monsterWidth && ball.y > b.y && ball.y < b.y + this.monsterHeight) {
                        ball.dy = -ball.dy;
                        b.status = 0;
                        score++;
                        if(score == this.monsterRowCount*this.monsterColumnCount) {
                            alert("MẮT BẠN TỐT ĐẤY !!!");
                            document.location.reload();
                        }
                    }
                }
            }
        }
    }

    this.drawMonster = function () {
        for (var i = 0; i < this.monsterColumnCount; i++) {
            for (var j = 0; j < this.monsterRowCount; j++) {
                if (monster[i][j].status == 1) {
                    var monsterX = (i * (this.monsterWidth + this.monsterPadding)) + this.monsterOffsetLeft;
                    var monsterY = (j * (this.monsterHeight + this.monsterPadding)) + this.monsterOffsetTop;
                    var color1 = getRandomColor();
                    monster[i][j].x = monsterX;
                    monster[i][j].y = monsterY;
                    ctx.beginPath();
                    ctx.rect(monsterX, monsterY, this.monsterWidth, this.monsterHeight);
                    ctx.fillStyle = color1;
                    ctx.fill();
                    ctx.closePath();
                }
            }
        }
    }
}