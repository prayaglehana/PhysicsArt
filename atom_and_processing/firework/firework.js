function Firework(){


  this.exploded=false;
    this.hu=random(255);
  this.firework=new particle(random(width),height,this.hu,this.exploded);
  this.exploded_particles=[];



this.update=function(){
  if(!this.exploded)
      {this.firework.applyForce(gravity);
	         this.firework.update();

                if(this.firework.vel.y>=0)
                  {this.exploded=true;
                    this.explode();
                }

          }
          else {for(var i=this.exploded_particles.length-1;i>=0;--i)
                  {var v=createVector(0,0.06);
                    this.exploded_particles[i].applyForce(v);
                  this.exploded_particles[i].update();
                  if(this.exploded_particles[i].done())
                    this.exploded_particles.splice(i,1);
                }
          }


          }
this.explode=function()
{ var sel=false;
    if(random(100)<=20)
        sel=true;

  for(var i=0;i<200;i++){if(sel)
                                {if(random(100)<=10)
                                  this.hu=random(255);}
              var p=new particle(this.firework.pos.x,this.firework.pos.y,this.hu,this.exploded);

                this.exploded_particles.push(p);
            }


}

  this.show=function(){
    if(!this.exploded)
    this.firework.show();
else
      {for(var i=0;i<this.exploded_particles.length;++i)
            this.exploded_particles[i].show();}

  }
  this.done=function()
  {if(this.exploded&&this.exploded_particles.length==0)
    return true;
    else
     return false;

  }

}
