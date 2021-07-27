let numbers = [];
for (var number = 0; number < 20; number++) {
    numbers.push(Math.round(Math.random() * 100));
}
console.log(numbers);
let filteredNumbers =
    numbers.filter(item => item % 5 === 0)
console.log(filteredNumbers);
let sum = numbers.reduce((accumulator, currentValue) => ( accumulator + currentValue));
console.log(sum);
console.log(numbers.findIndex((element)=>element % 3 ===0));
numbers.sort();
console.log(numbers);