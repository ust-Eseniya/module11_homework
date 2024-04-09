const bar = function (a, b){
    for(let i = a; i <= b; i++){
    console.log(i)
    }
  }
  const intervalId = setInterval(bar, 1000, 5, 15)
  
  setTimeout(function(){
    clearInterval(intervalId)
  }, 5000)
  