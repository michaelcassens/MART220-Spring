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

var fishX = 0, fishY = 0;

var img;

// array to hold all the images
var fish = [];
// array to hold all the image X's
var fishXs = [];
// array to hold all the image Y's
var fishYs = [];
// array to hold all the image speed X's
var swimSpeedXs = [];
// array to hold all the image speed Y's
var swimSpeedYs = [];

var fishSize = 50;
function preload() {
  img = loadImage('assets/fish.jpg');
}

function setup() {
    createCanvas(displayWidth, displayHeight);
    speedX = random(1, 10);
    speedY = random(1, 10);
    
    var h = window.displayHeight;
    var w = window.displayWidth;
    // this for loop creates the fish, the x location
    // the y location, and the speeds
    for(var i = 0; i < fishSize; i++)
    {
        fish[i] = img;
        fishXs[i] = fishX;
        fishYs[i] = fishY;
        fishX = random(0,w);
        fishY  = random(0,h);
        swimSpeedXs[i] = random(-10,10);
        swimSpeedYs[i] = random(-10, 10);    
        
    }
    

 /*   for(var i = 0; i < fishSize; i++)
    {
    
    fishXs[i] +=random(1,10);
    fishYs[i] +=random(-10,10);
    }*/

    //console.log(fish[0]);
}


function draw() {
    
    background(120);
    
    // this for loop displays the fish and moves the fish each frame
    for(var i = 0; i < fish.length; i++)
    {
        
        image(fish[i], 
            fishXs[i], fishYs[i]);
            fishXs[i] += swimSpeedXs[i];
            fishYs[i] += swimSpeedYs[i];
    }
   /* for(var i = 0; i < fish.length; i++ )
    {
        
    }*/


    // fish[0];

       // image(img, fishX, fishY);
       // fishX+=10;
       // fishY+=10;
   // }
    //image(img, fishX+100, fishY+100);
    
    
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

    x = x + speedX
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
      // print(r);
    }
}

function mouseMoved() {
    mX = mouseX;
    mY = mouseY;
 }