// factorial

function factorial(num) {
  let fact = 1;

  while (num !== 0) {
    fact = fact * num;
    num--;
  }
  return fact;
}

console.log(factorial(1));
