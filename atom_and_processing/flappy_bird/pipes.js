Pipes=function(){
  let upper_pipe=loadImage('kittens/pipe_upper.png');
  let lower_pipe=loadImage('kittens/pipe_lower.png');
  this.pipe_width=60;
  this.taken=false;
  this.pos=createVector(width-this.pipe_width,0);
  if(random(1)<0.3)
  this.gap_len=floor(random(65,100));
  else
  this.gap_len=floor(random(85,150));


  this.gap_pos=floor(random(45,height-this.gap_len-30));
    this.bottom_y =this.pos.y+this.gap_pos+this.gap_len;

this.update=function(){
  this.pos.x-=1;
}

this.show=function(){

        fill(0,200,0);
        //upper pipe
        rect(this.pos.x,this.pos.y,this.pipe_width,this.gap_pos);
        image(upper_pipe,this.pos.x-185,this.pos.y,450,this.gap_pos*1.178);
        //lower pipe

        rect(this.pos.x,this.bottom_y,this.pipe_width,height);
        image(lower_pipe,this.pos.x-196,this.bottom_y-93,450,height*1.16 );


        }
    this.offscreen=function(){
      return this.pos.x<-this.pipe_width;
    }

    this.hit=function(){
      if(bird.pos.x>this.pos.x&&bird.pos.x<this.pos.x+this.pipe_width){
            if(bird.pos.y<this.gap_pos)
                return true;//upper
              else
              {
                if(bird.pos.y>this.bottom_y)
                      return true;
                else
                      {
                        return false;}


              }
      }
      else
      return false;

    }

}
