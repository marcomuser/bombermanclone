class Bomb {
    constructor(row, col, x , y) {
        this.row = row;
        this.col = col;
        this.x = x;
        this.y = y;
        this.explodes = false;
    }
    
    explosion() {
        setTimeout(() => {
            this.explodes = true;
            game.makeExplode(this.x, this.y);
        }, 3000);
    }

    draw() {
        if (!this.explodes) {
            image(bombImage, this.col, this.row, squareSize, squareSize);
        }
        if (this.explodes) {
            if (checkColForObstacle(this.x) && !checkRowForObstacle(this.y)) {
                // console.log('bomb destroyed a whole row');
                for (let i = 0; i < 13; i++) {
                    if (this.y === i) {
                        line(0, this.row + squareSize/2, canvasWidth, this.row + squareSize/2);
                    }
                }
            } else if (!checkColForObstacle(this.x) && checkRowForObstacle(this.y)) {
                // console.log('bomb destroyed a whole column');
                for (let i = 0; i < 13; i++) {
                    if (this.x === i) {
                        line(this.col + squareSize/2, 0, this.col + squareSize/2, canvasHeight);
                    }
                }
            } else {
                // console.log('bomb destroyed both row and column');
                for (let i = 0; i < 13; i++) {
                    if (this.x === i) {
                        line(this.col + squareSize/2, 0, this.col + squareSize/2, canvasHeight);
                    }
                    if (this.y === i) {
                        line(0, this.row + squareSize/2, canvasWidth, this.row + squareSize/2);
                    }
                }
            }
        }
    }
}
