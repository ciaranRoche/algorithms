// simple factorial function to demonstrate recursionS
const recursion = (x) => {
  if (x === 1) {
    return 1;
  }
  return x * recursion (x - 1);
};

console.log(recursion(10));