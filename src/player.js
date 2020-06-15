class Player {
    constructor(name, image, row, col) {
        this.name = name;
        this.image = image;
        this.row = row;
        this.col = col;
        this.lives = 3;
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
        image(this.image, this.col, this.row, squareSize, squareSize);
    }
}