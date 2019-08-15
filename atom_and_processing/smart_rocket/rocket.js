function Rocket(dna){
	this.pos=createVector(width/2,height);
	this.vel=createVector();
	this.acc=createVector();
	this.fitness;
	this.crashed=false;
	this.wall_crashed=false;
	this.completed=false;
	this.d_temp;

if(dna)
			this.dna=dna;
else
					this.dna=new DNA();
	this.applyForce=function(force){

		this.acc.add(force);
	}
this.calcFitness=function(){



var d=dist(this.pos.x,this.pos.y,target.x,target.y);



				this.fitness=map(d,0,max_d,100,1);
				//console.log(" d_final "+this.fitness);
				//this.fitness=map(this.fitness*this.fitness,1,10000,1,100);

				//console.log(" d"+d);

				//	this.fitness=pow(this.fitness,5);



				if(this.crashed)
								//this.fitness=pow(this.fitness,0.9);
								this.fitness/=10;
				else if(this.wall_crashed)
							this.fitness/=4;
				else if(this.completed)
								//this.fitness*=100;
								this.fitness*=10;



							//console.log(d+" "+this.fitness);


						}



	this.update=function(){




			if(!this.crashed&&!this.completed&&!this.wall_crashed){

				this.d_temp=dist(this.pos.x,this.pos.y,target.x,target.y);

					//block_crash
					for(var i=0;i<blocks.length;++i)
						 {if(blocks[i].collide_with(this.pos.x,this.pos.y))
									this.crashed=true;}
									//wall_crash
							if(this.pos.x>width-20||this.pos.x<0||this.pos.y>height||this.pos.y<0)
								this.wall_crashed=true;

							else if(this.d_temp<15)
							{this.completed=true;
							this.pos = target.copy();}

		this.applyForce(this.dna.genes[count]);



		this.vel.add(this.acc);
		this.pos.add(this.vel);
		this.acc.mult(0);
		this.vel.limit(4);}
	}

	this.show=function(is_max_fit){

		push();
		noStroke();
if(!is_max_fit)
		{
			fill(255,150);}
		else
		{
			fill(0,255,0,150);}

		translate(this.pos.x,this.pos.y);
		rotate(this.vel.heading());
		//rectMode(CENTER);
		//rect(0,0,50,10);
		
		ellipse(0,0,50,10);
		pop();
	}
}
