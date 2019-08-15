int k=-5;
class Orbit{
  float x;
  float y;
  float r;
  int n;
  
  Orbit parent;
  Orbit child;
  float speed;
  float angle;
 
  Orbit(float x_,float y_,float r_,int n_){
      x=x_;
      y=y_;
      r=r_;
      n=n_;
      
      speed=pow(k,n-1);
      
      
      parent=null;
      child=null;
      angle=0;
      
  }
  
  Orbit(float x_,float y_,float r_,int n_,Orbit p){
      x=x_;
      y=y_;
      r=r_;
      n=n_;
      
      parent=p;
      child=null;
      angle=-PI/2;
      speed=radians(pow(k,n-1))/resolution;
  }
  
  Orbit addChild(){
    float newr=r*0.56;
     float newx=x+r-newr;
     float newy=y;
     
  child=new Orbit(newx,newy,newr,n+1,this);
  
  return child;
}

void update(){ 
              if(parent!=null)
              {angle+=speed;
              float rsum=r+parent.r;
              x=parent.x+rsum*cos(angle);
              y=parent.y+rsum*sin(angle);}
     
            
}
    
  
  void show(){
            stroke(255,150);
            strokeWeight(2);
            noFill();
            ellipse(x,y,r*2,r*2);
          }
          
          
  
}