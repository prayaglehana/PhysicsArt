var k=5;
var slider;
var col;
function setup() {
	createCanvas(800,600);
slider=createSlider(1,10,6,0.1);
colorMode(HSB);
col=random(100,255);
}

function draw() {
	k=slider.value();
	background(0);
translate (width/2,height/2);

beginShape();

strokeWeight(1);
noFill();
	for(var a=0;a<TWO_PI*10;a+=0.01){

							stroke(col,255,255);
					var r=170*sin(k*a);
					var x=r*cos(a);
					var y=r*sin(a);

					vertex(x,y);
	}
	endShape();

}
