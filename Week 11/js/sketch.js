let myModel;
let myTexture;
var rotateSpeed = .01;
var spiderX = 10;
var spiderY = 10;

var spiderX2 = 200;
var spiderY2 = 200;

function preload()
{
    myModel = loadModel("./assets/spider.obj");
    myTexture = loadImage("./assets/grass.jpg");
}
// this function is called only once
function setup()
{
    createCanvas(1080,768, WEBGL);
}
/* this function is called continuously
    while the sketch is open in the browser
*/
function draw()
{
    background(20);
push();
    translate(spiderX,spiderY,-500);
    scale(2); // Scaled to make model fit into canvas
    rotateX(frameCount * rotateSpeed);
    rotateY(frameCount * rotateSpeed);
    normalMaterial(); // For effect
    smooth();
    noStroke();
    texture(myTexture);
    // this displays the model using the "model" function
    model(myModel,24);
pop();
push();
    translate(spiderX2,spiderY2,-500);
    scale(2); // Scaled to make model fit into canvas
    rotateX(frameCount * rotateSpeed);
    rotateY(frameCount * rotateSpeed);
    normalMaterial(); // For effect
    smooth();
    noStroke();
    texture(myTexture);
    // this displays the model using the "model" function
    model(myModel,24);
   pop(); 
}

function mousePressed()
{
    rotateSpeed += .5;
    console.log(rotateSpeed);
}

function mouseReleased()
{
    rotateSpeed -= .5;
}

function mouseDragged()
{
    spiderX = mouseX-width/2;
    spiderY = mouseY-height/2;
    console.log(spiderX);
}


