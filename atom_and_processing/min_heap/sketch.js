var a=[];
function setup() {
	createCanvas(500,500);
	background(0);
	a.push(undefined);
	insert(13);
	insert(21);
	insert(16);
	insert(4);
	insert(14);

	show();
}

function draw() {

}


function show(){
	background(0);
	var n=1;
	var d=50;
	var len=width/2;

	var temp_len=len;
	for(var i=1;i<a.length;++i){
var m=pow(2,n);

		if(i%m==0){

			++n;
			d+=100;
			len=len/2;
			temp_len=len;


		}

		fill(200,0,200);
		textSize(20);
    text(String(a[i]),temp_len-12, d+10);

		push()
		noFill();
		stroke(255);
		ellipse(temp_len,d,30,30);
		pop();

		temp_len+=len*2;


	}
}


function insert(val){
	a.push(null);
	var my_indx=a.length-1;
	parent=floor(my_indx/2);
	while(a[parent]>val){
		a[my_indx]=a[parent];
		a[parent]=null;
		my_indx=parent;
		parent=floor(my_indx/2);

		if(a[parent]==null)break;
	}
	a[my_indx]=val;


}
