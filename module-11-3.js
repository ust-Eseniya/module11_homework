function example(func, b){

    func();
  
    return function(){
  
      console.log(a + b)
  
    }
  
  }
  
  function argFunc(a){
  
    console.log(a)
  
  }
  
  const resultFunc = example(argFunc);
  
  resultFunc(); 
  
  argFunc(1)
  example(argFunc, 3)
