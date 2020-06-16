class Bomb {
    constructor(row, col, x , y) {
        this.row = row;
        this.col = col;
        this.x = x;
        this.y = y;
        this.explosion1 = false;
    }
    
    explosion() {
        setTimeout(() => {
            this.explosion1 = true;
            //game.checkExplosion(this.x, this.y);
        }, 800);
    }

    draw() {
        image(bombImage, this.col, this.row, squareSize, squareSize);
        console.log(this.explosion1);
    }
}
