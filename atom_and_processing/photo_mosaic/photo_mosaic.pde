PImage adah;
PImage smaller;

PImage[] allImages;
float[] brightness;
PImage[] brightImages;

int scl=10;

int w,h;
void setup(){
  size(1920,1200);
  adah=loadImage("adah_2.jpg");
  
  
  File[] files=listFiles(sketchPath("data/char_photos"));
  println(files[0].toString());
  //printArray(files);
  allImages=new PImage[files.length-1];
  brightness=new float[allImages.length];
  brightImages=new PImage[256];
  
  
  for(int i=0;i<allImages.length;++i){
  allImages[i]=loadImage(files[i].toString());
        float avg=0;
        for(int j=0;j<allImages[i].pixels.length;++j)
              {float b=brightness(allImages[i].pixels[j]);
              avg+=b;}
              avg/=allImages[i].pixels.length;
              brightness[i]=avg;
  }
  
  
  //printArray(brightness);
  //brightness=new PImage[256];
  
 for(int i=0;i<brightImages.length;++i){
             float record=256;
             for(int j=0;j<brightness.length;++j)
                     {float diff=abs(i-brightness[j]);
                     if(diff<record)
                         {record=diff;
                           brightImages[i]=allImages[j];
                         }
                   }
               
 }
 
  
  
 w =adah.width/scl;
 h =adah.height/scl;
  
  smaller=createImage(w,h,RGB);
  smaller.copy(adah,0,0,adah.width,adah.height,0,0,w,h);
}
void draw(){
  smaller.loadPixels();
  for(int x=0;x<w;++x){
        for(int y=0;y<h;++y){
                          int index=x+y*w;
                          color c=smaller.pixels[index];
                          
                          int b_index=int(brightness(c));
                    //    fill(c);
                    //    noStroke();
                    //   // ellipseMode(CENTER);
                    //rect(x*scl,y*scl,scl,scl);
                      image(brightImages[b_index],x*scl,y*scl,scl,scl);
                    }
  }
  //image(adah,0,0);
  //image(smaller,0,0);
  noLoop();
}
  