function Cell(i,j)
			{

          this.f;
          this.g;
          this.h;

				this.i=i;
				this.j=j;
				this.visited=false;


				this.walls=[true,true,true,true];


        this.neighbors;
        this.previous;


				this.highlight=function()
				{

					noStroke();
					fill(200,90,50);
					var x=this.i*w;
					var y=this.j*w;
					rect(x+7,y+7,w*0.8,w*0.8);
				}


				this.show=function(c)
						{

              if(!c)
							{var x=this.i*w;
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
											line(x,y,x,y+w);//left wall


											if(this.visited)
														{	 noStroke();
															fill(0,255,0,200);
														//	rect(x,y,w,w);
														}
                          }
                          else{
                              fill(c);
                            rect(this.i*w,this.j*w,w,w);
                          }


					// rect(x,y,w,w);
					}


					this.checkNeighbors=function(maze_generating=true)
						{var neighbors=[];

								var top=grid[index(this.i,this.j-1)];

								var right=grid[index(this.i+1,this.j)];

								var bottom=grid[index(this.i,this.j+1)];

								var left=grid[index(this.i-1,this.j)];

                  if(maze_generating)
                            {
															//var neighbors=[];
                            //
                						// 			var top=grid[index(this.i-1,this.j)];
                            //
                						// 			var right=grid[index(this.i,this.j+1)];
                            //
                						// 			var bottom=grid[index(this.i+1,this.j)];
                            //
                						// 			var left=grid[index(this.i,this.j-1)];


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
                                      else{
                                        // var neighbors=[];
                                        //
                          							// 		var top=grid[index(this.i,this.j-1)];
                                        //
                          							// 		var right=grid[index(this.i+1,this.j)];
                                        //
                          							// 		var bottom=grid[index(this.i,this.j+1)];
                                        //
                          							// 		var left=grid[index(this.i-1,this.j)];

                                          if(top&&!current.walls[0])//bottom wall of top &&!top.walls[2]
                                                neighbors.push(top);
                                          if(right&&!current.walls[1])//left wall of right t&&!right.walls[3]
                                                  {console.log("hellor");
                                                    neighbors.push(right);}
                                        if(bottom&&!current.walls[2])//top wall of bottom &&!bottom.walls[0]
                                                {console.log("hellob");
                                                  neighbors.push(bottom);}
                                          if(left&&!current.walls[3])//right wall of left !left.walls[1]&&
                                                    neighbors.push(left);

                                                    console.log("current");
                                                    console.log(current);
                                                    console.log("top");
                                                    console.log(top);
                                                    console.log("right");
                                                    console.log(right);
                                                    console.log("bottom");
                                                    console.log(bottom);
                                                    console.log("left");
                                                    console.log(left);

                                                    console.log("neighbor");
                                                    console.log(neighbors);


                                        return neighbors;
                                      }



						}
			}
