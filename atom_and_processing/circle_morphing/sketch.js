let circPath=[];
let triPath=[];
let spacing =10;
let radius=100;
let theta=0;
//let morPath=[];
let x,y;
function polarToCartesian(r,angle){
//angleMode(DEGREES);
	return createVector(r*cos(angle),r*sin(angle));
}


function setup() {
	createCanvas(400,400);
	angleMode(DEGREES);
	let startA=0;
	let endA=120;
	let start=polarToCartesian(radius,startA);
	let end=polarToCartesian(radius,endA);


	for(let a =startA;a<360;a+=spacing ){

					let cv=polarToCartesian(radius,a);
					circPath.push(cv);
				//	morPath.push(cv);
					let amt=a%120/(endA-startA);
					let tv=p5.Vector.lerp(start,end,amt);
					triPath.push(tv);

					if((a+spacing)%120===0){
									startA=startA+120;
									endA=endA+120;

									start=polarToCartesian(radius,startA);
								  end=polarToCartesian(radius,endA);
					}
	}

	// let astart=0;
	// let aend=120;
	// let xs=radius*cos(astart);
	// let ys=radius*sin(astart);
	// let xe=radius*cos(aend);
	// let ye=radius*sin(aend);
  //
	// triPath.push(createVector(xs,ys));
	// triPath.push(createVector(xe,ye));





}

function draw() {
			background(0);
			translate(width/2,height/2);
			rotate(30);
			stroke(255);
			noFill();



			beginShape();

			let amt=(sin(theta)+1)/2;


theta+=1;
			for(let i=0;i<circPath.length;++i){





									let cv=circPath[i];
									let tv=triPath[i];



									x=lerp(cv.x,tv.x,amt);
									y=lerp(cv.y,tv.y,amt);
									vertex(x,y);
								}

								endShape(CLOSE);
      //
			// beginShape();
      //
			// for(let i=0;i<circPath.length;++i){
			// 						let v=circPath[i];
			// 						vertex(v.x,v.y);
			// 					}
      //
			// 					endShape(CLOSE);
      //
      //
			// 					beginShape();
      //
			// 					for(let i=0;i<triPath.length;++i){
			// 											let v=triPath[i];
			// 											vertex(v.x,v.y);
			// 										}
      //
			// 										endShape(CLOSE);


}
