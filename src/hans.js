// Hans is player1

class Hans extends Player {
    constructor(name, row, col, x, y, image, lives, bomb) {
        super(name, row, col, image, lives, bomb);
        this.x = 0;
        this.y = 0;
    }

    moveUp() {
        if (this.y - 1 < 0 || grid[this.y - 1][this.x] === 5) {
            console.log('You cannot move here');
        } else {
            this.row -= squareSize;
            this.y -= 1;
            this.image = hansUp;
        }
    }

    moveDown() {
        if (this.y + 1 > (canvasWidth / squareSize) - 1 || grid[this.y + 1][this.x] === 5) {
            console.log('You cannot move here');
        } else {
            this.row += squareSize;
            this.y += 1;
            this.image = hansDown;
        }
    }

    moveRight() {
        if (this.x + 1 > (canvasWidth / squareSize) - 1 || grid[this.y][this.x + 1] === 5) {
            console.log('You cannot move here');
        } else {
            this.col += squareSize;
            this.x += 1;
            this.image = hansRight;
        }
    }

    moveLeft() {
        if (this.x - 1 < 0 || grid[this.y][this.x - 1] === 5) {
            console.log('You cannot move here');
        } else {
            this.col -= squareSize;
            this.x -= 1;
            this.image = hansLeft;
        }
    }

    draw() {
        image(this.image || hansDown, this.col, this.row, squareSize, squareSize);
        // bomb.draw();
        // if(game.bomb) {
        //     game.bomb.draw();
        // }
    }
}