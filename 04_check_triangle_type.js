function check(a, b, c) {
  if (a === b && b === c) return "equilateral T.";
  else if (a !== b && b !== c) return "scalene T.";
  else return "isosceles T.";
}

console.log(check(2, 3, 3));
console.log(check(5, 5, 5));
console.log(check(5, 7, 9));
