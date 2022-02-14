var img;
var x = 0;
var start = 100;
var speed = 1;
var cats = [];
var x = 100;
var myClass;   
function preload()
{
    for(var i = 0; i < 5; i++)
    {
        var img = loadImage("./assets/flycat.gif");
        myClass = new imageclass(img, x,0,200,200);
        cats[i] = myClass;
       
        x+=200;
    }
}
function setup(){
	createCanvas(displayWidth, displayHeight);
	
}
function draw(){
	background(240);
    
	for(var i = 0; i < cats.length; i++)
    {
        image(cats[i].getImage(),cats[i].getX(),0, 200, 200);  
    }
	
}