class Circle{
  float x;
  float y;
  float r;
  color c;
  boolean growing =true;
  Circle(float x_,float y_,color c_){
  x=x_;
  y=y_;
  c=c_;
 
  }
  void grow(){
    if(growing)
              r=r+0.5;
  }
  boolean edges(){
    if(x+r>width||x-r<0||y+r>height||y-r<0||r>10)
          return true;
      else
          return false;
}
    
  void show(){
   
    //stroke(c);
    //strokeWeight(2);
    //noFill();
    fill(c);
    noStroke();
    ellipse(x,y,r*2,r*2);
  }
  
  
  
}