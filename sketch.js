var car,wall;

var speed,weight;

function setup() {
  createCanvas(1600,800);

  speed=random(55,90);
  weight=random(400,1500);

  car=createSprite(100,400, 50, 30);
  car.shapeColor="white";
  

  wall=createSprite(1500,400,60,400);
  wall.shapeColor=(90,90,90);
}

function draw() {
  background(50);

  if(car.isTouching(wall)){
    car.velocityX=0;
    textSize(50);
    fill("white");
    text("Press 'r' to restart",600,400);
    var deformation=0.5 * weight * speed * speed/22509;

    if(deformation>180){
       car.shapeColor=color(300,0,0);
    }
    if(deformation<180 && deformation>100) {
      car.shapeColor=color(230,230,0);
    }
    if(deformation<100){
      car.shapeColor=color(0,255,0);
    }
  }
  
  if(keyDown("space")&& car.x===100){
    car.velocityX=speed;
  }

  if(keyDown("r")){
    car.x=100;
    car.y=400;
    car.shapeColor="white";
    speed=random(55,90);
    weight=random(400,1500);
  }


  drawSprites();
    
  if(car.x===100){
    textSize(50);
    fill("white");
    text("Press 'Space' to start",600,400);
  }
  textSize(40);
  text("Deformation : "+round(deformation),100,100);
  
}