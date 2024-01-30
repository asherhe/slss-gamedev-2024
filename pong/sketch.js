// ball position + velocity
let ballX, ballY, ballVx, ballVy;
let ballRadius = 10;

// paddle position (top left corner)
let p1X, p1Y, p2X, p2Y;
let paddleWidth = 15,
  paddleHeight = 80;

function setup() {
  createCanvas(600, 400);

  ballX = width / 2;
  ballY = random(height);
  ballVx = random([-5, 5]);
  ballVy = random([-5, 5]);

  p1X = 40;
  p1Y = height / 2 - paddleHeight / 2;
  p2X = width - p1X - paddleWidth;
  p2Y = height / 2 - paddleHeight / 2;
}

function draw() {
  // we draw things
  background("white"); // clear everything

  noStroke();
  fill("black");

  // ball
  circle(ballX, ballY, 2 * ballRadius);

  // paddles
  rect(p1X, p1Y, paddleWidth, paddleHeight);
  rect(p2X, p2Y, paddleWidth, paddleHeight);

  // get keyboard input
  if (keyIsDown(87)) {
    // w
    p1Y -= 5;
    if (p1Y < 0) {
      p1Y = 0;
    }
  }
  if (keyIsDown(83)) {
    // s
    p1Y += 5;
    if (p1Y + paddleHeight > height) {
      p1Y = height - paddleHeight;
    }
  }
  if (keyIsDown(38)) {
    // down arrow
    p2Y -= 5;
    if (p2Y < 0) {
      p2Y = 0;
    }
  }
  if (keyIsDown(40)) {
    // up arrow
    p2Y += 5;
    if (p2Y + paddleHeight > height) {
      p2Y = height - paddleHeight;
    }
  }

  // update ball stuff
  ballX += ballVx;
  ballY += ballVy;

  // check for ball collision
  if (ballY - ballRadius <= 0) {
    // top
    ballVy = -ballVy;
  }
  if (ballY + ballRadius >= height) {
    // bottom
    ballVy = -ballVy;
  }

  if (ballX - ballRadius <= p1X + paddleWidth && p1Y <= ballY && ballY <= p1Y + paddleHeight) {
    ballVx = -ballVx;
    ballX = p1X + paddleWidth + ballRadius;
  }
  if (ballX + ballRadius >= p2X && p2Y <= ballY && ballY <= p2Y + paddleHeight) {
    ballVx = -ballVx;
    ballX = p2X - ballRadius;
  }

  if (ballX <= 0) {
    ballX = width / 2;
    ballY = random(height);
    ballVx = random([-5, 5]);
    ballVy = random([-5, 5]);

    p1X = 40;
    p1Y = height / 2 - paddleHeight / 2;
    p2X = width - p1X - paddleWidth;
    p2Y = height / 2 - paddleHeight / 2;
  }
  if (ballX >= width) {
    ballX = width / 2;
    ballY = random(height);
    ballVx = random([-5, 5]);
    ballVy = random([-5, 5]);

    p1X = 40;
    p1Y = height / 2 - paddleHeight / 2;
    p2X = width - p1X - paddleWidth;
    p2Y = height / 2 - paddleHeight / 2;
  }
}
