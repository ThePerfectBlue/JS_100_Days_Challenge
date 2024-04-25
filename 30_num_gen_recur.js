// number generatio nsuing recursion

const numGen = (a , b, arr = []) => {
    if(a > b) return arr;
    arr.push(a);
    return numGen(a+1, b, arr);
}

console.log(numGen(3, 7));