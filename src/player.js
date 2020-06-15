class Player {
    constructor(name, row, col) {
        this.name = name;
        this.row = row;
        this.col = col;
        this.lives = 3;
        this.image;
    }

    moveUp() {
        this.row -= squareSize;
    }

    moveDown() {
        this.row += squareSize;
    }

    moveLeft() {
        this.col += squareSize;
    }

    moveRight() {
        this.col -= squareSize;
    }

    draw() {
        image(this.image || player2DefaultImage, this.col, this.row, squareSize, squareSize);
    }
}