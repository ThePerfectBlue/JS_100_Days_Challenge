//  Math.max(...arr)

function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max;
}

function findMax2(arr) {
  return arr.reduce((acc, curr) => (curr > acc ? curr : acc));
}

const arr = [3, 8, -5, 1, 9, 45, 23, -78, 4, 2];

console.log(findMax(arr));
console.log(findMax2(arr));
