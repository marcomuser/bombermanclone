const canvasWidth = 800;
const canvasHeight = 800;
const squareSize = canvasWidth / 13;
const game = new Game();

function preload() {

}

function setup() {
    createCanvas(canvasWidth, canvasHeight);
}

function draw() {
    clear();
    game.draw();
}