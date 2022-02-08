var circleX = [];
var circleY = [];
var circleD = [];
var circleR = [];
var circleG = [];
var circleB = [];
var timerValue = 60;
var switchDirection = 1;

function windowResized() {
    resizeCanvas(windowWidth - 20, windowHeight - 20);
}

function setup() {
    createCanvas(windowWidth - 20, windowHeight - 20);

    for (var i = 0; i < 10; i++) {
        circleR[i] = random(255);
        circleG[i] = random(255);
        circleB[i] = random(255);
       
        circleX[i] = random(windowWidth);
        circleY[i] = random(windowHeight);
        circleD[i] = random(50);

           }
    setInterval(timeIt, 1000);
}


function draw() {

    background(120);
    textSize(35);
    text("Time remaining: " + timerValue, 100, 100);
    drawCircles();

}

function timeIt() {
    if (timerValue > 0) {
        moveCircles();
        timerValue--;
    } else {
        switchDirection *= -1;
        timerValue = 10;
    }
}

function drawCircles() {
    for (var i = 0; i < circleR.length; i++) {
        
        createCircle(circleR[i], circleG[i], circleB[i],
            circleX[i], circleY[i], circleD[i]);
    }
}

function moveCircles() {
    var myDirection = floor(random(4));
    
    for (var i = 0; i < circleR.length; i++) {
        switch (myDirection) {
            case 0:
                if (switchDirection == 1) {
                    circleX[i] += random(30) + 1;
                    circleY[i] += random(60) + 1;

                } else {
                    circleX[i] -= random(30) + 1;
                    circleY[i] -= random(60) + 1;

                }
                break;
            case 1:
                if (switchDirection == 1) {
                    circleX[i] -= random(30) + 1;
                    circleY[i] -= random(60) + 1;

                } else {
                    circleX[i] += random(30) + 1;
                    circleY[i] += random(60) + 1;

                }
                break;
            case 2:
                if (switchDirection == 1) {
                    circleX[i] += random(30) + 1;
                    circleY[i] -= random(60) + 1;

                } else {
                    circleX[i] -= random(30) + 1;
                    circleY[i] += random(60) + 1;

                }
                break;
            case 3:
                if (switchDirection == 1) {
                    circleX[i] -= random(30) + 1;
                    circleY[i] += random(60) + 1;

                } else {
                    circleX[i] += random(30) + 1;
                    circleY[i] -= random(60) + 1;

                }
                break;
        }


    }
}

function mouseMoved() {
    mX = mouseX;
    mY = mouseY;
}