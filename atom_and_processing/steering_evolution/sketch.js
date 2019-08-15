

var vehicles=[];

var food=[];
var poison=[];
var maxPopulation=20;
var debug;



function setup() {//frameRate(10);
	createCanvas(700,600);

for(var i=0;i<maxPopulation;++i){
	vehicles[i]=new Vehicle();

}
	for(var i=0;i<50;i++){
		var x=random(width);
		var y=random(height);
		food.push(createVector(x,y));
	}
	for(var i=0;i<40;i++){
		var x=random(width);
		var y=random(height);
		poison.push(createVector(x,y));
	}
	debug=createCheckbox();
}

function draw() {
		background(51);

		if(random(1)<0.02)
						{		var x=random(width);
								var y=random(height);
								poison.push(createVector(x,y));}
if(random(1)<0.4){
	var x=random(width);
	var y=random(height);
	food.push(createVector(x,y));
}





										for(var i=0;i<food.length;++i){
																						fill(0,255,0);
																						noStroke();
																						ellipse(food[i].x,food[i].y,8,8);

										}
										for(var i=0;i<poison.length;++i){
																						fill(255,0,0);
																						noStroke();
																						ellipse(poison[i].x,poison[i].y,8,8);

										}
										var tempVehicle;
for(var i=vehicles.length-1;i>=0;--i)
		{tempVehicle=vehicles[0];
			vehicles[i].behaviors();
			vehicles[i].checkCollission()
		vehicles[i].update();
		vehicles[i].show();

		var newVehicle=vehicles[i].clone();
		if(newVehicle!=null&vehicles.length<=maxPopulation)
						vehicles.push(newVehicle);

	if(vehicles[i].dead())
			vehicles.splice(i,1);




		}
		if(vehicles.length==0)
						{tempVehicle.health=1;
							tempVehicle.pos=new p5.Vector(random(width),random(height));
							vehicles.push(tempVehicle);}


}


function Vehicle(dna){
	this.nutritionFood=0.2;
	this.nutritionPoison=0.3;
  this.pos=new p5.Vector(random(width),random(height));
  this.acc=new p5.Vector(0,0);
  this.vel=new p5.Vector(0,0);
	this.health=1;

  this.r=6;
  this.maxSpeed=4;
  this.maxForce=0.4;
	this.mr=0.08;
	this.dna=[];
if(dna==undefined)
	{
	var temp=new p5.Vector(random(-5,5),random(-5,5));
	this.dna[0]=temp.x;//food weight
	this.dna[1]=temp.y;//poison weight

temp=new p5.Vector(random(50,150),random(50,150));
	this.dna[2]=temp.x;//food perception
	this.dna[3]=temp.y;//poison perception
}
else{
	this.dna[0]=dna[0];
	if(random(1)<this.mr)
			{this.dna[0]+=random(-0.5,0.5);}
	this.dna[1]=dna[1];
					if(random(1)<this.mr){
								this.dna[1]+=random(-0.5,0.5);
					}

	this.dna[2]=dna[2];
	if(random(1)<this.mr){
					this.dna[2]+=random(-20,20);
	}

	this.dna[3]=dna[3];
	if(random(1)<this.mr){
						this.dna[3]+=random(-20,20);
	}
}


  this.update=function(){
		this.health-=0.013;
																    this.vel.add(this.acc);

																    this.vel.limit(this.maxSpeed);
																    this.pos.add(this.vel);

																    this.acc.mult(0);

									  }

  this.applyForce=function(force){
														    					this.acc.add(force);


														  }
	this.clone=function(){
		if(random(1)<0.004&&this.health>0.3)
		return new Vehicle(this.dna);
		else return null;
	}


	this.behaviors=function(){

											var foodSteer=this.eatFood();
											var poisonSteer=this.avoidPoison();

											if(foodSteer!=null&&poisonSteer!=null)

											{foodSteer.mult(this.dna[0]);
											poisonSteer.mult(this.dna[1]);

											this.applyForce(foodSteer);
											this.applyForce(poisonSteer);}
							}

				this.dead=function(){
					if(this.health<0)
								{
									return true;}
					else{
						return false;}
				}




	this.avoidPoison=function(){
																	var record=Infinity;
															    var closestIndex=-1;

								    	for(var i=poison.length-1;i>=0;--i){

																		   var d=this.pos.dist(poison[i]);



																		    //  var d=dist(this.pos.x,this.pos.y,food[i].x,food[i].y);
																 if(d<record&&d<this.dna[3]){
																		        record=d;
																		        closestIndex=i;
																		      }
								    					}


							if(closestIndex==-1)
																		return null;

									else
								    			return  this.seek(poison[closestIndex],false);


	}


  this.eatFood=function(){
									    var record=Infinity;
									    var closestIndex=-1;
									    for(var i=food.length-1;i>=0;--i){
									     var d=this.pos.dist(food[i]);


									      if(d<record&&d<this.dna[2]){
									        record=d;
									        closestIndex=i;
									      }
									    }



								if(closestIndex==-1)
												return null;
									  else
										return  this.seek(food[closestIndex],true);


  }



	this.checkCollission=function(){
		for(var i=poison.length-1;i>=0;--i){
			var d=this.pos.dist(poison[i]);


			if(d<5)
			{poison.splice(i,1);
				this.health-=this.nutritionPoison;
					 	}
		}
		for(var i=food.length-1;i>=0;--i){
					var d=this.pos.dist(food[i]);
			if(d<5)
			{food.splice(i,1);
				this.health+=this.nutritionFood;
						}
		}
	}

  this.seek=function(target,attract){
    var desired=p5.Vector.sub(target,this.pos);
		// if(!attract)
		// 			desired.mult(-1);


  desired.setMag(this.maxSpeed);
     //console.log(desired);
    var steer=p5.Vector.sub(desired,this.vel);

    steer.limit(this.maxForce);

		return steer;

    //this.applyForce(steer);
  }

  this.show=function(){



		var gr=color(0,255,0);
		var rd=color(255,0,0);
		var col = lerpColor(rd,gr,this.health);
    fill(col);

		stroke(col);
		strokeWeight(2);
		ellipse(this.pos.x,this.pos.y,13,10);



		/*dnjndjnsjdsjsndndfjd*/
	// 	push();
	// fill(0);
	// stroke(255);
	// translate(this.pos.x,this.pos.y);
  //
	// var temp=new p5.Vector(10,0);
	// var heading=atan(this.vel.y/this.vel.x);
  //
	// rotate(heading);
	// //left_down,right_down,upper
	// triangle(-this.r,this.r,this.r+20,0,-this.r,-this.r);
	// pop();



		//radius for poisonSteer
		if(debug.checked())
		{noStroke();
		fill(0,255,0,30);
		ellipse(this.pos.x,this.pos.y,this.dna[2]*2,this.dna[2]*2);
noStroke();
		fill(255,0,0,30);
		ellipse(this.pos.x,this.pos.y,this.dna[3]*2,this.dna[3]*2);}


  }
}
