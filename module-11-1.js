function parityCheck(){

const arr = [2, 5, 6, 0, 'noize', '25'];
let oddNum = 0;
let evenNum = 0;
let NoNumb = 0;
for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] === 'number') {
    if (arr[i] % 2 == 0) {
      evenNum++;
    }else if (arr [i] %2 !== 0){
      oddNum++;
    }
  } else {
    NoNumb++;
  }
}
console.log ('total evem number: ' + evenNum);
console.log ('total odd number: ' + oddNum);
console.log ('Not are number: ' + NoNumb);

}

parityCheck ();