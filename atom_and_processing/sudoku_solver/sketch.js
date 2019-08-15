var grid=[];
var w=55;
var cols,rows;
function setup() {
	createCanvas(500,500);
	// cols=floor(width/w);
	// rows=floor(height/w);
	cols=9;
	rows=9;

							for(var i=0;i<rows;++i)
								{
											for(var j=0;j<cols;++j)
													{var cell=new Cell(i,j);
													grid.push(cell);
													}
									}
									grid[index_at(0,1)].my_num=1
									grid[index_at(0,6)].my_num=4
									grid[index_at(0,7)].my_num=3
									grid[index_at(1,0)].my_num=7
									grid[index_at(2,3)].my_num=2
									grid[index_at(2,4)].my_num=5
									grid[index_at(2,5)].my_num=4
									grid[index_at(2,6)].my_num=9
									grid[index_at(3,0)].my_num=1
									grid[index_at(3,1)].my_num=7
									grid[index_at(3,4)].my_num=4
									grid[index_at(3,6)].my_num=2
									grid[index_at(3,8)].my_num=6
									grid[index_at(4,4)].my_num=9
									grid[index_at(4,8)].my_num=3
									grid[index_at(5,2)].my_num=6
									grid[index_at(5,5)].my_num=8
									grid[index_at(6,3)].my_num=1
									grid[index_at(6,3)].my_num=4
									grid[index_at(6,4)].my_num=7
									grid[index_at(6,7)].my_num=6
									grid[index_at(7,3)].my_num=5
									grid[index_at(7,5)].my_num=8
									grid[index_at(7,6)].my_num=1
									grid[index_at(7,7)].my_num=2
									grid[index_at(8,1)].my_num=9
									grid[index_at(8,4)].my_num=6
									grid[index_at(8,6)].my_num=3
									grid[index_at(8,8)].my_num=4


								show_the_grid();

										  if(solve_next_after(0,0))
										 			console.log('maze is solved');
											else
												console.log('cannot be solved');


}

function draw() {


}
function Cell(i,j){
	this.i=i;
	this.j=j;
	this.my_num=undefined;

	this.show=function(){
		stroke(0);
		line(this.j*w,this.i*w,this.j*w+w,this.i*w);
		line(this.j*w+w,this.i*w,this.j*w+w,this.i*w+w);
		line(this.j*w+w,this.i*w+w,this.j*w,this.i*w+w);
		line(this.j*w,this.i*w+w,this.j*w,this.i*w);

		if(this.my_num)
	  	text(String(this.my_num),this.j*w+w/2,this.i*w+w/2,w,w);



	}
}



function solve_next_after(start_i,start_j){

var start_digit=1;
var d;


	for(var i=start_i;i<rows;++i)
		 {
						 var j;



						if(i==start_i)
								j=start_j;
						else
						   j=0;

					for(;j<cols;++j)
							{if(grid[index_at(i,j)].my_num==undefined){

																	    while(next_possible_digit_at(start_digit,i,j)!=0){

																														var d=next_possible_digit_at(start_digit,i,j);
																														console.log("next_possible_digit_at  "+d);

																														grid[index_at(i,j)].my_num=d;
																														show_the_grid();
																														if(solve_next_after(i,j))
																																{
																																	return true;
																																}
																														else
																															{
									       																					start_digit=start_digit+1;
																																	if(start_digit>9)break;
																															}

																										}
																			show_the_grid();
																			grid[index_at(i,j)].my_num=undefined;
																			return false;



												}


							}
			}
			return true;


}


function show_the_grid(){
	background(255);
	for(var i=0;i<rows;++i)
								{
											for(var j=0;j<cols;++j)
													{grid[index_at(i,j)].show();


													}
									}

}

function next_possible_digit_at(start_d,x_co,y_co){

				var possible=true;
				var dig=0;
					if(start_d>9)return dig;
					for(dig=start_d;dig<=9;++dig){
																					possible=true;

																					for(var temp_j=0;temp_j<cols;++temp_j)
																									{//console.log(dig);

																												if(grid[index_at(x_co,temp_j)].my_num)
																															{console.log('compare'+dig+'with'+grid[index_at(x_co,temp_j)].my_num);
																																if(dig==grid[index_at(x_co,temp_j)].my_num)
																																		{possible=false;
																																		break;}
																															}

																											}
																						if(possible)
																						{
																							for(var temp_i=0;temp_i<rows;++temp_i)
																												 {//console.log(dig);
																												if(grid[index_at(temp_i,y_co)].my_num)
																															 {console.log('compare'+dig+ ' with'+grid[index_at(temp_i,y_co)].my_num);
																																 if(dig==grid[index_at(temp_i,y_co)].my_num)
																																	{possible=false;
																																		break;}
																																}
																															}

																						}
																						if(possible)
																								{//console.log(possible);
																								break;}

																		}
									if(dig==10)possible=false;

									if(possible==true)
									{console.log('write'+dig);
												return dig;}
									else{
												return 0;}
			}

function index_at(i,j){
	return i*cols+j;
}
