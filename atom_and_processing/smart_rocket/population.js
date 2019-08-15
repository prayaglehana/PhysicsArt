function Population(){
  this.rockets=[];
  this.popsize=80;
  this.maxFit;
  this.index_maxFit;
    this.sum=0;


  for(var i=0;i<this.popsize;++i)
    this.rockets[i]=new Rocket();

  this.run=function(){
    for(var i=0;i<this.popsize;++i){


            this.rockets[i].update();

              this.rockets[i].show(false);

    }

  }


  this.evaluate=function(){
   this.rockets[0].calcFitness();
   this.maxFit=this.rockets[0].fitness;
   index_maxFit=0;
    this.sum=0;

          for(var i=0;i<this.popsize;++i){
                this.rockets[i].calcFitness();

                //this.sum+=this.rockets[i].fitness;
                if(this.rockets[i].fitness>this.maxFit)
                     { this.maxFit=this.rockets[i].fitness;
                       index_maxFit=i;}
                        }

           for(var i=0;i<this.popsize;++i){
             //console.log("initially  "+this.rockets[i].fitness+" i "+i);
             if(i!=index_maxFit)this.rockets[i].fitness/=2;
          this.rockets[i].fitness/=this.maxFit;

            // console.log(" finally  "+this.rockets[i].fitness);
            // console.log(this.rockets[i]);

         }
         //console.log(" maxFit rocket "+index_maxFit);



  }
this.show_max_fit_rkt=function(){

  this.rockets[index_maxFit].pos=createVector(width/2,height);
  this.rockets[index_maxFit].vel=createVector();
	this.rockets[index_maxFit].acc=createVector();
	this.rockets[index_maxFit].crashed=false;
	this.rockets[index_maxFit].completed=false;
  count=0;
  //console.log(this.rockets[this.index_maxFit]);
//  frameRate(1);
  while(count<lifespan)
  {
  // background(51);
  //  console.log("count"+count);
  this.rockets[index_maxFit].update();
  this.rockets[index_maxFit].show(true);

  ++count;}
//frameRate(60);

}

  this.selection_of_fit=function(){
    var newRockets=[];
    for(var i=0;i<this.rockets.length;++i)
    {var parentA=this.rockets[this.acceptReject()];
      var parentB=this.rockets[this.acceptReject()];
      var child_dna=parentA.dna.crossover(parentB.dna);
      child_dna.mutation();
      newRockets[i]=new Rocket(child_dna);}

      this.rockets=newRockets;
  }


  this.acceptReject=function(){
    while(true)
          {var index=floor(random(this.popsize));
            var n=map(this.rockets[index].fitness,0,1,0,100);
            var r=random(100);

                if(r<=n)
                return index;

          }

  }
  this.snapping=function(){
      this.rockets[0].calcFitness();
            var max_temp_fitness=this.rockets[0].fitness;
            var temp_index=0;
                  for(var i=0;i<this.rockets.length;++i){
                              this.rockets[i].calcFitness();
                            if(this.rockets[i].fitness>max_temp_fitness){
                              temp_index=i;
                              max_temp_fitness=this.rockets[i].fitness;
                              }
                          }
                for(var i=0;i<this.rockets.length;++i)
                {var r=floor(random(count));
                  if(i!=temp_index)
                    {
                          for(var j=0;j<r;++j)
                                {
                                    if(random(1)<=0.4)
                                      {
                                        this.rockets[i].dna.genes[r]=this.rockets[temp_index].dna.genes[r];


                                        }
                                }

                      }
                }


        }

}
