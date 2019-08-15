var temp;
var p=[];
 var ctracker;
function setup() {
	createCanvas(306,373);
	loadPixels();

	temp=loadImage("images_folder/rohan_face.jpg");

	ctracker=new clm.tracker();
	ctracker.init();
	ctracker.start(temp);

background(61);
}

function draw() {
//	background(61);
	image(temp,0,0,306,373);
	p=ctracker.getCurrentPosition(temp);


noLoop();

}
