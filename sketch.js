
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
base=new Roof(400,200,200,20);
bob1=new Ball(320,400,20,20);
bob2=new Ball(360,400,20,20);
bob3=new Ball(400,400,20,20);
bob4=new Ball(440,400,20,20);
bob5=new Ball(480,400,20,20);
rope1=new Rope(bob1.body,base.body,-bobDiameter*2,0);
	engine = Engine.create();
	world = engine.world;



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
 base.display();
  drawSprites();
 
}

