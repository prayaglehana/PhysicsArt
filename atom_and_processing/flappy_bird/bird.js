function Bird()
{	let bird_image=loadImage('kittens/f_bird_new.png');
	
	this.pos=createVector(width/4,height/2);
	this.vel=createVector();
	this.acc=createVector();
  this.gravity=createVector(0,1);
  this.gravity.setMag(0.34);
  this.space_pressed=false;




  this.show=function(){
    fill(255);
    ellipse(this.pos.x,this.pos.y,20,20);

    image(bird_image,this.pos.x-15,this.pos.y-15,30,30);


  }
  this.applyForce=function(force){
    //force=this.gravity.sub(force);

		this.acc.add(force);
    //this.acc.limit(3);
	}
  this.update=function(){
    if(this.space_pressed||this.pos.y<height-10)
                  {this.applyForce(this.gravity);
                    this.vel.add(this.acc);
          		        this.pos.add(this.vel);
          		          this.acc.mult(0);
                      this.vel.limit(4);
                      this.space_pressed=false;
                    }
            }
          this.up=function(){
                this.space_pressed=true;
                this.applyForce(createVector(0,-7) );
          }

}
