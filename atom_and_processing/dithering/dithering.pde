PImage kitten;

   int factor =10;
   
void setup(){
  size(700,480);
  kitten=loadImage("Adah_sharma_old.jpg");
  kitten.filter(GRAY);
  image(kitten,0,0);
}

int index(int x,int y){
  return x+y*kitten.width;}

void draw(){    kitten.loadPixels();
                      for(int y=0;y<kitten.height;++y)
                      {
                        for(int x=0;x<kitten.width;x++){
                         
                          color pix=kitten.pixels[index(x,y)];
                          
                          float oldR=red(pix);
                          float oldG=green(pix);
                          float oldB=blue(pix);
                       
                          int newR=round(factor*oldR/255)*(255/factor);
                          int newG=round(factor*oldG/255)*(255/factor);
                          int newB=round(factor*oldB/255)*(255/factor);
                          kitten.pixels[index(x,y)]=color(newR,newG,newB);
                          
                          
                          float errR=oldR-newR;
                          float errG=oldG-newG;
                          float errB=oldB-newB;
                          
                          int index;
                          color c;
                          float r,g,b;
                          
                          
                          
                          if(x<(350-1))
                         { index=index(x+1,y);
                         c=kitten.pixels[index];
                         r=red(c);
                          g=green(c);
                         b=blue(c);
                         r=r+errR*7/16.0;
                          g=g+errG*7/16.0;
                          b=b+errB*7/16.0;
                         kitten.pixels[index]=color(r,g,b);}
                         
                         if(x>0&&y<(480-1))
                          {index=index(x-1,y+1);
                       c=kitten.pixels[index];
                         r=red(c);
                         g=green(c);
                       b=blue(c);
                         r=r+errR*3/16.0;
                          g=g+errG*3/16.0;
                          b=b+errB*3/16.0;
                         kitten.pixels[index]=color(r,g,b);}
                         
                         
                         if(y<(480-1))
                       { index=index(x,y+1);
                        c=kitten.pixels[index];
                      r=red(c);
                       g=green(c);
                      b=blue(c);
                         r=r+errR*5/16.0;
                          g=g+errG*5/16.0;
                          b=b+errB*5/16.0;
                           kitten.pixels[index]=color(r,g,b);
                       }
                         
                         
                         
                         if(x<(350-1)&&y<(480-1))
                          {index=index(x+1,y+1);
                        c=kitten.pixels[index];
                         r=red(c);
                         g=green(c);
                      b=blue(c);
                         r=r+errR*1/16.0;
                          g=g+errG*1/16.0;
                          b=b+errB*1/16.0;
                         kitten.pixels[index]=color(r,g,b);}
                         
                         
                          
                          
                          //kitten.pixels[index(x+1,y  )]=0;
                          //kitten.pixels[index(x-1,y+1)]=0;    
                          //kitten.pixels[index(x  ,y+1)]=0;
                          //kitten.pixels[index(x+1,y+1)]=0;
                        }
                      }kitten.updatePixels();
                        
                        
                        image(kitten,350,0);
                        
                        noLoop();
                          
        }