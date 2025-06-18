function sumOfDigitProd(n1, n2) {
  let s1 = n1.toString().split('').reverse();
  let s2 = n2.toString().split('').reverse();
  // console.log(s1, s2);
  let length = Math.max(s1.length, s2.length);
  let sum = 0;

  for (let i = 0; i < length; i++) {
    let d1 = Number(s1[i] || 0);
    let d2 = Number(s2[i] || 0);
    sum += d1 * d2;
  }

  return sum;
}

console.log(sumOfDigitProd(6, 34));    
console.log(sumOfDigitProd(123, 456)); 
