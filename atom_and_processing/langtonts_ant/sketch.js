var grid=[];
var cols,rows;
var w=8;
var ant;
var count=0;

function setup() {
	createCanvas(1101, 721);
	//frameRate(1);
							cols=floor(width/w);
							rows=floor(height/w);
							for(var i=0;i<rows;++i)
													{
																for(var j=0;j<cols;++j)
																		{var cell=new Cell(i,j);
																		grid.push(cell);
																		}
														}

ant=new Ant();


}

function draw() {
	background(0,0,0);

						for(var i=0;i<grid.length;++i)
								grid[i].show();



								if(grid[ant.loc].white)
											ant.move_right();
											else
													ant.move_left();

													++count;

							}


							function Ant(){
								this.pos=new p5.Vector(14)
													//	this.loc=8844;
														this.loc=posAt(floor(rows/3),floor(1.5*cols/2));
														console.log(rows/2+" "+cols/2);
														console.log(this.loc);
															this.head=1;
														this.move_right=function(){

															grid[this.loc].flip();
															switch(this.head)
																			{
																				case 1: if(grid[this.loc].j+1<cols)
																											this.loc=posAt(grid[this.loc].i,grid[this.loc].j+1);
																											this.head=2;
																											break;
																				case 2:	if(grid[this.loc].i+1<rows)
																											this.loc=posAt(grid[this.loc].i+1,grid[this.loc].j);
																											this.head=3;
																											break;
																				case 3: if(grid[this.loc].j-1>=0)
																											this.loc= posAt(grid[this.loc].i,grid[this.loc].j-1);
																											this.head=4;
																											break;
																				case 4: if(grid[this.loc].i-1>=0)
																											this.loc=posAt(grid[this.loc].i-1,grid[this.loc].j);
																											this.head=1;
																											break;
																			}

														}
														this.move_left=function(){
														grid[this.loc].flip();
															switch(this.head)
																			{
																				case 1: if(grid[this.loc].j-1>=0)
																								this.loc=posAt(grid[this.loc].i,grid[this.loc].j-1);
																								this.head=4;
																								break;

																				case 2: if(grid[this.loc].i-1>=0)
																								this.loc=posAt(grid[this.loc].i-1,grid[this.loc].j);
																								this.head=1;
																								break;
																				case 3: if(grid[this.loc].j+1<cols)
																							this.loc= posAt(grid[this.loc].i,grid[this.loc].j+1);
																							this.head=2;
																							break;
																				case 4: if(grid[this.loc].i+1<rows)
																								this.loc=posAt(grid[this.loc].i+1,grid[this.loc].j);
																								this.head=3;
																								break;
																			}

														}


							}


		function Cell(i,j)
			{
						this.i=i;
						this.j=j;

						this.white=true;


								this.show=function(){
									stroke(0);
													if(this.white==true)
															fill(255);
													else {
																fill(0);
													}



														rect(this.j*w,this.i*w,w,w);

														if(ant&&posAt(this.i,this.j)==ant.loc){
															fill(255,0,0);
																ellipse(this.j*w+w/2,this.i*w+w/2,w,w);
															fill(0,0,255);
																		switch(ant.head)
																					{case 1:	rect(this.j*w+w/2-w/8,this.i*w,w/4,w/4);
																										break;
																					case 2:rect(this.j*w+w/2+w/4,this.i*w+w/2-w/8,w/4,w/4);
																									break;
																					case 3: rect(this.j*w+w/2-w/8,this.i*w+w/2+w/4,w/4,w/4);
																								break;
																					case 4:rect(this.j*w,this.i*w+w/2-w/8,w/4,w/4);
																									break;
																				}


														}




								}

								this.flip=function(){

														if(this.white){

														this.white=false;
														}
														else{
																this.white=true;
														}

								}
							}

function posAt(i,j){
	return i*cols+j;
}
