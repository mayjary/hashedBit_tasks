const nums = [10, 20, 30, 40];

function getSum(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
}
console.log(getSum(nums)); 
