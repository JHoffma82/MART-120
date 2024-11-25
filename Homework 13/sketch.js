var characterX = 100;
var characterY = 100;

var w = 87;
var s = 83;
var a = 65;
var d = 68;

var shapeX = 30;
var shapeY = 50;

var shapeXs = 30;
var shapeYs = 50;

var shapeXs = [];
var shapeYs = [];
var diameters = [];


var shapeXSpeeds = [];
var shapeYSpeeds = [];

var mouseShapeX;
var mouseShapeY;


function setup() {
    createCanvas(500, 600);
    for (var i = 0; i < 50; i++){

    shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeXs[i] = getRandomNumber (500);
    shapeYs[i] = getRandomNumber (600);
    diameters[i] = getRandomNumber (30);
    }
    
    createCharacter(200,350)
}

function draw() {
    background(30, 70, 120);
    stroke(0);
    fill(0);
    createBorders(10)

    
    textSize(16);
    text("EXIT", width - 45, height - 45);

    drawCharacter();
    characterMovement();
    
    fill(23, 40, 123);
    
    for (var i = 0; i < shapeXs.length; i++){
    circle(shapeXs[i], shapeYs[i], diameters[i]);
    shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

    shapeXs[i] += shapeXSpeeds[i];
    shapeYs[i] += shapeYSpeeds[i];

    
    if (shapeXs[i] > width) {
        shapeXs[i] = 0;
    }
    if (shapeXs[i] < 0) {
        shapeXs[i] = width;
    }
    if (shapeYs[i] > height) {
        shapeYs[i] = 0;
    }
    if (shapeYs[i] < 0) {
        shapeYs[i] = height;
    }

}   

    
    if (characterX > width && characterY > width - 50) {
        fill(250);
        stroke(0);
        textSize(26);
        text("You WIn!", width / 2 - 50, height / 2 - 50);
    }

   
    fill(120, 130, 140);
    circle(mouseShapeX, mouseShapeY, 25);
}

function characterMovement()
{
    if(keyIsDown(w))
    {
        characterY -= 10;
    }
    if(keyIsDown(s))
    {
        characterY += 10;
    }
    if(keyIsDown(a))
    {
        characterX -= 10;
        console.log("movement:" + characterX);
    }
    if(keyIsDown(d))
    {
        characterX += 10;
    }
}
function createCharacter(x,y)
{
    characterX = x;
    characterY = y;
  
}
function drawCharacter()
{
    fill(60,70,224)
    circle(characterX,characterY , 25);
}
function createBorders(thickness)
{
    rect(0,0, width, thickness);
    rect(0,0, thickness, height);
    rect(0, height-thickness, width, thickness);
    rect(width-thickness, 0, thickness, height-50);
}

function mouseClicked() {
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}

function getRandomNumber(number) {
    return Math.floor(Math.random() * number) + 10;
}