function calc(a,b, operation) {
    switch(operation){
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return b==0 ? 'Cannot divide by zero' : a / b;
        default:
            return 'Invalid operation';
    }
}

console.log(calc(20, 5, '+')); 
console.log(calc(20, 5, '-')); 
console.log(calc(20, 5, '*')); 
console.log(calc(20, 5, '/')); 