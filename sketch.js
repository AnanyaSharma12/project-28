const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5;
var world,boy;


function preload(){
	boy = loadImage("sprites/boy.png");
	stone = loadImage("sprites/stone.png");
	tree=loadImage("sprites/tree.png")
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	stone=new stone(100,100,60); 

	mango1=new mango(1100,100,width,height);
	mango2=new mango(1170,130,width,height);
	mango3=new mango(1010,140,width,height);
	mango4=new mango(1000,70,width,height);
	mango5=new mango(1100,70,width,height);
    tree=new tree(1050,580,width,height);
	ground=new ground(width/2,width,20);
		Engine.run(engine);
}

function draw() {

  background(230);
  textSize(25);

  Engine.update(engine)

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
    stoneObj.display();

  groundObject.display();
  detectollision(stoneObj,mango1);
  detectollision(stoneObj,mango2);
  detectollision(stoneObj,mango3);
  detectollision(stoneObj,mango4);
  detectollision(stoneObj,mango5);
 }

function mouseDragged()
{
	Matter.Body.setPosition(stoneObj.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	launcher.fly();
   
}
	   
function keyPressed() {
	if (keyCode === 32) {
		Matter.Body.setPosition(stoneObj.body, {x:mouseX, y:mouseY}) 
	  launcherObject.attach(stoneObj.body);
	  Matter.Body.setPosition(stoneObj.body, {x:mouseX, y:mouseY}) 
	}
  }

  function detectollision(lstone,lmango){
	mangoBodyPosition = lmango.body.position
	stoneBodyPosition = lstone.body.position

	var distance = dist(stoneBodyPosition.x,stoneBodyPostion.y,mangoBodyPostion.x,mangoBodyPosition.y)
	if(distance<=lmango.r+lstone.r)
	{
		Matter.Body.setStatic(lmango.body,false);
	}
	}
  
