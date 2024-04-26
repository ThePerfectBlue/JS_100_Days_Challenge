function passwordValid(pass){
    if(pass.length < 8) return false;

    let hasLowerCase = false;
    let hasUpperCase = false;
    let hasDigit = false;

    for(let char of pass){
        if(char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90)    hasLowerCase = true;
        if(char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122)    hasUpperCase = true;
        if(char >= 0 && char <= 9)    hasDigit = true;
    }
    return (hasLowerCase && hasUpperCase && hasDigit) ? true : false;

}

console.log(passwordValid("123bcABCa"));