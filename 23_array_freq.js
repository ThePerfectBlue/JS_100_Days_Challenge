// freq object of an array

function freq(nums){
    let obj = new Object;

    for(let num of nums){
        obj[num] = (obj[num] || 0) + 1;
    }
    return obj;
}

const nums = [1,1,2,8,8,8,8,6,6,6];

console.log(freq(nums));