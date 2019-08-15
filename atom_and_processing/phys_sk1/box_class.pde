class Box{

Body body;

float x,y;
float w,h;

Box(float x_,float y_){
  x=x_;
  y=y_;
  w=16;
  h=16;




//step 1: define body
  BodyDef bd=new BodyDef();
  bd.position.set(box2d.coordPixelsToWorld(x,y));
  bd.type=BodyType.DYNAMIC;

  //step 2:create body
  body = box2d.createBody(bd);

  //step 3: create shape
  PolygonShape ps=new PolygonShape();
  float sw=box2d.scalarPixelsToWorld(w/2);
  float sh=box2d.scalarPixelsToWorld(h/2);
  ps.setAsBox(sw,sh);

  //step 3: create fixture
      FixtureDef fd=new FixtureDef();
        fd.shape=ps;

        fd.density=0.1;
        fd.friction=1000;
        fd.restitution=0.1;

        body.createFixture(fd);

}
void apply_force(Vec2 force)
{
  Vec2 pos=body.getWorldCenter();
  
  body.applyForce(force,pos);
}



void display(){
Vec2 pos=box2d.getBodyPixelCoord(body);
float a=body.getAngle();

  pushMatrix();
  translate(pos.x,pos.y);
  rotate(-a);
  fill(100,255,0);
  stroke(100);
  strokeWeight(2);
  rectMode(CENTER);
  rect(0,0,w,h);
  popMatrix();

}
}