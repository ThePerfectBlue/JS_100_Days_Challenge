// repeat a string given number of times

// function repeat(str, n){
//     let newStr = '';
//     while(n !== 0){
//         newStr = newStr + str;
//         n--;
//     }
//     return newStr;
// }

function repeat(str, n){
    return n > 0 ? str.repeat(n) : str;

}

console.log(repeat("abc", 1));