function parityCheck(arr){

let oddNum = 0;
let evenNum = 0;
for (let i = 0; i < arr.length; i++) {
  if (!isNaN(arr[i])) {
    if (arr[i] % 2 === 0) {
      evenNum++;
    } else {
      oddNum++;
    }
   }
  }
 }

const arr = [2, 5, 6, 0, 'noize', '25'];

parityCheck (arr);
