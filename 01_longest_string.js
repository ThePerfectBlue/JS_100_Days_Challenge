function findLongest(str) {
  let temp = str.trim().split(" ");

  let max = 0;
  let word = "";
  temp.forEach((element) => {
    if (element.length > max) {
      max = element.length;
      word = element;
    }
  });
  return word;
}

console.log(findLongest("   100 Days of JavaScript Coding Challengess    "));
