 
var me, me2;
var circle1, circle2, circle3;
var mycircles = [];
function setup(){
	createCanvas(displayWidth, displayHeight);
//	me = new person("round", "red", "green", "small", 66, 150);
//	me2 = new person("round", "brown", "green", "small", 66, 150);
	for(var i = 0; i < 5; i++)
	{
		circle1 = new mycircle(random(10,displayWidth),random(10, displayHeight),random(20,200));
		mycircles[i] = circle1;
	}	

	//circle2 = new mycircle(400,300,100);
	//circle3 = new mycircle(500,400,10);

//	mycircles[0] = circle1;
//	mycircles[1] = circle2;
//	mycircles[2] = circle3;
	

}

function draw(){
	background(240);
	for(var i = 0; i < mycircles.length; i++)
	{
		mycircles[i].drawcircle();
	}
	//mycircles[0].drawcircle();
	//mycircles[1].drawcircle();
//	textSize(100);
 //   text(me.jump(), 100, 100);
	//text(me2.jump(), 100, 200);
}