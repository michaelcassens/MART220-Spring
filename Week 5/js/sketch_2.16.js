var img;
var x = 0;
var start = 100;
var speed = 1;
function preload()
{
    img = loadImage("./assets/flycat.gif");
}
function setup(){
	createCanvas(displayWidth, displayHeight);
	//rectMode(CENTER);	// now the first two arguments of a rect are its center point, not corner
}
function draw(){
	background(240);

	// move the origin to the pivot point
	
    //push();
	//translate(start + x, height/2-100); 
    // then rotate the grid around the pivot point by a
	// number of degrees equal to the frame count of the sketch
	//rotate(radians(frameCount));
    //imageMode(CENTER);
	image(img,0,0,400,400);
    //pop();
   // if(x < 0 || x > width)
   // {
     //   speed *= -1;
   // }
   // x+=speed;
    //console.log(x);
}