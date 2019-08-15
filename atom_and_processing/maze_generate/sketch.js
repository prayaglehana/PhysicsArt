

var cols,rows;
var w=40;
var grid=[];
var stack=[];
var current;


function setup() {//frameRate(5);
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
	}

function draw() {

	background(0,0,0);

	for(var i=0;i<grid.length;++i)
			grid[i].show();

				current.highlight();
				var next=current.checkNeighbors();
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
						else {
											console.log('DONE');
									}




}
function index(a,b)
{
	if(a<0||b<0||a>(rows-1)||b>(cols-1))
			return -1;

		return a*cols+b;
}

function Cell(i,j)
			{
				this.i=i;
				this.j=j;
				this.visited=false;


				this.walls=[true,true,true,true];


				this.highlight=function()
				{

					noStroke();
					fill(200,90,50);
					var x=this.i*w;
					var y=this.j*w;
					rect(x,y,w,w);
				}


				this.show=function()
						{
							var x=this.i*w;
						var y=this.j*w;
						stroke(255);
						fill(255);

							if(this.walls[0])
											line(x,y,x+w,y);//top wall
					   	if(this.walls[1])
											line(x+w,y,x+w,y+w);//right wall
					  	if(this.walls[2])
											line(x+w,y+w,x,y+w);//bottom wall
								if(this.walls[3])
											line(x,y+w,x,y);//left wall


											if(this.visited)
														{	 noStroke();
															fill(0,255,0,200);
														//	rect(x,y,w,w);
														}


					// rect(x,y,w,w);
					}


					this.checkNeighbors=function()
						{			var neighbors=[];

									var top=grid[index(this.i-1,this.j)];

									var right=grid[index(this.i,this.j+1)];

									var bottom=grid[index(this.i+1,this.j)];

									var left=grid[index(this.i,this.j-1)];

									if(top&&!top.visited)
													neighbors.push(top);
									if(right&&!right.visited)
													neighbors.push(right);
									if(bottom&&!bottom.visited)
													neighbors.push(bottom);
										if(left&&!left.visited)
													neighbors.push(left);

													if(neighbors.length>0)
															{

																	var r=floor(random(0,neighbors.length));

																return neighbors[r];
															}
													else
																return undefined;


						}
			}
			function remove_wall(c,n)
			{

				 var x=c.i-n.i;
				 var y=c.j-n.j;

				if(x==-1)//right wall of current
						{c.walls[1]=false;
						n.walls[3]=false;}
				else if(x==1)//left wall of current
							{c.walls[3]=false;
							n.walls[1]=false;}
				else if(y==1)// top wall of current
									{c.walls[0]=false;
									n.walls[2]=false;}
				else if(y==-1)			//bottom wall of current
										{c.walls[2]=false;
										n.walls[0]=false;}


			}
