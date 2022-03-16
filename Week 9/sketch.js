let img;
let pg;
var x = 50;
var y = -100;
var z = 150;
var speed = -1;
var locationX = -100;
var locationY = -100;
//var degrees = 1;
//var translate = 1;
var duh = 1;
var toruses = [];
function preload(){
  img = loadImage("taco.png");
 // pg = createGraphics(156,156);
}
function setup(){
  createCanvas(500,500,WEBGL);
  for(let i = 0; i < 5; i++)
{
    let myT = new myTorus(50, 15, 24, 24, locationX, locationY);
    toruses.push(myT);
    locationX += 50;
    locationY += 50;
}
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
//ambientLight(200);
//ambientMaterial(70, 130, 230);
//pointLight(255, 255, 255, x, y, 50);
//specularMaterial(150);
//shininess(50);

/*
push();
translate(x,y,z);
rotateX(frameCount * 0.01);
rotateY(frameCount * 0.01);
box(50, 50, 50);
pop();
*/
//frameRate(10);
for(let i = 0; i < toruses.length; i++)
{
  push();
  toruses[i].translateTorus();
  //translate(locationX,locationY);
  //rotateX(frameCount * 0.01);
  //rotateY(frameCount * 0.01);
  toruses[i].rotateTorus(frameCount * .01);
  //torus(50, 15, 24, 24);
  toruses[i].show();
  pop();
  //locationX +=50;
  //locationY +=50;
  
}

square(100,100,40);






}