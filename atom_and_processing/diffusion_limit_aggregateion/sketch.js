var tree=[];
var walkers=[];
var walker_pop=2000;
var iterations=200;
var r=4;

function setup() {
	createCanvas(800,800);

	// for(var x=0;x<width;x+=r*2){
	// 	tree.push(new Walker(createVector(x,height),true));
	// }


 	tree[0]=new Walker(createVector(width/2,height/2),true);

	for(var i=0;i<walker_pop;++i)
				{	var v=createVector(random(width),random(height));
					walkers[i]=new Walker(randomPoint(),false);
				}
				background(0);
}

function draw() {
		background(5);




							for(var i=0;i<tree.length;++i){
													tree[i].show();
												}
												for(var i=0;i<walkers.length;++i){
																		walkers[i].show();
																	}


					 for(var j=0;j<iterations;++j)
						 				{
							for(var i=0;i<walkers.length;++i){
														walkers[i].walk();

														if(walkers[i].checkStuck()){
															tree.push(walkers[i]);
														}
													}
													for(var i=walkers.length-1;i>=0;--i){
														if(walkers[i].stuck)walkers.splice(i,1);
													}

											}

						// while(walkers.length<walker_pop){
            //
            //
						// walkers.push(new Walker(randomPoint(),false));
						// }


		}
function randomPoint(){
var i=floor(random(4));

	if(i==0){
		var x=random(width);
		return createVector(x,0);
	}
	else if(i==1){
		var x=random(width);
		return createVector(x,height);
	}
	else if(i==2){
		var y=random(height);
		return createVector(0,y);
	}
	else{
		var y=random(height);
		return createVector(width,y);
	}
}
