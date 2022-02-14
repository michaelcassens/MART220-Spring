var fish = [];
var fishX = [];
//var fishX = 0;
var fishY = [];
var fishImg;

var tPain = [];
var tPainX = [];
//var tPainX = 0;
var tPainY = [];
var tPainImg;
var timerValue = 5;

/// create a variable
var showImages = true;


/// make a timer

function preload()
{
    fishImg = loadImage("./assets/fish.jpg");
    tPainImg = loadImage("./assets/Thwomp.png");
}

function windowResized() {
    resizeCanvas(windowWidth - 20, windowHeight - 20);
}

function setup() {
    createCanvas(windowWidth - 20, windowHeight - 20);
    for(var i = 0; i < 2; i++)
    {   
        fishX[0] = random(windowWidth-100);
        tPainX[0] = random(windowWidth-100)
        fishX[1] = random(windowWidth-100);
        tPainX[1] = random(windowWidth-100)
    }
    setInterval(timeIt, 1000);
    //tPainX = random(windowWidth-100);
}


function draw() {

   background(120);
    textSize(50);
    text(timerValue, 100,100);   
    if(timerValue > 0 && showImages == true)
    {
            drawImages();
    }
   // else if(timerValue > 0 && showImages == false)
   // {
        // don't show
  //  }

    if(timerValue == 0)
    {
        timerValue = 5;
        if(showImages == true)
        {
            showImages = false;
        }
        else
        {
            showImages = true;
        }
    }


/*
        else if(showImages == false)
        {

        }   
        else
        {
           // showImages = true; 
          // timerValue = 5;
         //  showImages = false;
        }    
       
    }
    else
    {
        //timerValue = 5;
        showImages = true; 

    }
    */

}


function drawImages()
{
    for(var i = 0; i < fishX.length; i++)
    {
        image(fishImg,fishX[i],10); 
        image(tPainImg, tPainX[i], 10); 
    }  
}

function timeIt() {
    if (timerValue > 0) {   
        timerValue--;
    }

   
}

