var x = [];
var movement = 10.0;
var initialX = 100;
// global variables
var r;
var g;
var b;
var myImages = [];
var x = 100;

var img;
function preload()
{
    img = loadImage("./assets/fish.jpg");
    myImages[0] = img;
    img = loadImage("./assets/Thwomp.png");
    myImages[1] = img;

}
function setup()
{
    createCanvas(displayWidth-25, displayHeight-140);
   

    // set the x values
    for(var i = 0; i < 500; i++)
    {
        x[i] = initialX;
        initialX += 10;
    }
}

function draw()
{
    background(120);
    
   // translate
   translate(width/2-100, height/2-100);
   r = random(255);
   g = random(255);
   b = random (255);
    fill(r, g, b);
    
    for(var i = 0; i < x.length; i++)
    {
        // rotate
        rotate(PI/movement);
      //  square(x[i], 50,5);

    }
    // print out image array
   // for(var i = 0; i < myImages.length; i++)
   // {
       var number = random(myImages.length);
    console.log(number);
    console.log(floor(number));
        image(myImages[floor(random(myImages.length))], 100, 100);
            
   // }
    
    // make it move
    /*
    if(movement > 0)
    {
        movement -= .01;
    }
    else
    {
        movement = 10.0;
    }
    */   

}

function timeIt()
{

}