var headX = 250;
var headY = 100;
var headDirection = 1;

var bodyX = 200;
var bodyY = 185;
var bodyDirection = 3;

var size = 22;
var count = 0;
var sizeDirection = 2;


var headColor;
var bodyColor;

function setup() {
    createCanvas(500, 600);
   
    headColor = color(random(255), random(255), random(255));
    bodyColor = color(random(255), random(255), random(255));
}

function draw() {
    background(120, 45, 78);
    textSize(size);
    size += sizeDirection;
    count++;
    if (count > 5) {
        sizeDirection *= -1;
        count = 0;
    }
    text("Screamer", 10, 80);

   
    fill(headColor);
    circle(headX, headY, 175);
    headX += headDirection;
    if (headX >= 418 || headX <= 82) {
        headDirection *= -1;
        
        headColor = color(random(255), random(255), random(255));
    }

    
    fill(bodyColor);
    rect(200, bodyY, 100, 150);
    bodyY += bodyDirection;
    if (bodyY <= 0 || bodyY >= 450) {
        bodyDirection *= -1;
        
        bodyColor = color(random(255), random(255), random(255));
    }

    
    strokeWeight(10);
    fill(150, 79, 80);
    point(200, 75);
    point(285, 75);

    point(245, 100);

    ellipse(245, 135, 30, 45);

    line(145, 95, 175, 45);
    line(325, 45, 357, 90);

    fill(10, 24, 120);
    rect(200, 185, 100, 50);

    fill(175);
    triangle(220, 320, 250, 220, 280, 320);

    fill(10, 25, 120);
    rect(300, 195, 50, 10);

    rect(150, 195, 50, 10);

    rect(200, 335, 10, 50);

    rect(290, 335, 10, 50);

    fill(175);
    textSize(22);
    text("Jared Hoffman", 270, 500);
}