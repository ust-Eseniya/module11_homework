function getTypeOfNumber (num) {
    if (num > 1000){
      console.log('Данные не верны')
    }else if (num === 0 || num === 1) {
      console.log('Число "0" или "1" не является ни простым, ни составным')
    } else {
      let primeNumber = true;
      
      for (let i = 2; i < num; i++) {
        if (num % i === 0) {
          primeNumber = false;
          break;
        }
      }
      console.log (primeNumber ? 'Вы ввели простое число' : 'Вы ввели составное число')
    }
  }
  
  getTypeOfNumber(10000)