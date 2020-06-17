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
    }
}
