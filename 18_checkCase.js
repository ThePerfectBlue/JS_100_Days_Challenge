// check upper case or lower case

function checkCase(char){
    // if(char.charCodeAt(0) >= 65 && char.charCodeAt(0) <=90){
    //     return console.log("Char is uppercase");
    // }
    // else if(char.charCodeAt(0) >= 97 && char.charCodeAt(0) <=122){
    //     return console.log("Char is lowercase");
    // }

    return char === char.toUpperCase();
}

console.log(checkCase("A"));