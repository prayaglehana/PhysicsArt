var r=4;
var k=30;
var w=r/Math.sqrt(2);
var cols;
var rows;

var grid=[];
var active=[];



function setup() {
	createCanvas(400,400);
	background(0);
	strokeWeight(4);

//step 0
cols=floor(width/w);
rows=floor(height/w);

for(var i=0;i<cols*rows;i++){
	grid[i]=undefined;
}

//step 1
var x=random(width);
var y=random(height);
var i=floor(x/w);
var j=floor(y/w);
var pos=createVector(x,y);
grid[i+j*cols]=pos;

active.push(pos);



}

function draw() {
background(0);

				if(active.length>0){
					var randIndex=floor(random(active.length));
					var pos=active[randIndex];
					var found=false;
					for(var n=0;n<k;++n){
						var sample=p5.Vector.random2D();
						var m=random(r,2*r);
						sample.setMag(m);
						sample.add(pos);

							var col=floor(sample.x/2);
							var row=floor(sample.y/2);
								//if(col>-1&&row>-1&&col<cols&&row<rows&&grid[col+row*cols])
								{

							var ok=true;
					for(var i=-1;i<=1;++i){
						for(var j=-1;j<=1;j++){
							var index=(col+i)+(row+j)*cols;
							var neighbor=grid[index];
							if(neighbor){
												var d=p5.Vector.dist(sample,neighbor);

															if(d<r){
																ok=false;
																}
													}
												}
											}
										if(ok){
											found=true;
											grid[col+row*cols]=sample;
											active.push(sample);
											//break;
										}
									}
					}

					if(!found){
						active.splice(randIndex,1);
					}

				}




				for(var i=0;i<grid.length;++i){
						if(grid[i])
									{stroke(255);
									strokeWeight(4);

									point(grid[i].x,grid[i].y);}
						}

			for(var i=0;i<active.length;++i){
				stroke(255,0,255);
				strokeWeight(4);
				point(active[i].x,active[i].y);
			}
}
