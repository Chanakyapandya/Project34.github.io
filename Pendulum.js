class Pendulum {

    constructor(x,y){
    
    var options = {
    
    restitution : 1,
    friction : 0,
    frictionAir : 0.0,
    inertia : Infinity,
    slop: 1
    
    
    }
    
    this.body = Bodies.rectangle(x,y,40,40,options)
    World.add(world,this.body)
    
    
    
    
    }
    
    display(){
    
    var pos = this.body.position;
    var angle = this.body.angle;
    
    push()
    translate(pos.x,pos.y);
    rotate(angle);
 stroke("white");
    strokeWeight(3)
    //noStroke();
    fill("black")
  
    ellipse(0,0,60,60);
    
    pop();
    
    
    
    
    
    }
    
    }