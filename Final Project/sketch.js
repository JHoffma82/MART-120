let ball;
let paddleLeft, paddleRight;
let ballSpeedX, ballSpeedY;
let paddleSpeed = 8;
let paddleHeight = 100;
let scoreLeft = 0, scoreRight = 0;
let winner = null;

function setup() {
  createCanvas(800, 400);

  
  ball = createVector(width / 2, height / 2);
  ballSpeedX = random([-5, 5]);
  ballSpeedY = random([-3, 3]);

  
  paddleLeft = height / 2 - paddleHeight / 2;
  paddleRight = height / 2 - paddleHeight / 2;
}

function draw() {
  if (winner) {
    displayWinner();
    return;
  }

  drawSoccerField(); 
  
  fill(255);
  rect(20, paddleLeft, 10, paddleHeight);
  rect(width - 30, paddleRight, 10, paddleHeight); 

 
  fill('white');
  ellipse(ball.x, ball.y, 20, 20);

  
  ball.x += ballSpeedX;
  ball.y += ballSpeedY;

 
  if (ball.y <= 10 || ball.y >= height - 10) {
    ballSpeedY *= -1;
  }

  
  if (
    ball.x <= 30 &&
    ball.y >= paddleLeft &&
    ball.y <= paddleLeft + paddleHeight
  ) {
    ballSpeedX *= -1;
    ball.x = 30; 
  }

  if (
    ball.x >= width - 30 &&
    ball.y >= paddleRight &&
    ball.y <= paddleRight + paddleHeight
  ) {
    ballSpeedX *= -1;
    ball.x = width - 30; 
  }

  
  if (ball.x < 0) {
    scoreRight++;
    resetBall();
  } else if (ball.x > width) {
    scoreLeft++;
    resetBall();
  }

  
  if (scoreLeft >= 20) {
    winner = "Player 1 Wins!";
  } else if (scoreRight >= 20) {
    winner = "Player 2 Wins!";
  }

  
  if (keyIsDown(87)) paddleLeft = max(0, paddleLeft - paddleSpeed); 
  if (keyIsDown(83)) paddleLeft = min(height - paddleHeight, paddleLeft + paddleSpeed); 
  if (keyIsDown(UP_ARROW)) paddleRight = max(0, paddleRight - paddleSpeed); 
  if (keyIsDown(DOWN_ARROW)) paddleRight = min(height - paddleHeight, paddleRight + paddleSpeed); 

  
  textSize(32);
  fill(255);
  text(scoreLeft, width / 4, 40);
  text(scoreRight, (3 * width) / 4, 40);
}

function resetBall() {
  ball.set(width / 2, height / 2);
  ballSpeedX = random([-5, 5]);
  ballSpeedY = random([-3, 3]);
}

function displayWinner() {
  background('black');
  textSize(50);
  fill('white');
  textAlign(CENTER, CENTER);
  text(winner, width / 2, height / 2);
  noLoop(); 
}


function drawSoccerField() {
  background('green'); 

 
  stroke('white');
  strokeWeight(4);
  noFill();
  rect(0, 0, width, height); 

 
  line(width / 2, 0, width / 2, height);

  
  ellipse(width / 2, height / 2, 100);

  
  rect(0, height / 4, 40, height / 2); 
  rect(width - 40, height / 4, 40, height / 2); 
}