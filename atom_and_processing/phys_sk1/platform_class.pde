
class platform_class{

Body body;

float x,y;
float w,h;

platform_class(float x_,float y_){
  x=x_;
  y=y_;
  w=100;
  h=20;




//step 1: define body
  BodyDef bd=new BodyDef();
  bd.position.set(box2d.coordPixelsToWorld(x,y));
  bd.type=BodyType.STATIC;

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
        fd.density=1000;
        fd.friction=0.3;
        fd.restitution=0.5;
        body.createFixture(fd);

}

void display(){
Vec2 pos=box2d.getBodyPixelCoord(this.body);
float a=body.getAngle();

  pushMatrix();
  translate(pos.x,pos.y);
  rotate(-a);
  fill(255,0,0);
  stroke(0);
  strokeWeight(2);
  rectMode(CENTER);
  rect(0,0,w,h);
  popMatrix();

}


}