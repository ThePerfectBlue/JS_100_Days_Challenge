function reverseString(str){
    str = str.trim();
    //str = Array.from(str);
    let newStr = "";

    for(let i = str.length-1; i >= 0; i--){
        newStr += str[i];
    }
    return console.log(newStr);
}

reverseString("HarryPotter");

//Library

let hop = reverseString("Hoppa")

console.log(hop);

//  split()  =>  .reverse()  => .join("")