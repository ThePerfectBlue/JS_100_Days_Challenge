// arrays are equal or not
// every() method

function equalArray(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  return arr1.every((curr, index) => {
    return curr === arr2[index];
  });
}

const arr1 = [2, 4, 6, 8, 0, 5];
const arr2 = [2, 4, 6, 8, 0];

console.log(equalArray(arr1, arr2));
