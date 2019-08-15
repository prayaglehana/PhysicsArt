class s
{


	constructor()
	{
		this.x=random(0,600);
		this.y=random(0,600);
		this.d=random(4,20);

		this.dx=1;
		this.dy=1;
		if(this.x<300)this.dx=-1;
		if(this.y<300)this.dy=-1;


	}
	create_point()
	{this.x=random(0,600);
	this.y=random(0,600);
	this.d=random(5,20);
	this.dx=1;
	this.dy=1;
	if(this.x<300)this.dx=-1;
	if(this.y<300)this.dy=-1;
}
show()
{

		fill(255,255,220,100);

		ellipse(this.x,this.y,this.d,this.d);

}
update()
{
var r=dist(this.x,this.y,300,300);

	this.x=this.x+this.dx*map(r/424,0,1,-10,15);
	this.y=this.y+this.dy*map(r/424,0,1,-10,15);
	if(r>425)
this.create_point();

}


}
let star=[];
function setup() {

	createCanvas(600,600);

	for(var i=0;i<1000;++i)
	{
		star[i]=new s();
	}



}

function draw() {

	background(0);

	for(var i=0;i<1000;++i)
	{
		star[i].show();
		star[i].update();

	}



}
