const numbers = [5, 10, 15, 20, 25];


const findNumber = numbers.find((number) => {
    return number > 12
})

// console.log(findNumber);

const users = [
  { id: 1, name: "Fahad" },
  { id: 2, name: "Rahim" },
  { id: 3, name: "Karim" }
];

const findUser = users.find((user) => {
    return user.id === 2
})

// console.log(findUser);

