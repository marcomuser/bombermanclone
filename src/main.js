const canvasWidth = 800;
const canvasHeight = 800;
const squareSize = canvasWidth / 13;
const game = new Game();

function preload() {
    game.preload();
}

function setup() {
    game.setup();
}

function draw() {
    game.draw();
}

function keyPressed() {
    if (keyCode === 38) {
      game.player1.moveUp();
    } else if (keyCode === 40) {
      game.player1.moveDown();
    } else if (keyCode === 39) {
      game.player1.moveRight();
    } else if (keyCode === 37) {
      game.player1.moveLeft();
    } else if (keyCode === 32) {
      game.bomb = new Bomb(game.player1.row, game.player1.col, game.player1.x, game.player1.y);
      game.bomb.explosion();
    }

    if (keyCode === 87) {
      game.player2.moveUp();
    } else if (keyCode === 83) {
      game.player2.moveDown();
    } else if (keyCode === 68) {
      game.player2.moveRight();
    } else if (keyCode === 65) {
      game.player2.moveLeft();
    } else if (keyCode === 81) {
      game.bomb = new Bomb(game.player2.row, game.player2.col, game.player2.x, game.player2.y);
      game.bomb.explosion();
    }
  }

  // BUG TO FIX: whenever a new bomb gets instantiated the old one gets replaced by the new one. Instead the new one should be additive.