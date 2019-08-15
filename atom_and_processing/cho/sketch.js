

var scl=20;
let s;
let prev=0;
let f;
var tail=[];
class food
{create_food()
				{
					fill(255,0,0);

					rect(this.x,this.y,scl,scl);



				}
			create_new_location()
			{
					// this.x=random(0,floor(600/scl)*scl-1);
					// this.y=random(0,floor(600/scl)*scl-1);

					 this.x=random(0,width-scl);
					 this.y=random(0,height-scl);
			}

			is_eaten()
			{
			if(dist(s.headx,s.heady,this.x,this.y)<scl)
					return true;
			else
				return false;




			}

}
function setup() {
							frameRate(10);
							createCanvas(600,600);
							background(0);

							s=new snake();
							f=new food();

							f.create_new_location();
							f.create_food();

						}

	function draw() {


										if(!s.death())
																			{
																				background(0);
																				if(!f.is_eaten())
																								f.create_food();
																				else
																						{
																								s.update_size();
																								f.create_new_location();
																								f.create_food();
																						}

																				s.show();
																				s.update();

																			}
												else
														{textSize(30);
															fill(200,50,50);
															text("GAME OVER!",120,250);
															text("SCORE "+s.total,120,300);
															console.log('GAME OVER: score '+s.total);}
										}


function keyPressed()
			{
				if(keyCode===UP_ARROW&&prev!=2)
							{prev=1;
							s.set_direction(0,-1);}
				else if(keyCode===DOWN_ARROW&&prev!=1)
				{s.set_direction(0,1);
				prev=2;}
				else if(keyCode===RIGHT_ARROW&&prev!=4)
			{prev=3;
				s.set_direction(1,0);
			}
				else if(keyCode===LEFT_ARROW&&prev!=3)
				{ prev=4;
					s.set_direction(-1,0);
				}
					else {
						console.log('WRONG KEY MY FRIEND');
							}
			}

// class tail_class
// {	my_location(a,b)
// 	{this.x=a;
// 	this.y=b;}
// }



class snake
{

				constructor()
										{
												 	this.headx=0;
										 			this.heady=0;
													this.xpeed=0;
													this.yspeed=0;
													this.total=1;

												//	this.t=new tail_class();
													//this.t.my_location(this.headx,this.heady);

													//	this.tail[0]=this.t;



															tail[0]=createVector(this.headx,this.heady);



											}




							update_size()
											{++this.total;
tail[this.total-1]=createVector(tail[this.total-2].x+this.xpeed*scl,tail[this.total-2].y+this.yspeed*scl);




											}

					set_direction(sx,sy)
						{
									this.xpeed=sx;
									this.yspeed=sy;
						}
						death()
						{

							for(var i=1;i<this.total;++i)
								{
									var d=dist(tail[0].x,tail[0].y,tail[i].x,tail[i].y);
									if(d<5||tail[0].x<0||tail[0].y<0||tail[0].x>width||tail[0].y>height)
											return 1;


								}

								return 0;
						}

							update()
								{
									let temp=[];

									this.headx=tail[0].x+this.xpeed*scl;
									this.heady=tail[0].y+this.yspeed*scl;

									temp[0]=createVector(this.headx,this.heady);






									for(var i=1;i<this.total;++i)
											temp[i]=tail[i-1];
									for(var i=0;i<this.total;++i)
													tail[i]=temp[i];




									}
									show()
									{
										fill(255);
										for(var i=1;i<this.total;++i)
													rect(tail[i].x,tail[i].y,scl,scl);

														fill(255,200,0);
													rect(tail[0].x,tail[0].y,scl,scl);
									}



}
