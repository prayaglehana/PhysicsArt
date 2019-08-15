

var cols,rows;
var w=40;
var grid=[];
var stack=[];
var current;
var m= false;

var openSet=[];
var closedSet=[];
var start,end;


function setup() {//frameRate(5);
	//frameRate(20);
					createCanvas(700, 700);
							cols=floor(width/w);
							rows=floor(height/w);

							for(var i=0;i<rows;++i)
									{
												for(var j=0;j<cols;++j)
														{var cell=new Cell(i,j);
														grid.push(cell);
														}
										}

						current=grid[0];
						stack.push(current);

									current.visited=true;



									openSet.push(current);

									start=grid[0];
									end=grid[grid.length-1];
	}

function draw() {

	background(0,0,0);

for(var i=0;i<grid.length;++i)
			{grid[i].show();
				}


			if(!m)
				{
				current.highlight();
				var next=current.checkNeighbors(true);
					if(next)
						{

							next.visited=true;
							remove_wall(current,next);
							current=next;

							stack.push(next);
						}
						else if(stack.length>0)
									{
											current=stack.pop();

									}
									else
										{m=true;
											refresh_boundaries();
											console.log("grids");
										console.log(grid);

										}

								}
						else {
											console.log('DONE');


														if(openSet.length>0){
															var winner=0;
															for(var i=0;i<openSet.length;++i){
																if(openSet[i].f<openSet[winner].f)
																winner=i;
															}
														}
														if(openSet[winner]==end||openSet.length==0){

															noLoop();
															console.log("maze solved");
														}
														else{
														current=openSet[winner];




														removeFromArray(openSet,current);


														closedSet.push(current);




														var neighbors=current.checkNeighbors(false);

															for(var i=0;i<neighbors.length;++i){
																var neighbor=neighbors[i];
																if(!closedSet.includes(neighbor))
																		{
																			var tempG;

																						tempG=current.g+1;

																					var newPath=false;
																					if(openSet.includes(neighbor)){
																						if(tempG<neighbor.g){
																							newPath=true;
																							neighbor.g=tempG;
																						}
																					}
																					else{
																						neighbor.g=tempG;
																						newPath=true;
																						openSet.push(neighbor);
																					}

																					if(newPath){


																						neighbor.g=heurisitic(neighbor,end);
																						neighbor.f=neighbor.g+neighbor.h;
																						neighbor.previous=current;
																						}
																			}

																	}




																}

																	//SHOWWWWWWWW
																	for(var i=0;i<closedSet.length;++i){
								closedSet[i].show(color(255,0,0,100));
						}

			for(var i=0;i<openSet.length;++i){
							openSet[i].show(color(0,255,0,100));
						}


						path=[];
						var temp=current;
						path.push(temp);
						while(temp.previous){
							path.push(temp.previous);
							temp=temp.previous;
						}

		push();
		beginShape();
		strokeWeight(6);
		stroke(0,0,255,200);
		noFill();
		for(var i=0;i<path.length;++i)
						vertex(path[i].i*w+w/2,path[i].j*w+w/2);
						endShape();

						pop();

						///SHOWEDDDDDD
















									}




}
function index(a,b)
{
	if(a<0||b<0||a>(rows-1)||b>(cols-1))
			return -1;

		return a*cols+b;
		//return b*cols+a;
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
