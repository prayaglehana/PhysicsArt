class Circle{
  float x;
  float y;
  float r;
  int s;
  boolean growing =true;
  Circle(float x_,float y_){
  x=x_;
  y=y_;
  r=1;
  s=int(random(255));
  }
  void grow(){
    if(growing)
              r=r+0.5;
  }
  boolean edges(){
    if(x+r>width||x-r<0||y+r>height||y-r<0||r>15)
          return true;
      else
          return false;
}
    
  void show(){
    colorMode(HSB);
    stroke(s,255,255);
    strokeWeight(2);
    noFill();
    ellipse(x,y,r*2,r*2);
  }
  
  
  
}