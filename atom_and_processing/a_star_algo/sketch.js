


var cols=100;
var rows=100;
var current;
var grid=new Array(cols);
var openSet=[];
var closedSet=[];
var start,end;
var path=[];

var w,h;






function setup() {
					createCanvas(600,600);


				w=width/cols;
				h=height/rows;

for(var i=0;i<cols;++i){
											grid[i]=new Array(rows);
										}



					for(var i=0;i<cols;i++){
												for(var j=0;j<rows;j++){
																grid[i][j]=new Spot(i,j);

												}
					}


					for(var i=0;i<cols;i++){
									for(var j=0;j<rows;j++){
													grid[i][j].addNeighbors();
		// console.log(" neighbor of grid["+i+"]"+"["+j+"]");
		// console.log(grid[i][j].neighbors);
									}

					}



					start=grid[0][0];
					end=grid[cols-1][rows-1];

					start.wall=false;
					end.wall=false;


					openSet.push(start);
						//console.log(openSet[0].);


}

function draw() {
			background(255);



			if(openSet.length>0){

				var winner=0;
				for(var i=0;i<openSet.length;++i){
								if(openSet[i].f<openSet[winner].f)
											winner=i;
				}
				current=openSet[winner];


				if(openSet[winner]===end){

					noLoop();
					console.log("DONE!!!");
				}



				removeFromArray(openSet,current);
				//openSet.splice(winner,1);

				closedSet.push(current);

				//console.log(current.neighbors);

				var neighbors=current.neighbors;
				for(var i=0;i<neighbors.length;++i){
												var neighbor=neighbors[i];
																if(!closedSet.includes(neighbor)&&!neighbor.wall)
																	 {var tempG;

																				if(neighbor.i!=current.i&&neighbor.j!=current.j)
																				tempG=current.g+1.414;
																				else
																					tempG=current.g+1;


																		 var newPath=false;
																	if(openSet.includes(neighbor)){
																				if(tempG<neighbor.g)
																								{newPath=true;
																									neighbor.g=tempG;}

																	}
																	else{
																		neighbor.g=tempG;
																		newPath=true;
																		openSet.push(neighbor);
																	}
																	if(newPath)
																		{neighbor.h=heurisitic(neighbor,end);
																	neighbor.f=neighbor.g+neighbor.h;
																	neighbor.previous=current;}
																}
				}




				//we can keep going
			}
								else
											{
												console.log("no solution");
												noLoop();
															//no solution

											}





			for(var i=0;i<cols;++i){
				for(var j=0;j<rows;++j){
					grid[i][j].show(color(255));
				}
			}

			for(var i=0;i<closedSet.length;++i){
								closedSet[i].show(color(255,0,0));
						}
			console.log();
			for(var i=0;i<openSet.length;++i){
							openSet[i].show(color(0,255,0));
						}


						path=[];
						var temp=current;
						path.push(temp);
						while(temp.previous){
							path.push(temp.previous);
							temp=temp.previous;
						}
		// for(var i=0;i<path.length;++i){
		// 	path[i].show(color(0,0,255));
		// }
		push();
		beginShape();
		strokeWeight(6);
		stroke(0,0,255,200);
		noFill();
		for(var i=0;i<path.length;++i)
						vertex(path[i].i*w+w/2,path[i].j*h+h/2);
						endShape();

						pop();

}


function heurisitic(a,b){
	var d=dist(a.i,a.j,b.i,b.j);
	//var d=abs(a.i-b.i)+abs(a.j-b.j);
	return d;
}


function removeFromArray(arr,elt){
	for(var i=arr.length-1;i>=0;i--){
									if(arr[i]==elt){
										arr.splice(i,1);
									}
				}
}
