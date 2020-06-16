// Gretel is player2

class Gretel extends Player {
    constructor(name, row, col, x, y, image, lives) {
        super(name, row, col, image, lives);
        this.x = (canvasWidth / squareSize) - 1;
        this.y = (canvasWidth / squareSize) - 1;
    }

    moveUp() {
        if (this.y - 1 < 0 || grid[this.y - 1][this.x] === 5) {
            console.log('You cannot move here');
        } else {
            this.row -= squareSize;
            this.y -= 1;
            this.image = gretelUp;
        }
    }

    moveDown() {
        if (this.y + 1 > (canvasWidth / squareSize) - 1 || grid[this.y + 1][this.x] === 5) {
            console.log('You cannot move here');
        } else {
            this.row += squareSize;
            this.y += 1;
            this.image = gretelDown;
        }
    }

    moveRight() {
        if (this.x + 1 > (canvasWidth / squareSize) - 1 || grid[this.y][this.x + 1] === 5) {
            console.log('You cannot move here');
        } else {
            this.col += squareSize;
            this.x += 1;
            this.image = gretelRight;
        }
    }

    moveLeft() {
        if (this.x - 1 < 0 || grid[this.y][this.x - 1] === 5) {
            console.log('You cannot move here');
        } else {
            this.col -= squareSize;
            this.x -= 1;
            this.image = gretelLeft;
        }
    }

    draw() {
        image(this.image || gretelDown, this.col, this.row, squareSize, squareSize);
    }
}