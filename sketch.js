let paddle_x, paddle_y, paddle_width, paddle_height, paddle_dx;
let ball_x, ball_y, ball_diameter, ball_dx, ball_dy;
let block_x, block_y, block_width, block_height, block_dx;
function setup() {
  createCanvas(400, 400);
  background("black");
  paddle_width = 100;
  paddle_x = (width / 2) - (paddle_width / 2);
  paddle_y = height - 25;
  paddle_height = 15;
 
   ball_diameter = 20;
  ball_dx =1;
  ball_dy = 2;
  paddle_dx = 3;
  ball_x = (width / 2) - (ball_diameter / 2);
  ball_y = (height / 2) - (ball_diameter / 2);
  block_x = 10;
  block_y = 10;
  block_width = 50;
  block_height = 50;
 
}
 
function draw () {
  background("black");
 
  if(ball_x + (ball_diameter / 2) > width) {
    ball_dx = -ball_dx;
  }
 
  if(ball_x - (ball_diameter / 2) < 0) {
    ball_dx = -ball_dx;
  }
 
  if(ball_y + (ball_diameter / 2) > height) {
    ball_dy = 0;
    ball_dx = 0;
  }
   if(ball_y - (ball_diameter / 2) < 0) {
    ball_dy = -ball_dy;
  }
 
  if (keyIsDown(LEFT_ARROW)) {
    paddle_x = paddle_x - paddle_dx;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    paddle_x = paddle_x + paddle_dx;
  }
  
  if(((ball_x + (ball_diameter / 2) > block_x) && (ball_x - (ball_diameter / 2) < block_x + block_width)) && ((ball_y +  - (ball_diameter / 2) > block_y) && (ball_y  - (ball_diameter / 2) < block_y + block_height)))
    {
      block_height = 0;
      block_width = 0;
    }


  if((((ball_x) > paddle_x) && ((ball_x ) < (paddle_x + paddle_width))) && (ball_y + ball_diameter/2) > (height - 25 ))
  {
    ball_dy=-ball_dy;
  }
  ball_x = ball_x + ball_dx;
  ball_y = ball_y + ball_dy;
 
  circle(ball_x, ball_y, ball_diameter);
  rect(paddle_x, paddle_y, paddle_width, paddle_height);
  rect(block_x, block_y, block_width, block_height);
  
}