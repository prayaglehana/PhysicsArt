function Block(rx,ry,rw,rh)
{
  this.rx=rx;
  this.ry=ry;
  this.rw=rw;
  this.rh=rh;
  this.show=function()
            {
              fill(255,0,0);
              rect(this.rx,this.ry,this.rw,this.rh);
            }
  this.collide_with=function(x,y)
            {if(x>this.rx&&x<this.rx+this.rw&&y>this.ry&&y<this.ry+this.rh)
                return true;
                else
                return false;
              }
  }
