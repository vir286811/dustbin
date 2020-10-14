
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var side1,side2,side3;
var paper;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	side1= new Dustbin(1120,350,100,20);
	side2= new Dustbin(1180,180,20,350);
	side3= new Dustbin(1070,320,20,70);
	ground=new Ground(600,360,1200,10);
	paper=new Paper(50,100,70);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  side1.display();
  side2.display();
  side3.display();
  ground.display();
  paper.display();
  keyPresed();
  drawSprites();
 
}
function keyPresed()
{
	if(keyCode===UP_ARROW)
	{
		Matter.Body.applyForce(paper.body, paper.body.position,{x:0.8,y:-0.8});
	}
}



