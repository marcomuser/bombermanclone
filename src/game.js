let hansDown;
let hansUp;
let hansRight;
let hansLeft;
let gretelDown;
let gretelUp;
let gretelRight;
let gretelLeft;

class Game {
    constructor() {
        this.player1 = new Hans('Hans', 0, 0);
        this.player2 = new Gretel('Gretel', canvasWidth - squareSize, canvasHeight - squareSize); 
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
    }

    draw() {
        // draw auxiliary lines:
        for (let i = 0; i <= canvasWidth; i += squareSize) {
            line(0, i, canvasWidth, i);
        }
        for (let i = 0; i <= canvasHeight; i += squareSize) {
            line(i, 0, i, canvasHeight);
        }
        
        // set background-color for the whole grid:
        background('rgba(0,255,0, 0.25)');

        // draw the player:
        this.player1.draw();
        this.player2.draw();
    }
}