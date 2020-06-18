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
let player1wins;
let player2wins;
let gameDraw;

class Game {
    constructor() {
        this.player1 = new Hans('Hans', 0, 0);
        this.player2 = new Gretel('Gretel', canvasWidth - squareSize, canvasHeight - squareSize);
        this.over = false;
        this.bombsArr = [];
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
        stoneBox = loadImage('assets/box_stone.png');
        bombImage = loadImage('assets/bomb.png');
        player1wins = loadImage('assets/player1_wins.png');
        player2wins = loadImage('assets/player2_winner.png');
        gameDraw = loadImage('assets/gamedraw.png');
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
            console.log('bomb destroyed a whole row');
            if (this.player1.y === y) {
                this.player1.lives -= 1;
                document.querySelectorAll('header span')[0].innerText = this.player1.lives;
                // console.log('player1: ', this.player1.lives)
                this.resetPlayerPosition(this.player1);
                if (this.player1.lives < 1) {
                    this.over = true;
                }
            }
            if (this.player2.y === y) {
                this.player2.lives -= 1;
                document.querySelectorAll('header span')[1].innerText = this.player2.lives;
                // console.log('player2: ', this.player2.lives)
                this.resetPlayerPosition(this.player2);
                if (this.player2.lives < 1) {
                    this.over = true;
                }
            }
        } else if (!checkColForObstacle(x) && checkRowForObstacle(y)) {
            console.log('bomb destroyed a whole column');
            if (this.player1.x === x) {
                this.player1.lives -= 1;
                document.querySelectorAll('header span')[0].innerText = this.player1.lives;
                // console.log('player1: ', this.player1.lives)
                this.resetPlayerPosition(this.player1);
                if (this.player1.lives < 1) {
                    this.over = true;
                }
            }
            if (this.player2.x === x) {
                this.player2.lives -= 1;
                document.querySelectorAll('header span')[1].innerText = this.player2.lives;
                // console.log('player2: ', this.player2.lives)
                this.resetPlayerPosition(this.player2);
                if (this.player2.lives < 1) {
                    this.over = true;
                }
            }
        } else {
            console.log('bomb destroyed both row and column');
            if (this.player1.x === x || this.player1.y === y) {
                this.player1.lives -= 1;
                document.querySelectorAll('header span')[0].innerText = this.player1.lives;
                // console.log('player1: ', this.player1.lives)
                this.resetPlayerPosition(this.player1);
                if (this.player1.lives < 1) {
                    this.over = true;
                }
            }
            if (this.player2.x === x || this.player2.y === y) {
                this.player2.lives -= 1;
                document.querySelectorAll('header span')[1].innerText = this.player2.lives;
                // console.log('player2: ', this.player2.lives)
                this.resetPlayerPosition(this.player2);
                if (this.player2.lives < 1) {
                    this.over = true;
                }
            }
        }
    }

    draw() {
        clear();

        if (!game.over) {
            this.bombsArr.forEach(bomb => {
                bomb.draw();
            })

            this.bombsArr = this.bombsArr.filter(bomb => {
                return !bomb.explodes;
            })

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
        } else {
            noLoop();

            if (game.player1.lives < 1 && game.player2.lives < 1) {
                image(gameDraw, 0, 0);
            } else if (game.player1.lives < 1) {
                image(player2wins, 0, 0);
            } else {
                image(player1wins, 0, 0);
            }
        }
    }
}