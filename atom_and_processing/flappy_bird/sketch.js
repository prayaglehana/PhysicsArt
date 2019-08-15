var pipes=[];
var score=0;
var is_clapping=false;
var mic;

let backg;
function setup() {
	createCanvas(400,600);

//MIC
	mic=new p5.AudioIn();
	mic.start();


	bird=new Bird();
	s=createP();
	s.html("SCORE "+score);

	backg=loadImage('kittens/cloud1.png');

}

function draw() {
	//background(0);


	image(backg,0,0,width,height+100);



		if(frameCount%200==0)
		pipes.push(new Pipes());
for(var i=pipes.length-1;i>=0;--i)
		{if(pipes[i].offscreen())
				pipes.splice(i,1);
			}
	for(var i=0;i<pipes.length;++i)
			{
					pipes[i].update();
					pipes[i].show();

				}
		for(var i=0;i<pipes.length;++i)
		{
			if(pipes[i].hit())
					noLoop();
			else if(pipes[i].pos.x+pipes[i].pipe_width<bird.pos.x&&!pipes[i].taken)
							{++score;
								pipes[i].taken=true;
								s.html("SCORE "+score);
							}

		}


		bird.update();
		bird.show();

clapping();




}

function clapping(){
	//showing level of audio

	var thresholdUP=20;
	var thresholdDOWN=15;
			var vol=mic.getLevel();
				fill(0,255,0);
				//console.log(vol);
			var lvl=map(vol,0,1,0,height);
				rect(width-50,height,width,-lvl);

					//stroke(255,0,0);
				line(width-50,height-thresholdUP,width,height-thresholdUP);
				line(width-50,height-thresholdDOWN,width,height-thresholdDOWN);

				if(lvl>thresholdUP&&!is_clapping)
								{bird.up();
								is_clapping=true;}
				if(lvl<thresholdDOWN)
								is_clapping=false;

								// if(lvl>100)
								// 				bird.up();
}

function keyPressed(){
	if(key==' '){
		bird.up();
	}
}
