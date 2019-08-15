function Population(){
  this.faces=[];
  this.define_pop=function(){
  for(var i=1;i<=4;++i)
            {this.faces[i-1]=new Face(i*200,50);
            this.faces[i-1].define_face();}
          }
      this.applyRandom=function(){
        for(var i=0;i<this.faces.length;++i)
      						{this.faces[i].makeRandom();}
      }

      this.show=function(){
        for(var i=0;i<this.faces.length;++i)
      						{this.faces[i].show_face();}

        for(var i=0;i<this.faces.length-1;++i){
          var x=(this.faces[i].loc.x+this.faces[i+1].loc.x)/2;
                        line(x,0,x,height);
                      }

      }

      this.evaluateFitness=function(){
                           // while(!ok.checked()){
                           //   line(random(width),random(height),random(height),random(width));
                           //    for(var i=0;i<this.faces.length-1;++i)
                           //      {var x=(this.faces[i].loc.x+this.faces[i+1].loc.x)/2;
                           //        if(mouseX<x){
                           //          this.faces[i].fitness+=10;
                           //          break;
                           //        }
                           //        break;
                           //      }
                           //
                           // }
                        }
        }
