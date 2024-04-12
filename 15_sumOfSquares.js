// sum of squares

// function sumOfSquares(arr){
//     let sum = 0;
//     for(let i = 0; i < arr.length; i++){
//         sum += arr[i] ** 2;
//     }
//     return sum;
// }


// CAN USE "FOR OF" METHOD ALSO
for(let num of arr){
    sum += num ** 2;
}

function sumOfSquares(arr){
   return arr.reduce((acc, curr) => acc += curr ** 2, 0);

}


const arr = [1, 2, 3]

console.log(sumOfSquares(arr));