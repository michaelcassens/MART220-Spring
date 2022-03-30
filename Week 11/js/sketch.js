let myModel;
let myTexture;
function preload()
{
    myModel = loadModel("./assets/spider.obj");
    myTexture = loadImage("./assets/fractal.jpg");
}
// this function is called only once
function setup()
{

    createCanvas(800,600, WEBGL);

}
/* this function is called continuously
    while the sketch is open in the browser
*/
function draw()
{
    background(20);
    scale(2); // Scaled to make model fit into canvas
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    normalMaterial(); // For effect
    smooth();
    noStroke();
    texture(myTexture);
    // this displays the model using the "model" function
    model(myModel,24);
    
}