const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;





function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

    ball=new Ball();
	dustbin=new Dustbin();
	
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  background(0);
  rectMode(CENTER)
  Engine.update(engine);

ball.display();
ground.display();
dustbin.display();
  
  drawSprites();
 
}



