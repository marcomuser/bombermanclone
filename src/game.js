let player1DefaultImage;
let player2DefaultImage;

class Game {
    constructor() {
        this.player1 = new Player('Hans', 0, 0);
        this.player2 = new Player('Gretel', canvasWidth - squareSize, canvasHeight - squareSize); 
    }

    preload() {
        player1DefaultImage = loadImage('assets/player1_down.png');
        player2DefaultImage = loadImage('assets/player2_down.png');
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
        // player1.draw();
        this.player2.draw();
    }
}