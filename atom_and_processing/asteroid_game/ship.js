function Ship(){

  this.pos=createVector(width/2,height/2);
  this.vel=createVector(1,0);
  //this.pos=createVector(width/2,height/2);


  this.r=10;
  this.heading=0;
  this.rotation_incr=5;
  this.set_turn=0;
  this.accelerate=false;


  this.boost=function(){
    if(this.accelerate)
          {push();

              stroke(255);
              translate(this.pos.x,this.pos.y);

              var force=p5.Vector.fromAngle(radians(this.heading));

              line(0,0,force.x*30,force.y*30);

              //force.rotate(-90);
              force.setMag(0.05);
              this.vel.add(force);
          pop();
          }
  }


  this.edges=function(){
        if(this.pos.x>width+this.r){
          this.pos.x=-this.r;
        }
        else if(this.pos.x<-this.r){
          this.pos.x=width+this.r;
        }
        if(this.pos.y>height+this.r){
          this.pos.y=-this.r;
        }
        else if(this.pos.y<-this.r){
          this.pos.y=height+this.r;
        }

  }


  this.render=function(){

    push();
    fill(0);
    stroke(255);
    translate(this.pos.x,this.pos.y);
    angleMode(DEGREES);
    rotate(this.heading);
    //left_down,right_down,upper
    triangle(-this.r,this.r,this.r+20,0,-this.r,-this.r);
    pop();
  }


  this.turn=function(){
              //angle*=PI/180;
              if(this.set_turn!=0)
                      this.heading+=this.rotation_incr*this.set_turn;
  }
  this.update=function(){
    this.boost();

    this.pos.add(this.vel);
    this.vel.mult(0.99);

  }
this.hits=function(asteroid){
  var d=dist(this.pos.x,this.pos.y,asteroid.pos.x,asteroid.pos.y);
        if(d<this.r+asteroid.r){
          return true;
        }
        else {
          return false;
        }
}

}
