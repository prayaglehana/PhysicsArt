var g=0.5;
var g_vector=new p5.Vector(0,g);
var r=150;
var ball =new Ball();
var pos=new p5.Vector(250+r*(-0.99),250-r*(-0.0583));
var v=[];
var i=0;

var surface=new Surface();


function setup() {

	createCanvas(500,500);
	frameRate(10);
	background(51);


}

function draw() {
	background(51);
	surface.show();




		//ball.applyG();
		//ball.applyNormal();
		ball.move_tangentially();
		ball.update();
		ball.show();


// showNormal(pos);
showTangent(pos);







}
function Ball(){

this.acc=new p5.Vector();
this.vel=new p5.Vector();



 this.applyG=function(){
          this.acc.add(g_vector);
  }
	 this.applyNormal=function(){
			var n=getNormalAt(pos);
			//console.log(n);


			var n_force=-n.dot(g_vector);
			//var n_force=-g_vector.dot(n);
			//console.log(n_force);
			n.setMag(n_force);
			// push();
			// translate(pos.x,pos.y);
			// stroke(255,0,0);
			// strokeWeight(5);
      //
			// //console.log(n);
			// pop();

			this.acc.add(n);



	 }

	 this.move_tangentially=function(){
		 var t=getTangentAt(pos);
//console.log(t);

		 var t_force=t.dot(g_vector);


		 t.setMag(t_force);
		 // push();
		 // translate(pos.x,pos.y);
		 // stroke(255,0,0);
		 // strokeWeight(3);
		 // line(0,0,t.x*50,t.y*50);
     //
		 //  pop();
			this.acc.mult(0);



		// 	this.vel.setMag(1);




			//this.vel.mult(0);
		 this.acc.add(t);




	 }

  this.update=function(){
//this.vel.limit(5);
//this.acc.limit(1.5);


    this.vel.add(this.acc);

		var t=getTangentAt(pos);
				var v_mag=t.dot(this.vel);
				 //console.log(v_mag);
				t.setMag(v_mag);
				this.vel.x=t.x;
				this.vel.y=t.y;

this.vel.mult(1);


    pos.add(this.vel);

    this.acc.mult(0);
		//console.log(this.acc);



  }

  this.show=function(){
              fill(255);
              ellipse(pos.x,pos.y,10,10);

  }


}


function Surface(){


				this.show=function(){
												var theta =PI;




														push();
															beginShape();
															translate(width/2,width/2);
															stroke(255,90,0);
															noFill();

															//console.log("hello");
									while(theta<=1.5*PI)
											{
													var x=r*cos(theta);
													var y=-r*sin(theta);

													//console.log(x);
													v.push(new createVector(width/2+x,width/2+y));



														vertex(x,y);
														theta+=0.01;

									}
										endShape();

										pop();



				}





}
function showTangent(p){
			push();
			stroke(255,50);
			noFill();
				var m=-(p.x-width/2)/(p.y-width/2);
				var c=p.y-m*p.x;

				line(10,10*m+c,300,300*m+c);
				pop();
}

function showNormal(p){
	push();
	stroke(255);
	noFill();
		var m=-(p.x-width/2)/(p.y-width/2);
		m=-1/m;
		var c=width/2-m*width/2;

		line(10,10*m+c,500,500*m+c);
		pop();




}

function getNormalAt(p){
	var m=-(p.x-width/2)/(p.y-width/2);
	m=-1/m;
	var c=width/2-m*width/2;

	var v=createVector(490,490*m);
	v.setMag(1);
	return v;
}

function getTangentAt(p){
	var y=sqrt(r*r-(p.x-width/2)*(p.x-width/2))+width/2;
	var m=-(p.x-width/2.0)/(y-width/2.0);

	var c=width/2.0-m*width/2.0;

	var v=createVector(490,490*m);
	v.setMag(1);

	return v;
}
