var xoff;
var yoff;
var zoff;

var inc=0.1;
var r;
var scl=20;
var cols,rows;
var particles=[];
var flowfield=[];


function setup() {
	createCanvas(600,600);
	colorMode(HSB,255);
  // pixelDensity(1);
cols=floor(width/scl);
rows=floor(height/scl);

flowfield=new Array(cols*rows);

for(var i=0;i<1000;++i)
particles[i]=new Particle();

	xoff=0;
	yoff=0;
	zoff=0;
}


function draw() {
	// loadPixels();
//background(255);
yoff=0;
for(var y=0;y<rows;++y)
				{xoff=0;
							for(var x=0;x<cols;++x){
								var index=(x+y*cols);

								// r=random(255);


								var angle=map(noise(xoff,yoff,zoff),0,1,0,TWO_PI);

								var v=p5.Vector.fromAngle(angle);
								flowfield[index]=v;
								flowfield[index].setMag(0.5);
								stroke(0);
								strokeWeight(1);

								push();
								translate(x*scl,y*scl);
								//fill(r);
								//rect(x*scl,y*scl,scl,scl);
								rotate(v.heading());
								//line(0,0,scl,0);
								pop();
                //
								// pixels[index+0]=r;
								// pixels[index+1]=r;
								// pixels[index+2]=r;
								// pixels[index+3]=255;

								//console.log(r);
								xoff+=inc;

							}
							yoff+=inc;

				}
				for(var k=0;k<particles.length;++k)
				{particles[k].follow(flowfield);
					particles[k].update();
					particles[k].edges();
				particles[k].show();

			}
updatePixels();
//noLoop();
zoff+=0.009;
}
