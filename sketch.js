
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Mouse = Matter.Mouse;
const MouseConstraint = Matter.MouseConstraint;

//var engine;
//var world;
//var canvas;
var mConstraint;

function preload()
{
	
}

function setup() {
	



  var canvas = createCanvas(windowWidth/1,windowHeight/1);

  engine = Engine.create();
  world = engine.world;
  let canvasmouse = Mouse.create(canvas.elt);
  canvasmouse.pixelRatio = pixelDensity();
  
let options = {

mouse: canvasmouse

}


  mConstraint = MouseConstraint.create(engine,options);
World.add(world,mConstraint);





//create bodies 

pendulum = new Pendulum(300,300);

pendulum2 = new Pendulum(360,300);


pendulum3= new Pendulum(420,300);


pendulum4 = new Pendulum(480,300);


pendulum5 = new Pendulum(540,300);


//ropes
rope1 = new Sling(pendulum.body,{x:300,y:200});
rope2 = new Sling(pendulum2.body,{x:360,y:200});
rope3 = new Sling(pendulum3.body,{x:420,y:200});
rope4 = new Sling(pendulum4.body,{x:480,y:200});
rope5 = new Sling(pendulum5.body,{x:540,y:200});

}

function draw(){
background("black");

Engine.update(engine);


pendulum.display();
pendulum2.display();
pendulum3.display();
pendulum4.display();
pendulum5.display();



rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();


}


function mouseDragged(){

Matter.Body.setPosition(pendulum.body,{x:mouseX,y:mouseY});


}