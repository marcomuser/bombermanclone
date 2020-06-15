class Game {
    constructor() {
        // this.player1 = new Player('Hans', image, 0, 0);
        // this.player2 = new Player('Gretel', image, canvasWidth - squareSize, canvasHeight - squareSize); 
    }

    preload() {

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
        player1.draw();
        player2.draw();
    }
}