function calculateAverage(arr) {
  let sum = arr.reduce((accu, curr) => accu + curr, 0);
  return sum / arr.length;
}

const arr = [10, 40, 25, 25];

console.log(calculateAverage(arr));
