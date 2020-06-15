const canvasWidth = 800;
const canvasHeight = 800;
const squareSize = canvasWidth / 51;
const game = new Game();


function preload() {
    game.preload();
}

function setup() {
    createCanvas(canvasWidth, canvasHeight);
}

function draw() {
    clear();
    game.draw();
}

function keyPressed() {
    if (keyCode === 73) {
      game.player1.moveUp();
    } else if (keyCode === 75) {
      game.player1.moveDown();
    } else if (keyCode === 76) {
      game.player1.moveRight();
    } else if (keyCode === 74) {
      game.player1.moveLeft();
    }
    if (keyCode === 87) {
      game.player2.moveUp();
    } else if (keyCode === 83) {
      game.player2.moveDown();
    } else if (keyCode === 68) {
      game.player2.moveRight();
    } else if (keyCode === 65) {
      game.player2.moveLeft();
    }
  }