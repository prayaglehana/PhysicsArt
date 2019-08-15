var n=0;
var c=5.5;
var angle=137.5;
//var	angle=137.3;
// var	angle=137.6;
//var angle=130.3;


function setup() {
	createCanvas(800,800);
	angleMode(DEGREES);
	colorMode(HSB);
	noStroke();
		background(2);

}

function draw() {
var a=n*angle;

// if(n%10==0)
// 		angle+=0.5;
	var r=c*sqrt(n);

	var x=r*cos(a)+width/2;
	var y=r*sin(a)+height/2;
	//fill(map(r,0,sqrt(width/2,height/2),255,250),255,0,200);
	fill((a-r)%255,255,255,210);
	//fill((r)%256,255,255);

	ellipse(x,y,8,8);
++n;



}
