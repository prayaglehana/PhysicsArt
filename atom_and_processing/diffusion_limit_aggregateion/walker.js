function Walker(v,stuck){
  this.pos=v;

  this.stuck=stuck;

  this.walk=function(){
  var vel=p5.Vector.random2D();
  //vel.setMag(1);

  this.pos.add(vel);
  this.pos.x=constrain(this.pos.x,0,width);
  this.pos.y=constrain(this.pos.y,0,height);


}
this.checkStuck=function(){

  for(var i=0;i<tree.length;++i){
            var d=this.distSq(this.pos,tree[i].pos);
            if(d<r*r*3){

                                          this.stuck=true;
                                        return true;

              }
              }
              return false;
            }

  this.show=function(){
    //strokeWeight(r*0.5);
    noStroke(255,200);
    if(!this.stuck)
        fill(255);

  else
   {
     //colorMode(HSB);
  // fill(random(255),255,255,160);
  fill(255,0,100,250);
  colorMode(RGB);
}
    ellipse(this.pos.x,this.pos.y,6,6);
  }

  this.distSq=function (a,b){
    var dx=b.x-a.x;
    var dy=b.y-a.y;
    return dx*dx+dy*dy;
  }
}
