function particle(x,y,my_hu,is_exploded)
{
this.pos=createVector(x,y);
this.acc=createVector(0,0);
this.my_hu=my_hu;
this.is_exploded=is_exploded;
this.vel;
this.lifespan=255;
if(!this.is_exploded)
{this.vel=createVector(0,random(-16,-12));
}
else {//this.vel=createVector(random(-11,11),random(-11,11));

        this.vel=p5.Vector.random2D();
        this.vel.mult(random(1,6));
      //  console.log(this.vel.x+" "+this.vel.y);
    }


this.applyForce=function(force){
  this.acc.add(force);
}


this.update=function(){
  if(this.is_exploded)
      {this.vel.mult(0.96);
        this.lifespan-=5;}

  this.vel.add(this.acc);

  this.pos.add(this.vel);
  this.acc.mult(0);

}
this.show=function(){
colorMode(HSB)
  if(this.is_exploded)
        {
          strokeWeight(2);
        stroke(this.my_hu,255,255,this.lifespan);


      }
        else{
              strokeWeight(2);
              stroke(this.my_hu,255,255);
            }
          point(this.pos.x,this.pos.y);
        }

        this.done=function()
        {
          if(this.lifespan<0)
          return true;
          else
          return false;
        }
}
