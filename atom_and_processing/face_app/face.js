function Face(x,y){
  this.loc=new p5.Vector(x,y);

  this.fitness=0;

          this.edges_v=   [];
          this.ears_v=    [];
          this.eyebrows_v=[];
          this.nose_v=    [];
          this.eyes_v=    [];
          this.lips_v=    [];


          this.r=13;

              this.makeRandom=function(){  // this.change_ears();

             this.change_edges();

           //  this.change_eyes();
           // this.change_eyebrows();
           //  this.change_nose();
              // this.change_lips();




          }

          this.change_nose=function(){


          }

          this.change_edges=function(){
            // this.edges_v[0].x+=1;
            // this.edges_v[1].x+=10;
            // this.edges_v[2].x+=10
            // this.edges_v[3].x+=10;
            // this.edges_v[4].x+=10;
            // this.edges_v[5].x+=10;
            // this.edges_v[6].x+=10;
            // this.edges_v[7].x+=10;
            // this.edges_v[8].x+=10;
            // this.edges_v[9].x+=10;

              this.upper_head(false);
              // this.left_head(true);
              // this.bottom_head(true);
          }

          this.upper_head=function(make_big){
            if(make_big){
               this.edges_v[0].x-=1;this.edges_v[0].y-=6;
               this.edges_v[1].x-=1;this.edges_v[1].y-=5;
              this.edges_v[2].x-=2; this.edges_v[2].y-=4;
              this.edges_v[3].x-=3;this.edges_v[3].y-=5;
              this.edges_v[4].x-=4;this.edges_v[4].y-=4;
            }
            else{
              this.edges_v[0].x+=2;this.edges_v[0].y+=5;
              this.edges_v[1].x+=2;this.edges_v[1].y+=4;
             this.edges_v[2].x+=2; this.edges_v[2].y+=4;
             this.edges_v[3].x+=0;this.edges_v[3].y+=4;
            this.edges_v[4].x+=1;this.edges_v[4].y+=7;
            }
          }

          this.change_eyebrows=function(){
            this.edges_v[0].x+=1;
            this.edges_v[1].x+=10;
            this.edges_v[2].x+=10
            this.edges_v[3].x+=10;
            this.edges_v[4].x+=10;
            this.edges_v[5].x+=10;
            this.edges_v[6].x+=10;
            this.edges_v[7].x+=10;
            this.edges_v[8].x+=10;
            this.edges_v[9].x+=10;
          }



          this.change_eyes=function(){
            this.eyes_v[0].x+=10;
            this.eyes_v[1].x+=10;
            this.eyes_v[2].x+=10
            this.eyes_v[3].x+=10;
            this.eyes_v[4].x+=10;
            this.eyes_v[5].x+=10;
            this.eyes_v[6].x+=10;
            this.eyes_v[7].x+=10;
            this.eyes_v[8].x+=10;
            this.eyes_v[9].x+=10;
          }


            this.define_face=function(){


            this.define_edges_v();
           this.define_ears_v();
            this.define_eyes_v();
            this.define_eyebrows_v();
            this.define_nose_v();
            this.define_lips_v();

            }



                        this.define_edges_v=function(){

                          this.edges_v[0]=createVector(0,0);
                          this.edges_v[1]=createVector(-20,3);
                          this.edges_v[2]=createVector(-30,8);
                          this.edges_v[3]=createVector(-40,15);
                          this.edges_v[4]=createVector(-54,42);
                          this.edges_v[5]=createVector(-55,97);
                          this.edges_v[6]=createVector(-51,130);
                          this.edges_v[7]=createVector(-49,135);
                          this.edges_v[8]=createVector(-34,155);
                          this.edges_v[9]=createVector(-10,170);
                        }



            this.define_eyes_v=function(){


              this.eyes_v[0]=createVector(-10,0);
               this.eyes_v[1]=createVector(-18,-5);
               this.eyes_v[2]=createVector(-25,-6);
              this.eyes_v[3]=createVector(-30,-6);
              this.eyes_v[4]=createVector(-35,-6);
              this.eyes_v[5]=createVector(-38,-5);
              this.eyes_v[6]=createVector(-41,-4);
              this.eyes_v[7]=createVector(-45,-2);
              this.eyes_v[8]=createVector(-44,0);
              this.eyes_v[9]=createVector(-38,3);
              this.eyes_v[10]=createVector(-26,5);
              this.eyes_v[11]=createVector(-21,4);
              this.eyes_v[12]=createVector(-18,4);
               this.eyes_v[13]=createVector(-15,3);
               this.eyes_v[14]=createVector(-13,2);
              this.eyes_v[15]=createVector(-10,0);





            }



            this.define_eyebrows_v=function(){


              this.eyebrows_v[0]=createVector(0,0);
              this.eyebrows_v[1]=createVector(-10,-8);
              this.eyebrows_v[2]=createVector(-22,-12);
              this.eyebrows_v[3]=createVector(-30,-13);
              this.eyebrows_v[4]=createVector(-36,-12);
              this.eyebrows_v[5]=createVector(-48,-4);
              this.eyebrows_v[6]=createVector(-38,-7);
              this.eyebrows_v[7]=createVector(-30,-7);
              this.eyebrows_v[8]=createVector(-20,-6);
              this.eyebrows_v[9]=createVector(-5,-3);
              this.eyebrows_v[10]=createVector(0,0);
            }

            this.define_lips_v=function(){
               this.lips_v[0]=createVector(0,0);
               this.lips_v[1]=createVector(-4,-1);
               this.lips_v[2]=createVector(-5,-2);
               this.lips_v[3]=createVector(-10,-3);//top point
               this.lips_v[4]=createVector(-14,-2);
               this.lips_v[5]=createVector(-16,-1);
               this.lips_v[6]=createVector(-19,0);
               this.lips_v[7]=createVector(-23,2);//left corner
               this.lips_v[8]=createVector(-20,5);
               this.lips_v[9]=createVector(-15,7);
               this.lips_v[10]=createVector(-12,8);
               this.lips_v[11]=createVector(-8,9);
               this.lips_v[12]=createVector(-4,10);
               this.lips_v[13]=createVector(0,10);//bottom point


            }


            this.define_nose_v=function(){
              this.nose_v[0]=createVector(-7,0);
              this.nose_v[1]=createVector(-5,3);
              this.nose_v[2]=createVector(-5,10);
              this.nose_v[3]=createVector(-7,20);
              this.nose_v[4]=createVector(-8,25);
              this.nose_v[5]=createVector(-12,30);
              this.nose_v[6]=createVector(-15,37);
              this.nose_v[7]=createVector(-13,40);
              this.nose_v[8]=createVector(-10,40);
              this.nose_v[9]=createVector(-8,37);
              this.nose_v[10]=createVector(-5,37);
              this.nose_v[11]=createVector(-3,40);
              this.nose_v[12]=createVector(-1,41);
              this.nose_v[13]=createVector(0,41);



            }

            this.define_ears_v=function(){
              this.ears_v[0]=createVector(0,0);
              this.ears_v[1]=createVector(-5,-17);
              this.ears_v[2]=createVector(-7,-19);
             this.ears_v[3]=createVector(-9,-20);
               this.ears_v[4]=createVector(-12,-16);
               this.ears_v[5]=createVector(-13,-10);
               this.ears_v[6]=createVector(-11,-2);
               this.ears_v[7]=createVector(-10,7);
              this.ears_v[8]=createVector(-10,8);
             this.ears_v[9]=createVector(-9,16);
              this.ears_v[10]=createVector(-7,19);
            this.ears_v[11]=createVector(-5,21);
               this.ears_v[12]=createVector(-3,20);
               this.ears_v[13]=createVector(-1,19);



            }



         //    this.define_ears_v=function(){
         //   this.ears_v.push(new createVector(0,0));
         //
         //
         //                    for(var theta=0, m=1;theta<=PI;theta+=0.1)
         //                                         {this.ears_v.push(new createVector(m*this.r*(cos(theta)-1),-m*this.r*sin(theta)));
         //                                            if(theta<=PI/5.3)
         //                                                        m+=0.18;
         //                                            else
         //                                                  m-=0.05;
         //
         //                                         }
         //
         //                                //  this.ears_v.push(new createVector(this.ears_v[this.ears_v.length-1].x-4,0));
         //                                 //this.ears_v.push(new createVector(this.ears_v[this.ears_v.length-1].x,4));
         //
         //                               for(var theta=0,m=1;theta<=2*PI/3.0;theta+=0.1)
         //                                        {this.ears_v.push(new createVector(-m*this.r*(cos(theta)+1)+6,m*this.r*sin(theta)+this.r/3.5+3));
         //                                        if(theta<=PI*0.6)
         //                                                m-=0.01;
         //                                        else
         //                                          m-=0.24;
         //
         //                               }
         // }





         this.show_face=function(){
                                this.create_symmetry();



                                this.show_edges();

                                this.show_eyes();

                                this.show_eyeballs();


                                this.show_ears();





                                this.show_eyebrows();

                                this.show_nose();

                                this.show_lips();

                                //line(this.loc.x,this.loc.y,this.loc.x,600);
                              }
        this.show_lips=function(){

                                push();
                                  //  stroke(0);
                                    strokeWeight(1);
                                  fill(227,93,100);
                                  translate(this.loc.x,this.loc.y);
                                  translate(0,133);



                                  beginShape();
                                            for(var i=0;i<this.lips_v.length;++i)
                                                    {

                                                    vertex(this.lips_v[i].x,this.lips_v[i].y);

                                                    }
                                      endShape();

                                beginShape();
                                           vertex(this.lips_v[7].x,this.lips_v[7].y);
                                           vertex(0,5);
                                           vertex(-1*this.lips_v[7].x,this.lips_v[7].y);
                                           endShape();

                                      pop();


                              }


              this.show_nose=function(){
                push();
                  //  stroke(0);
                    strokeWeight(1);
                    noFill();
                  //fill(250,204,140);
                  translate(this.loc.x,this.loc.y);
                  translate(0,76);



                  beginShape();
                            for(var i=0;i<this.nose_v.length;++i)
                                    {

                                    vertex(this.nose_v[i].x,this.nose_v[i].y);

                                    }
                      endShape();
                      pop();
              }





            this.show_eyebrows=function(){
              push();
                //  stroke(0);
                  strokeWeight(1);
                fill(80);
                translate(this.loc.x,this.loc.y);
                translate(-3,53);



      beginShape();
                  for(var i=0;i<this.eyebrows_v.length/2;++i)
                          {

                          vertex(this.eyebrows_v[i].x,this.eyebrows_v[i].y);

                          }
                    endShape();


                    beginShape();
                                for(var i=this.eyebrows_v.length/2;i<this.eyebrows_v.length;++i)
                                        {

                                        vertex(this.eyebrows_v[i].x,this.eyebrows_v[i].y);

                                        }
                                  endShape();





                pop();
            }




      this.show_eyeballs=function(){
        push();
        strokeWeight(1);
        fill(80);
        translate(this.loc.x,this.loc.y);
        translate(this.eyes_v[0].x,62);


        ellipse(this.eyes_v[13].x,0,10,10);
        pop();
        //eyeball_right
        push();
        strokeWeight(1);
        fill(80);
        translate(this.loc.x,this.loc.y);
        translate(-1*this.eyes_v[0].x,62);


        ellipse(-1*this.eyes_v[13].x,0,10,10);
        pop();

      }

      this.show_eyes=function(){

        push();
          //  stroke(0);
            strokeWeight(1);
            fill(240);
          //fill(250,204,140);
          translate(this.loc.x,this.loc.y);
          translate(0,63);



          beginShape();
                    for(var i=0;i<this.eyes_v.length/2;++i)
                            {

                            vertex(this.eyes_v[i].x,this.eyes_v[i].y);

                            }
              endShape();

              beginShape();
                        for(var i=this.eyes_v.length/2;i<this.eyes_v.length;++i)
                                {

                                vertex(this.eyes_v[i].x,this.eyes_v[i].y);

                                }
                  endShape();
              pop();
      }
      this.show_edges=function(){
                            push();
                            //  stroke(0);
                              strokeWeight(1);
                            fill(255,219,172);

                            translate(this.loc.x,this.loc.y);


                      beginShape();
                              for(var i=0;i<this.edges_v.length;++i)
                                      {
                                      //  ellipse(this.face_v[i].x,this.face_v[i].y,10,10);

                                      vertex(this.edges_v[i].x,this.edges_v[i].y);
                                      //vertex(10,20);
                                      }


                       endShape();




                            pop();
      }
                    this.show_ears=function(){  push();
                                              //  stroke(0);
                                                strokeWeight(1);
                                              fill(241,194,125);
                                              translate(this.loc.x,this.loc.y);
                                              translate(this.edges_v[4].x,this.edges_v[4].y+27);



                                    beginShape();
                                                for(var i=0;i<this.ears_v.length/2;++i)
                                                        {

                                                        vertex(this.ears_v[i].x,this.ears_v[i].y);

                                                        }
                                                  endShape();


                                                  beginShape();
                                                              for(var i=this.ears_v.length/2;i<this.ears_v.length;++i)
                                                                      {

                                                                      vertex(this.ears_v[i].x,this.ears_v[i].y);

                                                                      }
                                                                endShape();





                                              pop();
        }

                    this.create_symmetry=function(){

                      var l=this.edges_v.length;
                                   for(var i=l-1;i>=0;--i){
                                     this.edges_v.push(new createVector(-1*this.edges_v[i].x,this.edges_v[i].y));
                                   }
                      l=this.ears_v.length;
                      var offset=2*this.edges_v[4].x;
                      for(var i=l-1;i>=0;--i){

                        this.ears_v.push(new createVector(-1*this.ears_v[i].x-offset,this.ears_v[i].y));
                      }
                      l=this.eyebrows_v.length;
                      var offset=2*(this.eyebrows_v[0].x+3);
                      for(var i=l-1;i>=0;--i){

                        this.eyebrows_v.push(new createVector(-1*this.eyebrows_v[i].x+offset,this.eyebrows_v[i].y));
                      }
                      l=this.eyes_v.length;
                      var offset=2*(this.eyebrows_v[0].x);
                      for(var i=l-1;i>=0;--i){

                        this.eyes_v.push(new createVector(-1*this.eyes_v[i].x+offset,this.eyes_v[i].y));
                      }

                      l=this.nose_v.length;
                    //  var offset=2*(this.nose_v[0].x);
                      for(var i=l-1;i>=0;--i){

                        this.nose_v.push(new createVector(-1*this.nose_v[i].x,this.nose_v[i].y));
                      }
                      l=this.lips_v.length;
                    //  var offset=2*(this.nose_v[0].x);
                      for(var i=l-1;i>=0;--i){

                        this.lips_v.push(new createVector(-1*this.lips_v[i].x,this.lips_v[i].y));
                      }
                    }
}
