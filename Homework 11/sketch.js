var characterX = 100;
var characterY = 100;

var w = 87;
var s = 83;
var a = 65;
var d = 68;

var shapeX = 30;
var shapeY = 50;
var shapeXSpeed;
var shapeYSpeed;

var mouseShapeX;
var mouseShapeY;

function setup() {
    createCanvas(500, 600);

    shapeXSpeed = Math.floor(Math.random() * 5) + 1;
    shapeYSpeed = Math.floor(Math.random() * 5) + 1;
}

function draw() {
    background(30, 70, 120);

   
    stroke(0);
    fill(0);
    rect(0, 0, width, 10);
    rect(0, 0, 10, height);
    rect(0, height - 10, width, 10);
    rect(width - 10, 0, 10, height - 50);

    
    textSize(16);
    text("EXIT", width - 45, height - 45);

    
    fill(23, 40, 123);
    circle(characterX, characterY, 25);

    
    if (keyIsDown(w)) {
        characterY -= 10;
    }
    if (keyIsDown(s)) {
        characterY += 10;
    }
    if (keyIsDown(a)) {
        characterX -= 10;
    }
    if (keyIsDown(d)) {
        characterX += 10;
    }

    
    fill(34, 145, 34);
    circle(shapeX, shapeY, 10);

    shapeX += shapeXSpeed;
    shapeY += shapeYSpeed;

    if (shapeX > width) {
        shapeX = 0;
    }
    if (shapeX < 0) {
        shapeX = width;
    }
    if (shapeY > height) {
        shapeY = 0;
    }
    if (shapeY < 0) {
        shapeY = height;
    }

    
    if (characterX > width && characterY > height - 50) {
        fill(250);
        stroke(0);
        textSize(26);
        text("You WIn!", width / 2 - 50, height / 2 - 50);
    }

   
    fill(120, 130, 140);
    circle(mouseShapeX, mouseShapeY, 25);
}

function mouseClicked() {
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}