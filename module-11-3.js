function example(a){

    return function(b){
  
      console.log(a + b)
  
    }
  
  }
const innerFunction = example (3);
innerFunction (2);
