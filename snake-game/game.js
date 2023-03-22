const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const game = {
  level: 1,
  snake: {
    x: 0,
    y: 0,
    dx: 1,
    dy: 0,
    cells: [],
    maxCells: 4
  },
  food: {
    x: 0,
    y: 0
  },
};

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function init() {
  game.snake.x = canvas.width / 2;
  game.snake.y = canvas.height / 2;
  game.snake.cells = [];
  game.snake.maxCells = 4;
  game.food.x = game.snake.x + getRandomInt(0, canvas.width / 10) * 2;
  game.food.y = game.snake.y + getRandomInt(0, canvas.height / 10) * 2;
}

function update() {
  // update snake position
  game.snake.x += game.snake.dx * game.level;
  game.snake.y += game.snake.dy * game.level;

  // wrap snake around edges of canvas
  if (game.snake.x < 0) {
    game.snake.x = canvas.width - 10;
  }
  else if (game.snake.x >= canvas.width) {
    game.snake.x = 0;
  }
  if (game.snake.y < 0) {
    game.snake.y = canvas.height - 10;
  }
  else if (game.snake.y >= canvas.height) {
    game.snake.y = 0;
  }

  // add new cell to snake's body
  game.snake.cells.unshift({ x: game.snake.x, y: game.snake.y });
  if (game.snake.cells.length > game.snake.maxCells) {
    game.snake.cells.pop();
  }

  // check for collision with food
  if (Math.abs(game.snake.x - game.food.x) <= 10 && Math.abs(game.snake.y - game.food.y) <= 10) {
    game.snake.maxCells++;
    game.level++;
    game.food.x = getRandomInt(0, canvas.width / 10) * 10;
    game.food.y = getRandomInt(0, canvas.height / 10) * 10;
  }
}

function draw() {
  // clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // draw snake
  ctx.fillStyle = "green";
  game.snake.cells.forEach(function(cell, index) {
    ctx.fillRect(cell.x, cell.y, 10, 10);
  });

  // draw food
  ctx.fillStyle = "red";
  ctx.fillRect(game.food.x, game.food.y, 10, 10);

  // draw score
  ctx.fillStyle = "black";
  ctx.font = "20px sans-serif";
  ctx.fillText("Level: " + game.level, 10, 30);
}

function loop() {
  update();
  draw();
  requestAnimationFrame(loop);
}

init();
loop();

document.addEventListener("keydown", function(event) {
  switch (event.keyCode) {
    case 37: // left arrow
      if (game.snake.dx !== 1) {
        game.snake.dx = -1;
        game.snake.dy = 0;
      }
      break;
    case 38: // up arrow
      if (game.snake.dy !== 1) {
        game.snake.dx = 0;
        game.snake.dy = -1;
      }
      break;
    case 39: // right arrow
      if (game.snake.dx !== -1) {
        game.snake.dx = 1;
        game.snake.dy = 0;
      }
      break;
    case 40: // down arrow
      if (game.snake.dy !== -1) {
        game.snake.dx = 0;
        game.snake.dy = 1;
      }
      break;
  }
});