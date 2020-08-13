var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    paper = new Paper(50, 10, 10);

	Engine.run(engine);

	boxPart1 = createSprite(675, 650, 200, 20);
	boxPart1.shapeColor = color(255, 0, 0);
	part1 = new Dustbin(675, 635, 200, 20, {isStatic:true});
	
	boxPart2 = createSprite(575, 610, 20, 100);
	boxPart2.shapeColor = color(255, 0, 0);
	part2 = new Dustbin(575, 610, 20, 100, {isStatic:true});
	
	boxPart3 = createSprite(775, 610, 20, 100);
	boxPart3.shapeColor = color(255, 0, 0);
	part3 = new Dustbin(775, 610, 20, 100,  {isStatic:true});

	paper = new Paper(150, 600);

	ground = new Ground(width/2, 650, width, 10 , {isStatic:true});
  
}

function draw() {
  rectMode(CENTER);
  background(0);
  
  paper.display();
  ground.display();
  drawSprites();
  
}


function keyPressed() {

    if(keyCode === UP_ARROW) {
        push(); 
        Matter.Body.applyForce(paper.body, paper.body.position, {x:125, y:-125})
        pop();
    }
}
