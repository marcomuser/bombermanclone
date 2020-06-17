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
            game.makeExplode();
        }, 800);
    }

    draw() {
        image(bombImage, this.col, this.row, squareSize, squareSize);
        console.log(this.explodes);
    }
}
