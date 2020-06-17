let hansDown;
let hansUp;
let hansRight;
let hansLeft;
let gretelDown;
let gretelUp;
let gretelRight;
let gretelLeft;
let stoneBox;
let bombImage;

class Game {
    constructor() {
        this.player1 = new Hans('Hans', 0, 0);
        this.player2 = new Gretel('Gretel', canvasWidth - squareSize, canvasHeight - squareSize);
        this.over = false;
    }

    preload() {
        hansDown = loadImage('assets/player1_down.png');
        hansUp = loadImage('assets/player1_up.png');
        hansRight = loadImage('assets/player1_right.png');
        hansLeft = loadImage('assets/player1_left.png');
        gretelDown = loadImage('assets/player2_down.png');
        gretelUp = loadImage('assets/player2_up.png');
        gretelRight = loadImage('assets/player2_right.png');
        gretelLeft = loadImage('assets/player2_left.png');
        stoneBox = loadImage('assets/box_stone.png')
        bombImage = loadImage('assets/bomb.png')
    }

    setup() {
        createCanvas(canvasWidth, canvasHeight);
        frameRate(15);
    }

    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }
    
    resetPlayerPosition(gamer) {
        let randomCorner = this.getRandomInt(0, 4);
        if (randomCorner === 0) {
            gamer.row = 0;
            gamer.col = 0;
            gamer.x = 0;
            gamer.y = 0;
        } else if (randomCorner === 1) {
            gamer.row = canvasWidth - squareSize;
            gamer.col = 0;
            gamer.x = 0;
            gamer.y = (canvasWidth / squareSize) - 1;
        } else if (randomCorner === 2) {
            gamer.row = 0;
            gamer.col = canvasWidth - squareSize;
            gamer.x = (canvasWidth / squareSize) - 1;
            gamer.y = 0;
        } else if (randomCorner === 3) {
            gamer.row = canvasWidth - squareSize;
            gamer.col = canvasWidth - squareSize;
            gamer.x = (canvasWidth / squareSize) - 1;
            gamer.y = (canvasWidth / squareSize) - 1;
        }
    }
    
    makeExplode(x, y) {
        if (checkColForObstacle(x) && !checkRowForObstacle(y)) {
            console.log('this will destroy a whole row');
            if (this.player1.y === y) {
                this.player1.lives -= 1;
                this.resetPlayerPosition(this.player1);
            }
        } else if (!checkColForObstacle(x) && checkRowForObstacle(y)) {
            console.log('this will destroy a whole column');
            if (this.player1.x === x) {
                this.player1.lives -= 1;
                this.resetPlayerPosition(this.player1);
            }
        } else {
            console.log('this will destroy both row and column');
            if (this.player1.x === x || this.player1.y === y) {
                this.player1.lives -= 1;
                this.resetPlayerPosition(this.player1);
            }
        }
    }

    draw() {
        clear();

        // draw auxiliary lines:
        for (let i = 0; i <= canvasWidth; i += squareSize) {
            line(0, i, canvasWidth, i);
        }
        for (let i = 0; i <= canvasHeight; i += squareSize) {
            line(i, 0, i, canvasHeight);
        }

        // draw stone obstacles:
        for (let i = squareSize; i <= canvasWidth; i+= squareSize * 2) {
            for (let j = 1; j < canvasWidth / squareSize; j += 2) {
                image(stoneBox, i, squareSize * j, squareSize, squareSize)
            }
        }

        // draw the player:
        this.player1.draw();
        this.player2.draw();
    }
}