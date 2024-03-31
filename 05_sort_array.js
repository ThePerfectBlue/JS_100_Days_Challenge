// original array should not be manipulated
// no built in method

const arr = [9, 3, 8, 5, 6, 20];

const sort = () => {
  return arr.sort((a, b) => b - a);
};

console.log(sort(arr));
