var rect1, rect2

function setup() {
  createCanvas(800,400);
  rect2=createSprite(200, 200, 50, 50);
  rect1=createSprite(200, 400, 50, 50);
  
  rect1.shapeColor="blue";
  rect2.shapeColor="red"

  rect1.velocityY=-5
  rect2.velocityY=5
}



function draw() {
  background(255,255,255);  
  drawSprites();
console.log(rect2.x-rect1.x)
console.log(rect1.x-rect2.x)

if(rect2.x-rect1.x<=rect2.width/2+rect1.width/2&&
    rect1.x-rect2.x<=rect1.width/2+rect2.width/2){
    rect1.velocityX=rect1.velocityX*-1
    rect2.velocityX=rect2.velocityX*-1
  }

  if(rect2.y-rect1.y<=rect2.height/2+rect1.height/2&&
    rect1.y-rect2.y<=rect1.height/2+rect2.height/2){
    rect1.velocityY=rect1.velocityY*-1;
    rect2.velocityY=rect2.velocityY*-1;
  }
}