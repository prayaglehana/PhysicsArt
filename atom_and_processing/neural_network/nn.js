function sigmoid(x){
  return 1/(1+Math.exp(-x));
}


function NeuralNetwork(numI,numH,numO){
  contructor(input_nodes,hidden_nodes,output_nodes){
                      this.input_nodes=input_nodes;
                      this.hidden_nodes=hidden_nodes;
                      this.output_nodes=output_nodes;

                      this.weights_ih=new Matrix(this.hidden_nodes,this.input_nodes);
                      this.weights_ho=new Matrix(this.output_nodes,this.hidden_nodes);


                      this.weights_ih.randomize();
                      this.weights_ho=randomize();


                      this.bias_h=new Matrix(this.hidden_nodes,1);
                      this.bias_o=new Matrix(this);
  }

  

  feedforward(input_array){

                            let inputs=Matrix.fromArray(input_array);
                            let hidden=Matrix.multiply(this.weights_ih,input);
                            hidden.add(this.bias_h);
                            hidden.map(sigmoid);


                            let oupt=Matrix.multiply(this.weights_ho,hidden);
                            hidden.add(this.bias_o);
                            output.map(sigmoid);

                            return output.toArray();
                  }

                  train(inputs,targets){
                    let output=this.feedforward(inputs);

                    outputs=Matrix.fromArray(outputs);
                    targets=Matrix.fromArray(targets);

                    let error=Matrix.subtract(targets,outputs);
                  }





}
