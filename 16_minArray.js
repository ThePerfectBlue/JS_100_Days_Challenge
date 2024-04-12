const arr = [3,6,8,9,5,2,8];

// function findMin(arr){
//     let min = arr[0];
//     for(let i = 1; i < arr.length; i++){
//         if(arr[i] < min) min = arr[i];
//     }
//     return min;
// }

function findMin(arr){
    arr.sort((a, b) => a-b);

    return arr[0];
}

// MATH
// return math.min(...arr);

console.log(findMin(arr));
