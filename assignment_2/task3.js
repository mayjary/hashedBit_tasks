function findTax(salary) {
  let taxRate;

  switch (true) {
    case (salary > 0 && salary <= 500000):
      taxRate = 0;
      break;
    case (salary > 500000 && salary <= 1000000):
      taxRate = 0.10;
      break;
    case (salary > 1000000 && salary <= 1500000):
      taxRate = 0.20;
      break;
    case (salary > 1500000):
      taxRate = 0.30;
      break;
    default:
      return "Invalid salary";
  }

  const taxAmount = salary * taxRate;
  return `Tax to be paid: $${taxAmount}`;
}

console.log(findTax(450000)); 
console.log(findTax(800000)); 
