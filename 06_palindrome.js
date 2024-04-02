function isPlaindrome(str) {
  str = str.toLowerCase().replace(/\W/g, "");
  let strWords = str.split("").reverse().join("");
  console.log(strWords);
  return str === strWords ? true : false;
}

console.log(isPlaindrome("race Car"));
