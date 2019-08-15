var ship;
var asteroids=[];
var lasers=[];

var bkg;

function setup() {
	createCanvas(800,800);
	bkg=loadImage('images/space.jpg');
	ship=new Ship();
	for(var i=0;i<5;++i)
				asteroids.push(new Asteroid());
	background(0);
}

function draw() {
//background(0);
image(bkg,0,0,width,height);

		for(var i=0;i<asteroids.length;++i){
						if(ship.hits(asteroids[i]))
									{
										console.log('HITSS');
									}

			asteroids[i].update();
			asteroids[i].edges();
			asteroids[i].render();

		}
		for(var i=lasers.length-1;i>=0;--i){
			lasers[i].update();
		//	lasers[i].edges();
			lasers[i].render();
			for(var j=asteroids.length-1;j>=0;--j)
								{
									if(lasers[i].hits(asteroids[j])){

												if(asteroids[i].r>15)
												{var newAsteroids=	asteroids[j].breakup();
												console.log(newAsteroids);
												asteroids=asteroids.concat(newAsteroids);
												asteroids.splice(j,1);
												lasers.splice(i,1);
												break;}
												else {
													asteroids.splice(j,1);
													break;

													//incrrease score;
												}


										}

							}
							// if(lasers[i].offscreen())
							// lasers.splice(i,1);
		}
		ship.render();
		ship.turn();
		ship.update();
		ship.edges();



}


function keyPressed(){
if(key==' '){
							lasers.push(new Laser(ship.pos,ship.heading));
						}
	else if(keyCode==RIGHT_ARROW)
					{
						ship.set_turn=1;}
	else if(keyCode==LEFT_ARROW)
					ship.set_turn=-1;
					else if(keyCode=UP_ARROW)
									{	ship.accelerate=true;
										}



}
function keyReleased(){
				ship.set_turn=0;
				ship.accelerate=false;
}
