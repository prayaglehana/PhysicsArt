
int total=3000;
int count=0;
int attempts=0;
PImage text;
ArrayList<Circle> circles;
ArrayList<PVector> spots;

void setup(){
        size(350,480);
        spots=new ArrayList<PVector>();
        text=loadImage("Adahsharma.jpg");
        text.loadPixels();
       
        circles=new ArrayList<Circle>();
        
       
        
}
void draw(){
  background(0);
 
  
  //while(count<total)
  //{
                  Circle newC=newCircle();
              if(newC!=null)
                    {circles.add(newC);
                  ++count;}
  //  else
  //          attempts++;
  //  if(attempts>20){
  //            println("finishes");
              
  //          noLoop();
  //          break;
  //        }
  //}
  
  for(Circle c:circles)
          {
            if(c.growing)
                                  {if(c.edges())
                                                  {
                                                    c.growing=false;
                                                }
                                             
                                      else
                                          {
                                          for(Circle other:circles){
                                                  if(c!=other)
                                                         { float d=dist(c.x,c.y,other.x,other.y);
                                                        if(d<c.r+other.r){
                                                                      c.growing=false;
                                                                      break;
                                                                      }
                                                              }
                                                    }
                                            }
                                  }

          c.show();
          c.grow();}
        
      }
        
Circle newCircle(){
  
 
  float x=random(width);
  float y=random(height);
  
  boolean valid=true;
  
  for(Circle c:circles){
        float d=dist(x,y,c.x,c.y);
                if(d<c.r){
                  valid=false;
                  break;
              }
        
  }
  if(valid)
          {int index=int(x)+int(y)*text.width;
          color col=text.pixels[index];
          return new Circle(x,y,col);}
   else
         return null;
}