
var x_left;
var x_right;
var y_left;
var y_right;


function setup() {
	// pixelDensity(1);
	// loadPixels();
	createCanvas(600,600);
	x_left = -2;
	x_right= 2 ;
	y_left =  2;
	y_right=-2 ;

	//translate(60,0);
	background(5);

	var max_iteration=45;

	for(var x=0;x<width;++x)
				{
						for(var y=0;y<height;++y)
									{var a=map(x,0,width,x_left,x_right);
										var b=map(y,0,height,y_left,y_right);

										var n=0;
										var ca=a;
										var cb=b;

													while(n<max_iteration)
																{
																	var aa= a*a-b*b;
																	var bb=2*a*b;
																	a=aa+ca;
																	b=bb+cb;

																	// a=aa+map(mouseX,0,width,-1,1);
																	// b=bb+map(mouseY,0,height,-1,1);


																	if(abs(a)>16||abs(b)>16)
																					{
																						//console.log("break and n"+a);
																						break;
																					}
																					++n;


																}

																if(n==max_iteration)
																				{ //console.log(n);
																					//fill(255);
																					//var r=map(dist(x,y,width/2,height/2),0,dist(0,0,width/2,height/2),255,30);


																				stroke(225);
																				line(x,y,x,y);

																			}
																			else {	stroke(map(n,0,max_iteration,0,230));
																							line(x,y,x,y);
																						}
                                      //
																			// var bright=map(n,0,max_iteration,0,255);
                                      //
																			// var pix=(x+y*width)*4;
																			// pixels[pix+0]=bright;
																			// pixels[pix+1]=bright;
																			// pixels[pix+2]=bright;
																			// pixels[pix+3]=255;


									}

					}


}

function draw() {



}

function mousePressed()
	{
				console.log("mouse got pressed");

					// if(mouseX>50&&mouseX<(width-50)&&mouseY>50&&mouseY<(height-50))
					// 				{
													// var new_x_left  = map(mouseX-50,0,width-50,x_left,x_right;
													// var new_x_right = map(mouseX+50,100,width,x_left,x_right);
                          //
                          //
													// var new_y_left  = map(mouseY-50,0,height-50,y_left,y_right);
													// var new_y_right = map(mouseY+50,100,height,y_left,y_right);

													var new_x_left  = map(mouseX-50,0,width,x_left,x_right);
													var new_x_right = map(mouseX+50,0,width,x_left,x_right);


													var new_y_left  = map(mouseY-50,0,height,y_left,y_right);
													var new_y_right = map(mouseY+50,0,height,y_left,y_right);







											x_left=new_x_left;
											x_right=new_x_right;

											y_left=new_y_left;
											y_right=new_y_right;

					//	console.log("rleft "+r_left+"r_right "+r_right);

						//	}
									// else
									// 		console.log(" wrong move ");

	}
