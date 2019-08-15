
int total=3000;
int count=0;
int attempts=0;
PImage text;
ArrayList<Circle> circles;
ArrayList<PVector> spots;

void setup(){
        size(733,300);
        spots=new ArrayList<PVector>();
        text=loadImage("text.png");
        text.loadPixels();
        for(int x=0;x<text.width;++x)
                {   for(int y=0;y<text.height;++y)
                        {
                          int index=x+y*text.width;
                          color c=text.pixels[index];
                          float b=brightness(c);
                                    if(b>1)
                                    {spots.add(new PVector(x,y));
                                       //println("bahubali");
                                     }
                                   
                          }
                        
                      }
                 //println(spots.size());
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
                                                        if(d-2<c.r+other.r){
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
  
  int r=int(random(0,spots.size()));
  PVector spot=spots.get(r);
  float x=spot.x;
  float y=spot.y;
  
  boolean valid=true;
  
  for(Circle c:circles){
        float d=dist(x,y,c.x,c.y);
                if(d<c.r){
                  valid=false;
                  break;
              }
        
  }
  if(valid)
          return new Circle(x,y);
   else
         return null;
}