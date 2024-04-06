function sumOfDigits(num) {
  let sum = 0;
  while (num > 0) {
    sum = sum + (num % 10);
    num = Math.floor(num / 10);
  }
  return sum;
}

function sumReduce(num) {
  let arr = Array.from(num.toString(), Number);
  console.log(arr);
  return arr.reduce((accu, curr) => (accu += curr), 0);
}

console.log(sumOfDigits(12345));
console.log(sumReduce(12345));
