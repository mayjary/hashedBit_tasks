import { useState } from 'react';
import './App.css';

function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  function calculate(operator) {
    const a = parseFloat(num1);
    const b = parseFloat(num2);
    let res = '';

    if (isNaN(a) || isNaN(b)) {
      res = "Please enter valid numbers!";
    } else {
      switch (operator) {
        case '+':
          res = a + b;
          break;
        case '-':
          res = a - b;
          break;
        case '*':
          res = a * b;
          break;
        case '/':
          res = b !== 0 ? a / b : "Cannot divide by zero";
          break;
        default:
          res = "Invalid operator!";
      }
    }

    setResult("Result: " + res);
  }

  return (
    <div className="App">
      <h2>Simple Calculator</h2>

      <input
        type="number"
        placeholder="Enter first number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />

      <input
        type="number"
        placeholder="Enter second number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />
      <br />

      <button onClick={() => calculate('+')}>Add</button>
      <button onClick={() => calculate('-')}>Subtract</button>
      <button onClick={() => calculate('*')}>Multiply</button>
      <button onClick={() => calculate('/')}>Divide</button>

      <div>{result}</div>
    </div>
  );
}

export default App;
