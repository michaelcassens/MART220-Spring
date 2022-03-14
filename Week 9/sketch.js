let img;
let pg;

//var degrees = 1;
//var translate = 1;
var duh = 1;

function preload(){
  img = loadImage("taco.png");
 // pg = createGraphics(156,156);
}
function setup(){
  createCanvas(500,500,WEBGL);
}
function draw(){
  background(0);
//console.log(duh);
 // rotateX(duh * .01);
 // rotateY(duh * .01);
 // texture(img);
 // box(85);
 // duh++;
 //rotateX(frameCount * 0.01);
 //rotateY(frameCount * 0.01);
 //rotateZ(frameCount * 0.01);
 //cylinder(20, 50,2);
 //rotateX(frameCount * 0.01);
 //rotateY(frameCount * 0.01);
 //torus(30, 15);

normalMaterial();
push();
translate(-100,-100);
rotateX(frameCount * 0.01);
rotateY(frameCount * 0.01);
box(150, 150, 150);
pop();

push();
translate(100,100);
rotateX(frameCount * 0.01);
rotateY(frameCount * 0.01);
torus(50, 15, 24, 24);
pop();






}