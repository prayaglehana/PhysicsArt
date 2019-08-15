var axiom="F";
var sentence=axiom;
var rule=[];
var len=150;
var anglee=24;



rule[0]={
			a:"F",
			//b:"FF+[+F-F-F]-[-F+F+F]"
			b:"FF+[+F-F-F]-[-F+F+F]"
			}
	// rule[1]=
	// {
	// 	a:"FF",
	// b:"F+[+F-F-F]-[-FFF+F+F]"
	// //	b:"FF+[+FF-F]-[-F-F+F]"
	// }

function generate()
	{
			len*=0.5;
		  var nextSentence="";

				for(var i=0;i<sentence.length;++i)
					{var current=sentence.charAt(i);
						var found=false;
					      for(var j=0;j<rule.length;++j){
										if(current==rule[j].a)
											{nextSentence+=rule[j].b;
												found=true;
												break;}
								}
								if(!found){
									nextSentence+=current;
								}
			}
			sentence=nextSentence;
			createP(sentence);
			turtle();
		}

function turtle()
						{
							angle=radians(anglee);
							background(60);
							resetMatrix();
							translate(width/2,height);
							//stroke(255);
							for(var i=0;i<sentence.length;++i){
								var current=sentence.charAt(i);
								stroke(0,random(200,255),0,random(100,255));
											if(current=="F")
														{line(0,0,0,-len);
														translate(0,-len);}
											else if(current=="+")
															rotate(angle);
											else if(current=="-")
														rotate(-angle);
												else if(current=="[")
																push();
												else if(current=="]")
														pop();
											}
		       		}



function setup() {

		createCanvas(600,600);

		 createP(axiom);
		 turtle();
		 var button =createButton("generate");
		 			button.mousePressed(generate);

}

function draw() {

}
