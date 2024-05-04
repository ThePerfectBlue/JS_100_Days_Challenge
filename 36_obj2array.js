// convert obj to array and vice versa

// learnt about Object.entries( object name)
// Object.fromEntries(array name)

function convert(obj){
    let ans = Object.entries(obj);
    console.log(Object.fromEntries(ans));
    return ans;
}



const obj = {
    name: "ravi",
    age: 24,
    id: "ourkay8003"
}

console.log(convert(obj));
//console.log(convert2([ 'name', 'ravi', 'age', 24, 'id', 'ourkay8003' ]));