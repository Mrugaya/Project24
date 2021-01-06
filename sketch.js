
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var ground;
var trash_chute;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper (100,100);
	ground = new Ground (600,height,1200,20);
	trash_chute = new Trash (1000,320,100,200);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  paper.display();
  ground.display();
 trash_chute.display();
}



