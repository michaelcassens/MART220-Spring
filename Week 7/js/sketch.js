var redhat, redhat2;
var idle = [];
var run;
var rock;
function preload()
{
	idle = loadStrings("assets/redhatidle.txt");
	run = loadStrings("assets/redhatrun.txt");
	
	// read in the file
	//redhat = loadAnimation(idle[0],idle[1],idle[2],idle[3],idle[4]);
	

}

function setup()
{
	createCanvas(displayWidth, displayHeight);
	redhat = createSprite(100, 250);
	
	//redhat.addAnimation('idle','assets/redhat/' + idle[0],'assets/redhat/' + idle[1],'assets/redhat/' + idle[2],'assets/redhat/' + idle[3],'assets/redhat/' + idle[4],'assets/redhat/' + idle[5],'assets/redhat/' + idle[6],'assets/redhat/' + idle[7],'assets/redhat/' + idle[8]);
	redhat.addAnimation('idle','assets/redhat/' + idle[0],'assets/redhat/' + idle[idle.length-1]);
	redhat.addAnimation('run','assets/redhat/' + run[0],'assets/redhat/' + run[1],'assets/redhat/' + run[2],'assets/redhat/' + run[3],'assets/redhat/' + run[4],'assets/redhat/' + run[5],'assets/redhat/' + run[6],'assets/redhat/' + run[7],'assets/redhat/' + run[8]);
	//redhat = loadAnimation('assets/redhat/' + idle[0],'assets/redhat/' + idle[1],'assets/redhat/' + idle[2],'assets/redhat/' + idle[3],'assets/redhat/' + idle[4],'assets/redhat/' + idle[5],'assets/redhat/' + idle[6],'assets/redhat/' + idle[7],'assets/redhat/' + idle[8]);
	//redhat2 = loadAnimation('assets/redhat/' + run[0],'assets/redhat/' + run[1],'assets/redhat/' + run[2],'assets/redhat/' + run[3],'assets/redhat/' + run[4],'assets/redhat/' + run[5],'assets/redhat/' + run[6],'assets/redhat/' + run[7],'assets/redhat/' + run[8]);
	rock = createSprite(700, 300);
    //compact way to add an image
    rock.addImage(loadImage('assets/color.jpeg'));
}

function draw(){
	background(240);
	if(keyDown('d'))
    {
		redhat.changeAnimation('run')
		redhat.velocity.x += .5;
	}
	else if(keyDown('a'))
    {
		redhat.changeAnimation('run')
		redhat.velocity.x -= .5;
	}
	else
	{
		redhat.changeAnimation('idle');
		redhat.velocity.x = 0;
	}
	
	if(redhat.collide(rock))
	{
		console.log("ouch!");
		//  bounce stop, etc.

	}

	drawSprites();
	//animation(redhat, 300, 150);
	//animation(redhat2, 500, 250);
}
