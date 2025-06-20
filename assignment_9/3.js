function modifyArray(arr) {
  arr.push("new item");
  arr.pop();
  return arr;
}
console.log(modifyArray([1, 2, 3]));
