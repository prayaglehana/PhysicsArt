import shiffman.box2d.*;
 import org.jbox2d.collision.shapes.*;
 import org.jbox2d.common.*;
 import org.jbox2d.dynamics.*;

ArrayList<Box> boxes;
Box2DProcessing box2d;

platform_class p;
void setup()
{
  size(640,640);
  
  
  box2d=new Box2DProcessing(this);
  box2d.createWorld();
  
  boxes=new ArrayList<Box>();
  p=new platform_class(100,300);
}

void draw() {
  background(100);

  if(keyPressed)
  {//if(keyCode==)
      {
         for(Box b:boxes){
               Vec2 wind = new Vec2(60,0);
                b.apply_force(wind);
         
              }
         }
  }

  if(mousePressed)
  {
    Box b=new Box(mouseX,mouseY);
    boxes.add(b);
    
  }
  box2d.step();

  p.display();
 for(Box b:boxes){
                b.display();
              }
  

}