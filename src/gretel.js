class Gretel extends Player {
    constructor(name, row, col, image, lives) {
        super(name, row, col, image, lives);
    }

    moveUp() {
        this.row -= squareSize;
        this.image = gretelUp;
    }

    moveDown() {
        this.row += squareSize;
        this.image = gretelDown;
    }

    moveRight() {
        this.col += squareSize;
        this.image = gretelRight;
    }

    moveLeft() {
        this.col -= squareSize;
        this.image = gretelLeft;
    }

    draw() {
        image(this.image || gretelDown, this.col, this.row, squareSize, squareSize);
    }
}