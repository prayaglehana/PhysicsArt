function Attractor(x,y){
  this.pos=createVector(x,y);

  this.show=function(){
  
    stroke(255,0,0);
    strokeWeight(10);
    point(this.pos.x,this.pos.y);

  }
}
