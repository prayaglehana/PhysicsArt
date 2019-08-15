var i_c=radian_of(24);
var angle_of_hit=radian_of(1);
var theta=angle_of_hit;
var dir=1;
var inner_r=120;
var outer_r=250;
var count=0;
var dradius=2;

var photon;
var U_air=2;
var e=0;

function Photon(radius,theta,dir){
	this.radius=radius;
	this.theta=theta;
	this.dir=dir;

	this.show=function(){
		push();
		noStroke();
		fill(255,255,0,255);
		ellipse(this.x(),-this.y(),4,4);
		pop();
	}
	this.x=function(){
		return this.radius*cos(this.theta);
	}
	this.y=function(){
		return this.radius*sin(this.theta);
	}

	this.update=function(){
																		if(this.dir==1){
																			var new_i=asin((this.radius)*sin(e)/(this.radius-dradius));
																				if(new_i)
																				{this.radius=this.radius-dradius;
																			this.theta=new_i-e+this.theta;

																			e=new_i;}
																			else//IF RAY DOES NOT INTERSECT CIRCLE
																					{this.theta=3.14159-2*e+this.theta;
																						this.dir=-1*this.dir;}
																		}
																		else{
																			var new_i=asin((this.radius)*sin(e)/(this.radius+dradius));
																				this.radius=this.radius+dradius;
																				this.theta=e-new_i+this.theta;
																				e=new_i;

																		}
															}

}

function setup() {


		createCanvas(600,600);
		background(200);
		translate(width/2,height/2);
		draw_background();


		photon=new Photon(outer_r,theta,1);


		photon.show();

		draw_normal_at_theta(photon.x(),photon.y(),photon.theta);
		draw_radius_at_theta(0,0,photon.theta);

		if(U(photon.radius)>=U_air)//REFRACTION
											{
												e=asin(U_air*sin(i_c)/U(photon.radius));

												photon.dir=1*photon.dir;
										}
			else
				{
							  	var critical_angle=asin(U(photon.radius)/U_air);
									if(i_c>critical_angle)//REFLECTION
													{
														e=i_c;
														photon.dir=-1*photon.dir;
													}
												else//REFRACTION
													{
														e=asin(U_air*sin(i_c)/U(photon.radius));
														photon.dir=1*photon.dir;
												}
		}



		photon.update();
		draw_normal_at_theta(photon.x(),photon.y(),photon.theta);
		draw_radius_at_theta(0,0,photon.theta);
		draw_circle(photon.radius);
}

function draw() {

 	translate(width/2,height/2);

	 photon.show();



																	 if(U(photon.radius-photon.dir*dradius)>=U(photon.radius))//REFRACTION
																									{
																										e=asin(U(photon.radius)*sin(e)/U(photon.radius-photon.dir*dradius));

																										photon.dir=1*photon.dir;
																								}
																		else
																			{
																								var critical_angle=asin(U(photon.radius-photon.dir*dradius)/U(photon.radius));
																								if(e>critical_angle)//REFLECTION
																												{
																													e=e;
																													photon.dir=-1*photon.dir;
																												}
																											else//REFRACTION
																												{
																													e=asin(U(photon.radius)*sin(e)/U(photon.radius-photon.dir*dradius));
																													photon.dir=1*photon.dir;
																											}
																				 }


	photon.update();
		//draw_normal_at_theta(photon.x(),photon.y(),photon.theta);
		//draw_radius_at_theta(0,0,photon.theta);
		//draw_circle(photon.radius);


	// ++count;
	// if(count==1)
	// 	noLoop();


}


function U(radius){

if(radius>outer_r)
	{return 0.4;}

else if(radius>inner_r) {
	return map(radius*radius,inner_r*inner_r,outer_r*outer_r,0.4,1.2);
		//return sqrt((117.367)*(117.367)+radius*radius)/radius;

}
else{return 0.1;

//return sqrt((117.367)*(117.367)+radius*radius)/radius;
}

}
function draw_circle(radius){
	push();
	noFill();
		stroke(255,0,0,40);
		ellipse(0,0,2*radius,2*radius);
		pop();
}


function draw_line(x1,y1,theta){
	push();
	stroke(0,0,255);


y1=-y1;


	var y_co_1=-tan(theta)*(-600-x1)+y1;
	var y_co_2=-tan(theta)*(600-x1)+y1;
	line(x1,y1,-600,y_co_1);
	strokeWeight(3);
	stroke(255,255,0,255);
  line(x1,y1,600,y_co_2);

	pop();


}


function draw_background(){

	push()
	background(200);
	stroke(0);


	fill(61,100);
	ellipse(0,0,2*outer_r,2*outer_r);


	fill(200);
	ellipse(0,0,2*inner_r,2*inner_r);

	line(0,0,width,0);
	line(0,0,-width,0);

	line(0,0,0,-height);
	line(0,0,0,height);

	draw_line(outer_r*cos(angle_of_hit),outer_r*sin(angle_of_hit),theta-i_c);

	pop();


}

function draw_radius_at_theta(x1,y1,theta){
	push();
	stroke(255,0,0,30);

	//var y_co_1=tan(theta)*(100*cos(theta)-x1)+y1;


	line(x1,y1,600*cos(theta),-600*sin(theta));
	pop();

}

function draw_normal_at_theta(x1,y1,theta){
	y1=-y1;

	push();
	stroke(255,0,0,30);
	m=1/tan(theta);
	var y_co_1=m*(600-x1)+y1;
	var y_co_2=m*(-600-x1)+y1;


	//var y_co_1=tan(theta)*(100*cos(theta)-x1)+y1;
	line(x1,y1,600,y_co_1);
	line(x1,y1,-600,y_co_2);

	pop();

}
function sinh(x){
	return map((exp(x)-exp(-x))/2,1,3,0,1000);
}
function cot(theta){
	return 1/tan(theta);
}

function radian_of(theta){
	return 3.1415926*theta/180;
}
