var attractors=[];
var no_of_attractor=1;
var particles=[];
var no_of_particle=10;


function setup() {
	createCanvas(500,500);
	background(0);

	for(var i=0;i<no_of_particle;++i)
	particles.push(new Particle(random(width),random(height)));

	// for(var i=0;i<no_of_attractor;++i)
	// attractors.push(new Attractor(width/2,height/2));


}

function draw() {
//background(0);

for(var i=0;i<particles.length;++i)
								{for(var j=0;j<attractors.length;++j)
												{particles[i].attractedTo(attractors[j]);}
												particles[i].update();
												particles[i].show();
						}

for(var i=0;i<attractors.length;++i)
			attractors[i].show();



}

function mousePressed(){
	attractors.push(new Attractor(mouseX,mouseY));
}
