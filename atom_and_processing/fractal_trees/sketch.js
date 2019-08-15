var total=0;
var angle=0;
function setup() {
	createCanvas(400, 400);
	slider=createSlider(0,TWO_PI,PI/4,0.02);
}

function draw() {
	background(51);
	var len=100;
	angle=slider.value();
	stroke(165,42,42);
	translate(200,height);
	branch(100);

}

function branch(len)
{	//stroke(255);

	line(0,0,0,-len);
	translate(0,-len);

	if(len>4)
		  {//stroke(random(0,255),random(255),random(255));
				stroke(0,200,50);

				push();
				rotate(angle);

			branch(len*0.67);
			pop();
			push();

			rotate(-angle);
			branch(len*0.67);
			pop();
		}



}
