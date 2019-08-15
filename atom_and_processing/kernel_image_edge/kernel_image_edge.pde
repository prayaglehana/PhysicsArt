PImage kitten;
PImage kitten2;
boolean f=true;

void setup(){
  size(700,480);
  kitten=loadImage("Adah_sharma_old.jpg");
  kitten2=loadImage("Adah_sharma_old.jpg");
  
  kitten.filter(GRAY);
  kitten2.filter(GRAY);

  image(kitten,0,0);
}

int index(int x,int y){
  return x+y*kitten.width;}

void draw(){    kitten.loadPixels();
                kitten2.loadPixels();
                      for(int y=1;y<kitten.height;++y)
                      {
                        for(int x=1;x<kitten.width;x++){
                         
                         color pix=kitten.pixels[index(x,y)];
                          float new_b=apply_kernel(x,y);
                 
                         
                         //println("new b" +new_b+" old b "+brightness(pix));
                              
                       kitten2.pixels[index(x,y)]=color(new_b);
                       //println(" after chage "+brightness(kitten.pixels[index(x,y)]));
                 
                          
                        }
              
                      }
                      kitten.updatePixels();
                      kitten2.updatePixels();
                      image(kitten2,350,0);
                      noLoop();
                          
        }
        float apply_kernel(int x_co,int y_co){
       
        
                    //float[][] kernel_matrix = {
                    //            {-1, -1, -1},
                    //            {-1, 8, -1},
                    //            {-1, -1, -1}
                    //        };
                     //float[][] kernel_matrix = {
                     //           {0, 1, 0},
                     //           {1, -4, 1},
                     //           {0, 1, 0}
                     //       };
                        //float[][] kernel_matrix = {
                        //        {1/16.0, 2/16.0, 1/16.0},
                        //        {2/16.0, 4/16.0, 2/16.0},
                        //        {1/16.0, 2/16.0, 1/16.0}
                        //    };
                            // float[][] kernel_matrix = {
                            //    {1, 2, 1},
                            //    {2, 4, 2},
                            //    {1, 2, 1}
                            //};
                           
                            //   float[][] kernel_matrix = {
                            //  {0, 0, 0},
                            //   {0, 1, 0},
                            //    {0, 0, 0}
                            //};
                        float sum=0;
                        for(int j=y_co-1,k_y=0;j<=y_co+1;++j,++k_y)
                        {
                           for(int i=x_co-1,k_x=0;i<=x_co+1;++i,++k_x) {
                                  if(i>=0&&i<kitten.width&&j>=0&&j<kitten.height){
                                      float b=brightness(kitten.pixels[index(i,j)]);
                                      sum+=b*kernel_matrix[k_y][k_x];
                                      
                                      if(f)
                                       {println(brightness(kitten.pixels[index(x_co,y_co-1)])+" "+b+"*"+kernel_matrix[k_y][k_x]);}
                                  }
                            }
                        }
                       f=false;
                        
                        return sum;
      
                          
          
        }
        
                float apply_kernel_2(int x_co,int y_co){
       
        
                    float[][] kernel_matrix = {
                                {-1, -1, -1},
                                {-1, 8, -1},
                                {-1, -1, -1}
                            };
            
                        float sum=0;
                        for(int j=y_co-1,k_y=0;j<=y_co+1;++j,++k_y)
                        {
                           for(int i=x_co-1,k_x=0;i<=x_co+1;++i,++k_x) {
                                  if(i>=0&&i<kitten.width&&j>=0&&j<kitten.height){
                                      float b=brightness(kitten.pixels[index(i,j)]);
                                      sum+=b*kernel_matrix[k_y][k_x];
                                      
                                      if(f)
                                       {println(brightness(kitten.pixels[index(x_co,y_co-1)])+" "+b+"*"+kernel_matrix[k_y][k_x]);}
                                  }
                            }
                        }
                       f=false;
                        
                        return sum;
      
                          
          
        }