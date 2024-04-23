// finding mode of an array

function findMode(arr){
    let mode = 0;
    let count = {};

    for(let i of arr){
        count[i] = (count[i] || 0) + 1;
        if(count[i] > mode) mode = count[i];
    }
    return mode;
}

const arr = [1,2,2,3,4,5,5,5,6,6,7,8,8,8,8];

console.log(findMode(arr));