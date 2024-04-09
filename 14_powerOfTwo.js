// function powerOfTwo(num) {
//   while (num % 2 === 0) {
//     num = num / 2;
//   }
//   if (num === 1) return true;
//   else return false;
// }


// biwise 
//2, 4, 8, 16 = 10000000
// 16-1 = 09999999

function powerOfTwo(num) {
    if ((num & (num - 1)) === 0 && num != 0) return true;
    else return false;
}

console.log(powerOfTwo(8));
