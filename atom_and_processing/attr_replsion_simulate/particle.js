function Particle(x,y)
{
    this.pos=createVector(x,y);
    this.prev=createVector(x,y);

    this.vel=createVector(0,0);
    //this.vel=p5.Vector.random2D();

                  //
    //this.vel.setMag(random(2,5));
    this.acc=createVector();


        this.update=function(){
                this.pos.add(this.vel);
                this.vel.add(this.acc);
                this.acc.mult(0);
          //this.vel.limit(10);
        }

        this.show=function(){

    			stroke(255,50);
    			strokeWeight(2);

          line(this.pos.x,this.pos.y,this.prev.x,this.prev.y);
        //  point(this.pos.x,this.pos.y);
          this.prev.x=this.pos.x;
          this.prev.y=this.pos.y;
        }


        this.attractedTo=function(target){



                  var force=p5.Vector.sub(target.pos,this.pos);

                   var dsquared=force.magSq();
                   dsquared=constrain(dsquared,100,500);
                   var G=50;
                   var strength=G/dsquared;

                   force.setMag(strength);
                   this.acc.add(force);
          }

  }
