// calculating mean of array

function mean(arr){
   let sum = arr.reduce((comp, curr) => curr += comp, 0);
   return sum / arr.length;
}

let arr = [1,2,3,4,5];

console.log(mean(arr));