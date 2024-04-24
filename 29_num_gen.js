// number range generator

const numRange = (s, e) => {
    let arr = new Array();
    if(s > e) return [];
    while(s <= e){
        arr.push(s);
        s++;
    }

    return arr;
}

console.log(numRange(3, 7));