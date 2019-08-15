function DNA(genes){
  this.genes=[];
  if(genes)
      this.genes=genes;
      else
  {
    for(var i=0;i<lifespan;++i){
    this.genes[i]=p5.Vector.random2D();
    this.genes[i].setMag(maxForce);}
  }
  this.crossover=function(partner){
        var newgenes=[];

         var mid=floor(random(this.genes.length));
        if(mid<=this.genes.length/2)
                  {
                    for(var i=0;i<this.genes.length;++i){
                          if(i>mid)
                                newgenes[i]=this.genes[i];
                            else
                                  newgenes[i]=partner.genes[i];
                                      }

                  }
        else
                  {   for(var i=0;i<this.genes.length;++i){
                              if(i%2==0)newgenes[i]=this.genes[i];
                                else
                                  newgenes[i]=partner.genes[i];
                                      }
                  }

        return new DNA(newgenes);

  }
  this.mutation=function(){
    for(var i=0;i<this.genes.length;++i){
      if(floor(random(150))<=1){
        this.genes[i]=p5.Vector.random2D();
        this.genes[i].setMag(maxForce);
      }
    }
  }

}
