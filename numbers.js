// 1. Provide the sum of the following variables

var num10 = 10;
var string8 = '8';
var one = 1;

const number_base = 10;
console.log(num10 + Number.parseInt(string8,number_base) + one)

console.log("========================================================")

// 2. Write a loop that will log only numbers divisible by 3 between 20 - 100
var currentNumber = 20;
while(currentNumber <= 100) {
  if(currentNumber % 3 === 0) {
    console.log(currentNumber);
  }

  currentNumber++;
}

// 3. Find the class average given the following test scores

var scores = [88, 84, 100, 92, 70, 76, 76, 84, 86, 98];

var sum = 0;

for(let score of scores) {
  sum += score;
}

var average = sum / scores.length;

console.log(average);
