
var  car,wall;
var  speed,weight;

function setup() {
  createCanvas(400,400);

  car1 = createSprite(100, 50, 15, 10);
  car2 = createSprite(100, 150, 15, 10);
  car3 = createSprite(100, 250, 15, 10);
  car4 = createSprite(100, 350, 15, 10);

  car1.shapeColor=("white");
  car2.shapeColor=("white");
  car3.shapeColor=("white");
  car4.shapeColor=("white");

  wall1 = createSprite(350, 50, 20, 50);
  wall2 = createSprite(350, 150, 20, 50);
  wall3 = createSprite(350, 250, 20, 50);
  wall4 = createSprite(350, 350, 20, 50);

  wall1.shapeColor=(80,80,80);
  wall2.shapeColor=(80,80,80);
  wall3.shapeColor=(80,80,80);
  wall4.shapeColor=(80,80,80);

  speed = random(10,20)
  weight = random(400,1500)


  boundary2 = createSprite(200, 200, 400, 10);
  boundary3= createSprite(200, 300, 400, 10);
  boundary4 = createSprite(200, 100, 400, 10);

boundary2.shapeColor=("white");
boundary3.shapeColor=("white");
boundary4.shapeColor=("white");


}

function draw() {
  background("black");  
  drawSprites();

 car1.velocityX = speed;
 car2.velocityX = speed;
 car3.velocityX = speed;
 car4.velocityX = speed;






if(wall.x - car1.x < (car1.width+wall.width)/2)
{                 
car1.velocityX=0
var deformation=0.5*weight*speed*speed/22509

if(deformation>180)
{
  car1.shapeColor=(255,0,0)
}

if(deformation<180 && deformation>100)
{
car1.shapeColor=(230,230,0)
}

if(deformation<100)
{
car1.shapeColor=(0,255,0)
}
}






















}