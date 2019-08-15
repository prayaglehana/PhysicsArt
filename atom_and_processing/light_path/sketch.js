var i_c=radian_of(30);
var theta =0;

//theta is in radian
var dtheta=0.05;
var photon;
var U_air=1;
var r;

function setup(){
	console.log(i_c);


	createCanvas(700,600);
	background(200);
	translate(350,400);


	photon=new p5.Vector(200,0);

	fill(61,200);
	arc(0,0, 700, 700, PI, TWO_PI, CHORD)

	noStroke();
	fill(200);
	arc(0,0, 250, 250, PI, TWO_PI, CHORD);

	draw_line(photon.x,photon.y,PI/2.0-i_c);



}
function draw(){

	translate(350,400);

//	draw_background();
	//draw_line(10,30,radian_of(90+30));

	draw_radius_at_theta(0,0,theta);

draw_normal_at_theta(photon.x,-photon.y,theta);



if(theta==0)
	{console.log("i_c"+i_c);
		r=asin(U_air*sin(i_c)/U(theta));
	console.log("r"+r);}
else {
	r=asin(U(theta)*sin(r+dtheta)/U(theta+dtheta));

}


update_photon_position();


show_photon();

theta+=dtheta;

}

function draw_background(){
	background(200);
	//translate(350,400);


	fill(61,200);
	arc(0,0, 700, 700, PI, TWO_PI, CHORD)

	noStroke();
	fill(200);
	arc(0,0, 250, 250, PI, TWO_PI, CHORD)

}

function radian_of(a){
	return 3.14159*a/(180);
}


function draw_line(x1,y1,theta){
	stroke(0,255,0);


y1=-y1;


	var y_co_1=-tan(theta)*(-300-x1)+y1;
	//var y_co_2=-tan(m)*(-300-x1)+y1;
console.log(y_co_1);
	line(x1,y1,-300,y_co_1);
//	line(x1,y1,-300,-y_co_2);
}

function draw_radius_at_theta(x1,y1,theta){
	stroke(255,0,0,50);

	//var y_co_1=tan(theta)*(100*cos(theta)-x1)+y1;


	line(x1,y1,600*cos(theta),-600*sin(theta));

}
function draw_normal_at_theta(x1,y1,theta){
	y1=-y1;

	stroke(255,0,0,50);
	m=1/tan(theta);
	var y_co_1=m*(600-x1)+y1;
	var y_co_2=m*(-600-x1)+y1;


	//var y_co_1=tan(theta)*(100*cos(theta)-x1)+y1;
	line(x1,y1,600,y_co_1);
	line(x1,y1,-600,y_co_2);

}
function U(theta){
	if(theta==0)return -1.5;
	// else if(theta<=3.14/2.0) {
	//
	// 		return theta/5;
	//
	// }
	// else{
	// 				return theta*100;
	// }
return -theta^2;

}

function update_photon_position(){//photon.y=-photon.y;
	photon.x=((photon.x)*cot(r-theta)+photon.y)/(cot(r-theta)-tan(theta+dtheta));
	photon.y=(cot(r-theta)*photon.x+photon.y)/(1-cot(r-theta)*cot(theta+dtheta));
}

function show_photon(){
console.log("X"+photon.x+"Y"+photon.y);
	stroke(3);
	fill(0,255,0);
	ellipse(photon.x,photon.y,2,2);
}
function cot(theta){
	return 1/tan(theta);
}
