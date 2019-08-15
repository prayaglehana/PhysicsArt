var faces=[];
var population=new Population();
var ok;

//var ctracker ;
var positions;
var img;

function setup() {createCanvas(1000,600);

	img=loadImage('kittens/Adah_sharma.jpg');
	loadPixels();
	image(img,0,0);
	// var ctracker = new clm.tracker();

	// ctracker.init();
	// ctracker.start(img);
  //
  //
  //
	// var positions = ctracker.getCurrentPosition();





	population.define_pop();
	population.applyRandom();
	// ok=createCheckbox();
	// console.log(ok.checked());
	background(200);
}

function draw() {

	population.show();

	population.evaluateFitness();



noLoop();


}
