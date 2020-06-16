class Bomb {
    constructor(row, col, x , y) {
        this.row = row;
        this.col = col;
        this.x = x;
        this.y = y;
    }

    draw() {
        image(bombImage, this.col, this.row, squareSize, squareSize);
    }
}