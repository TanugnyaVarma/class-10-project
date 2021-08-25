var seaImg;
var sea;
var ship,shipImg, edge;

function preload(){
  seaImg = loadImage("sea.png");
  shipImg = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){

  createCanvas(400,400);
  sea=createSprite(400,200);
  sea.addImage(seaImg);
  sea.scale = 0.3;

  ship=createSprite(200,200);
  ship.addAnimation("shipmovement",shipImg);
  ship.scale = 0.25;

  
  edge=createEdgeSprites();
}

function draw() {
  background("blue");
  sea.velocityX = -0.5;
  if(sea.x < 0){
    sea.x = sea.width /8;
  }
  //ship.collide(sea);



 drawSprites();
}