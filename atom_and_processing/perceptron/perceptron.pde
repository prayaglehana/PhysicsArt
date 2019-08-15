Perceptron brain;

Point[] points=new Point[200];

void setup(){
  size(800,800);
  brain=new Perceptron();
  
  for(int i=0;i<points.length;++i){
          points[i]=new Point();}
  //float[] inputs={-1,0.5};
  //int guess=brain.guess(inputs);
  
}

void draw(){
  background(255);
  stroke(0);
  line(0,0,width,height);
  for(Point pt:points){
    pt.show();}
    
    
    
    for(Point  pt: points){
      float[] inputs={pt.x,pt.y};
      int target=pt.label;
      
      int guess=brain.guess(inputs);
      if(guess==target){
        fill(0,255,0);}
        else{
        fill(255,0,0);}
        noStroke();
        ellipse(pt.x,pt.y,16,16);
      }
      
      stroke(0);

       line(0,0,width,abs(brain.weights[0]*width/brain.weights[1]));
       
    
    }
    
    void mousePressed(){
    
    
    for(Point  pt: points){
      float[] inputs={pt.x,pt.y};
     
      brain.train(inputs,pt.label);
      

      }
      println(brain.weights[0],brain.weights[1]);
      
     
      
    }