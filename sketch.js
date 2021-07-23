
function preload(){
seaImg = loadImage("sea.png")
shipImg1 = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png")
}

function setup(){
  createCanvas(400,400);
  sea = createSprite (400,200,100,100);
  sea.addImage(seaImg);
  sea.scale =0.3;
  ship = createSprite (130,200,100,30);
  ship.addAnimation("moving",shipImg1);
  ship.scale =0.2;
  ship.x =80;
}

function draw() {
  background("blue");
  sea.velocityX = -3;
  if(sea.x < 0){
    sea.x = 400
  }
  drawSprites()
}