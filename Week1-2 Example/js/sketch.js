var x = 0;
var y = 100;
var size = 25;
var speedX = 0;
var speedY = 0;
var r=0;
var g=0;
var b=0;
var timer = 0;

var mX = 0;
var mY = 0;

var squareX = 0;
var squareY = 0;

function setup() {
    createCanvas(displayWidth, displayHeight);
    speedX = random(1, 10);
    speedY = random(1, 10);
    
}


function draw() {
    
    background(120);

    // call this every two seconds
    timer++;
    if(timer == 120)
    {
        changeColor();
        timer = 0;
    }
    
    
    fill(r, g, b);
    circle(x, y, size);
    square(squareX, squareY, 20);
    // x = x + 10;
    if (x >= 800 ) {
        // hey at some point I want this to be in just one place
        speedX = random(1, 10);
        speedX = -speedX;
    } 
    else if(x < 0)
    {
        speedX = random(1, 10);
        
    }
    else if (y >= 600 ) {
        // hey at some point I want this to be in just one place
        speedY = random(1, 10);
        speedY = -speedY;
    } 
    else if(y < 0)
    {
        speedY = random(1, 10);
        
    }
    x = x + speedX;
    y = y + speedY;
    /*else if(x <=10) {
        x++; // move to the right
    }
    else if(x > 10 || x < 800)
    {
        x++;
    }*/

    //x = x - 1;

  
    textSize(24);
    
    //text(mY, 450, 400);
    
    doSomethingNow(300, 300, 105);

    moveSquare();

    // print out the mouse coordinates
    text("coordinates: " + mX + ":" + mY, 400, 400);

}

function moveSquare()
{
    if(keyIsPressed)
    {
      if(key == 'a')
      {
          squareX-=5;
      }
  
      else if(key == 'd')
      {
        squareX+=5;
      }
      else if(key == 'w')
      {
        squareY-=5;
      }
      else if(key == 's')
      {
        squareY+=5;
      }
    }
}
function doSomethingNow(x, y, size) {
    fill(100, 200, 20);
    circle(x, y, size);


}
function changeColor()
{
    for(var i = 0;i < 5; i++)
    {
       // r = random(0,255);
       // g = random(0,255);
       // b =random(0,255);
       r+=50;
       g+=50;
       b+=50;
       print(r);
    }
}

function mouseMoved() {
    mX = mouseX;
    mY = mouseY;
 }