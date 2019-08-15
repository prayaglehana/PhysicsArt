var fireworks=[];
var gravity;



function setup() {
	createCanvas(700,700);
		background(51);
		colorMode(HSB);
	gravity=createVector(0,0.2);
	//fireworks.push(new Firework());
	stroke(255);
	strokeWeight(6);


}

function draw() {
	colorMode(RGB);
	background(0,0,0,40);
	if(random(1,100)<=10)
	fireworks.push(new Firework());

	for(var i=fireworks.length-1;i>=0;--i)
	{
		fireworks[i].update();
		fireworks[i].show();
		if(fireworks[i].done())
		fireworks.splice(i,1);


	}



}
