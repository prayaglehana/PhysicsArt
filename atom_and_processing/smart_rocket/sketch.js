var rkt_population;
var lifespan=295;
var lifeP 		  ;
var count=0	 ;
var target  ;
var blocks=[];


var maxForce=0.55;
var gen=1;
var max_d;
var index_maxFit=0;


function setup() {
	createCanvas(600,600);
	rkt_population=new Population();

				blocks.push(new Block(200,200,390,20));
				blocks.push(new Block(10,350,300,50));
				blocks.push(new Block(0,120,320,50));
				blocks.push(new Block(270,500,390,20));


	lifeP=createP();
	f=createP();
	target=createVector(width/2,90);
	max_d=dist(target.x,target.y,width,height);
		}

function draw() {
background(51);
fill(255,0,0);
for(var i=0;i<blocks.length;++i)
			blocks[i].show();

ellipse(target.x,target.y,16,16);
rkt_population.run();
if(count%5==0)
if(random(100)<=50)
rkt_population.snapping();
//lifeP.html(count);
count++;

if(count==lifespan)
			{

				rkt_population.evaluate();
				rkt_population.show_max_fit_rkt();
					rkt_population.selection_of_fit();
					f.html('maximum fitness '+rkt_population.maxFit);
					count=0;
							++gen;
            lifeP.html('GENERATION '+gen);
					 // if(gen==4)
						// noLoop();
				}
}
