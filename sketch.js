var fixedRect, movingRect, obj1;


function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(100, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(800,400,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  obj1 = createSprite(400,800,50,70);

  //movingRect.velocityX = -5;
  //fixedRect.velocityX = +5;
  
}

function draw() {
  background(0,0,0);  
  obj1.x=mouseX;
  obj1.y=mouseY;
 //bounceOff(movingRect,fixedRect)
 
 if(isTouching(movingRect,obj1))
{
movingRect.shapeColor="blue";
obj1.shapeColor="yellow";
}
 if(isTouching(fixedRect,obj1))
{
fixedRect.shapeColor="red";
obj1.shapeColor="orange";

}
  drawSprites();
}

