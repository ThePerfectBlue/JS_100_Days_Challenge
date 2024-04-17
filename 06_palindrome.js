function isPlaindrome(str) {
  str = str.toLowerCase().replace(" ", "");
  let strWords = str.split("").reverse().join("");
  console.log(strWords);
  return str === strWords ? true : false;
}

console.log(isPlaindrome("POp Op"));
