const game = new Game();
const canvasWidth = 800;
const canvasHeight = 800;
const squareSize = canvasWidth / 13;

function preload() {

}

function setup() {
    createCanvas(canvasWidth, canvasHeight);
}

function draw() {
    clear();
    game.draw();
}