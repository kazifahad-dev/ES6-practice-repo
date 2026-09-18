const numbers = [
  12, 45, 7, 89, 23,
  56, 34, 91, 18, 63,
  5, 77, 42, 29, 100,
  14, 68, 37, 82, 50
];

const doubled = numbers.map((number) =>{
    return number + 5;
})

// console.log(doubled);


const numbers2 = [1, 2, 3, 4, 5];


const doubledNumber = numbers2.map((number) => {
    return number * 2
})

// console.log(doubledNumber);

const users = [
  { name: "Fahad", age: 20 },
  { name: "Rahim", age: 22 },
  { name: "Karim", age: 19 }
];


const names = users.map((user) => {
    return user.name
})

console.log(names);
