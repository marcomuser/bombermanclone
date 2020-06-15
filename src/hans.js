class Hans extends Player {
    constructor(name, row, col, image, lives) {
        super(name, row, col, image, lives);
    }

    moveUp() {
        this.row -= squareSize;
        this.image = hansUp;
    }

    moveDown() {
        this.row += squareSize;
        this.image = hansDown;
    }

    moveRight() {
        this.col += squareSize;
        this.image = hansRight;
    }

    moveLeft() {
        this.col -= squareSize;
        this.image = hansLeft;
    }

    draw() {
        image(this.image || hansDown, this.col, this.row, squareSize, squareSize);
    }
}