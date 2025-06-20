// Q1) Create an array of states in india. Remove all the names starting with vowels from the list. Use array.filter.
const states = ["Andhra Pradesh", "Bihar", "Uttar Pradesh", "Odisha", "Kerala", "Tamil Nadu", "Maharashtra", "Assam", "Rajasthan"];
const filteredStates = states.filter(state => !["A", "E", "I", "O", "U"].includes(state[0].toUpperCase()));
console.log(`Original States: `, states);
console.log(`Filtered: `,filteredStates);

// Q2) let str = 'I love my India' output expected = 'India my love I'
let str = 'I love my India';
let reversed = str.split(' ').reverse().join(' ');
console.log(`Original String: `, str);
console.log(`Reversed: `,reversed);

// Q3) let string = 'INDIA' output = 'INDONESIA' Use array.splice
let string = 'INDIA';
let arr = string.split('');
arr.splice(3, 2, 'O', 'N', 'E', 'S', 'I', 'A');
let output = arr.join('');
console.log(output);

// Q4) Take any string with minimum 20 characters. Count number of consonant and vowel in the string.
let str1 = "Hey, My name is Mayank!";

let vowels = 0;
let consonants = 0;
let vowelsList = "aeiou";

for (let char of str.toLowerCase()) {
    if (vowelsList.includes(char)) {
      vowels++;
    } else {
      consonants++;
    }
  }


console.log("\nVowels:", vowels);
console.log("Consonants:", consonants);

// Q5) Write a function to replace wrong word with correct word in any sentence.
function correctfn(string, wrong, correct) {
  return string.replace(wrong, correct);
}
console.log(correctfn("\nI lve football", "lve", "love"));

// Q6) inputArr = [1,2,3,9,10,7,5,4,3] answer = [9, 10, 7] Use array.filter and return numbers greater than 5.
let inputArr = [1,2,3,9,10,7,5,4,3];
let greaterThanFive = inputArr.filter(num => num > 5);
console.log(greaterThanFive);

// Q7) Use array.map and array.reduce.
const students = [
  { name: "Ram", scores: [80, 70, 60] },
  { name: "Mohan", scores: [80, 70, 90] },
  { name: "Sai", scores: [60, 70, 80] },
  { name: "Hemang", scores: [90, 90, 80, 80] },
];
let result = students.map(std => {
  let avg = std.scores.reduce((a, b) => a + b, 0) / std.scores.length;
  return { name: std.name, average: avg };
});
console.log(result);

// Q8) Write a function to find repeated sum of digits until there is only a single digit in the number.
function digitSum(num) {
  while (num >= 10) {
    num = num.toString().split('').reduce((a, b) => a + +b, 0);
  }
  return num;
}
console.log(digitSum(456));

// Q9) Write a function to count the number of words in a paragraph.
function wordCount(para) {
  let words = para.split(' ');
    console.log(`number of words: `, words.length);
}
console.log(wordCount("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."));

// Q10) Write a function to reverse a string. Input - Hello Output - olleH
function reverseString(str) {
  return str.split('').reverse().join('');
}
console.log(reverseString("Hello"));

// Q11) Write code to find average as mentioned above. Use array and object methods.
const data = [
  {
    student1: {
      subject1: 44,
      subject2: 56,
      subject3: 87,
      subject4: 97,
      subject5: 37
    }
  },
  {
    student2: {
      subject1: 44,
      subject2: 56,
      subject3: 87,
      subject4: 97,
      subject5: 37
    }
  },
  {
    student3: {
      subject1: 44,
      subject2: 56,
      subject3: 87,
      subject4: 97,
      subject5: 37
    }
  }
];

const average = {};

for (let i = 0; i < data.length; i++) {
  const studentKey = Object.keys(data[i])[0];        
  const subjects = data[i][studentKey];              
  let sum = 0;
  let count = 0;
  for (let subject in subjects) {
    sum += subjects[subject];
    count++;
  }
  average[studentKey] = {
    avg: Math.round(sum / count)
  };
}

console.log(average);
