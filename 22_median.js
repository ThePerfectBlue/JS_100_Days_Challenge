// finding median of array

function median(arr){
    const n = arr.length;
    const mid = Math.floor(n/2);
    arr.sort((a,b) => a-b);

    if(arr.length % 2 == 0){
        let med = (arr[mid-1]+arr[mid])/2;
        return med;
    }else{
        let med = arr[mid];
        return med;
    }
}

//let arr = [1,2,3,4,5];
let arr = [1,2,3,4,5,6];

console.log(median(arr));