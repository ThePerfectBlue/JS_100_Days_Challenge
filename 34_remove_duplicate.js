function removeDuplicate(arr){
    return [...new Set(arr)];
    
}

console.log(removeDuplicate([1,8,2,2,3,8,3,3,4,5,5,6,7]));
console.log(removeDuplicate(['a','a','b','b','c']));