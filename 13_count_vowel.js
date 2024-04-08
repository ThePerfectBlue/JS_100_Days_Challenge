// count vowels in string

// function countVowel(str) {
//   str = str.toLowerCase();
//   str = Array.from(str);
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (
//       str[i] == "a" ||
//       str[i] == "e" ||
//       str[i] == "i" ||
//       str[i] == "o" ||
//       str[i] == "u"
//     )
//       count++;
//   }

//   return count;
// }

function countVowel(str) {
  let count = 0;
  str = str.toLowerCase();
  let arr = str.split("");
  const vowel = ["a", "e", "i", "o", "u"];

  for (let char of arr) {
    if (vowel.includes(char)) count++;
  }
  return count;
}

console.log(countVowel("hello my NAme is RAVI"));
