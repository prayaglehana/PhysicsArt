  float angle=0;
  
  ArrayList<PVector> path;
  int resolution=10;
  
  
  Orbit sun;
  Orbit end;
  
  
void setup(){
  size(900,900);
  path=new ArrayList<PVector>();
   
   sun=new Orbit(width/2,height/2,110,1);
   
   Orbit next=sun;
   
   for(int i=0;i<4;++i){
     next=next.addChild();
   }
   
   end=next;

  background(51);
 
}

void draw(){
  background(51);
  
  Orbit current=sun;
 
 while(current!=null)
        {  current.update();
          current.show();
        current=current.child;}
  

        
            
            path.add(new PVector(end.x,end.y));
           
            stroke(255,0,255);
            beginShape();
            for(PVector pos: path){
              vertex(pos.x,pos.y);
            }
            endShape();
              
            
   }
  