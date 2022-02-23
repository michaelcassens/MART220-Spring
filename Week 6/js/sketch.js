var img;
var names = [];
var names2 = [];
var myImage;
var i = 0, k = 0;
var imagesToDisplay = [];
var imagesToDisplay2 = [];
var staticImages = [];
var imageClassObject;
function preload()
{
	// read in the file
	names = loadStrings("./assets/redhatidle.txt");
	names2 = loadStrings("./assets/redhatrun.txt");

}

function setup()
{
	createCanvas(displayWidth, displayHeight);
	
	img = loadImage("./assets/color.jpeg");
	imageClassObject = new imageclass(img, 400,100, 335, 235);
	staticImages[0] = imageClassObject;
	img = loadImage("./assets/outus.jpeg");
	imageClassObject = new imageclass(img, 100,400, 335, 235);
	staticImages[1] = imageClassObject;
	

	// go through the file names -- idle
	for(var k = 0;k < names.length; k++)
	{
		// load the image
		img = loadImage("./assets/redhat/" + names[k]);
		// create an object from our image class
		imageClassObject = new imageclass(img, 100,100, 335, 235);
		// add each object to the array
		imagesToDisplay[k] = imageClassObject;
	}

	// go through the file names -- run
	for(var k = 0;k < names2.length; k++)
	{
		// load the image
		img = loadImage("./assets/redhat/" + names2[k]);
		// create an object from our image class
		imageClassObject = new imageclass(img, 300,300, 335, 235);
		// add each object to the array
		imagesToDisplay2[k] = imageClassObject;
	}



	setInterval(changeAnimation, 500);
	setInterval(changeAnimation2, 10);
}

function draw(){
	background(240);

	imagesToDisplay[i].draw(); // idle array
	imagesToDisplay2[k].draw();

	for(var m = 0; m < staticImages.length; m++)
	{
		staticImages[m].draw();
	}

	// display the image on the screen - iterate over the 
	// images to display
	//image(imagesToDisplay[i].getImage(),
	//imagesToDisplay[i].getX(), 
	//imagesToDisplay[i].getY(), 
	//imagesToDisplay[i].getW(),
	//imagesToDisplay[i].getH());	

	//image(imagesToDisplay2[k].getImage(),
	//imagesToDisplay2[k].getX(), 
	//imagesToDisplay2[k].getY(), 
	//imagesToDisplay2[k].getW(),
	//imagesToDisplay2[k].getH());	
}
