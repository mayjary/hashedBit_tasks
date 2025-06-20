function modifyArray(arr) {
  arr.push("new item");
  console.log(arr);
  arr.pop();
  return arr;
}
console.log(modifyArray([1, 2, 3]));
