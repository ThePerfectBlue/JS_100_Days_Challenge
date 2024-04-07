// remove duplicate elements from an array
// new Set()

function findDuplicate(arr) {
  //let newArr = new Set(arr.sort()); // => returns in a array format
  let newArr = [...new Set(arr.sort())];

  return newArr;
}

const arr1 = [1, 5, 3, 6, 6, 5, 9, 7, 2];
const arr2 = [];

console.log(findDuplicate(arr1));
