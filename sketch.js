var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	packageSprite=createSprite(width/2, 200, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	

	engine = Engine.create();
	world = engine.world;

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	packageBody = Bodies.circle(width/2 , 200 , 10 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	


	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine)
  background(0);
  groundSprite.x=ground.position.x
  groundSprite.y=ground.position.y
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody, false);
    // Look at the hints in the document and understand how to make the package body fall only on
    
  }
}



