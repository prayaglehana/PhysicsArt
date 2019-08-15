PImage img;
PImage sorted;
void setup(){
  size(800,400);
  img=loadImage("sunflower.jpg");
  sorted=createImage(img.width,img.height,RGB);
  sorted.loadPixels();
  //for(int i=0;i<sorted.pixels.length;++i)
  //            {sorted.pixels[i]=img.pixels[i];}
  sorted=img.get();
  
      
      
      //selecion sort
      for(int i=0;i<sorted.pixels.length;++i){
                      
                      //if(green(sorted.pixels[i])>120&&red(sorted.pixels[i])>120)
                      //   { 
                           float record=-1;
                      int selectedPixel=i;
                              for(int j=i;j<sorted.pixels.length;++j)
                                          {
                                            color pix=sorted.pixels[j];
                                            float b=brightness(pix);
                                            
                                                        if(b>record)
                                                        {
                                                          selectedPixel=j;
                                                          record=b;
                                                        }
                                                          
                                          }
                                          //swap
                                          color temp=sorted.pixels[i];
                                          sorted.pixels[i]=sorted.pixels[selectedPixel];
                                          sorted.pixels[selectedPixel]=temp;
                           
                           // }
                          
                    }
      sorted.updatePixels();
      
}

void draw(){
  background(0);
  image(img,0,0);
  image(sorted,width/2,0);
} 