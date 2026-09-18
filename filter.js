const numbers = [
  12, 45, 7, 89, 23,
  56, 34, 91, 18, 63,
  5, 77, 42, 29, 100,
  14, 68, 37, 82, 50
];

const prices = [500, 600, 750, 900, 1200, 450, 800,1500,650, 1000, 550, 700, 850, 1100, 1300, 950, 400, 1250, 1600, 2000];

let expensiveProducts = prices.filter((price) => {
    return price >= 1000
})

// console.log(expensiveProducts);

const phones = [
  { model: "iPhone 15", price: 75000 },
  { model: "Samsung Galaxy S24", price: 85000 },
  { model: "Google Pixel 8", price: 65000 },
  { model: "OnePlus 12", price: 70000 },
  { model: "Xiaomi 14", price: 60000 },
  { model: "Samsung Galaxy A55", price: 45000 },
  { model: "iPhone 14", price: 65000 },
  { model: "Google Pixel 7a", price: 45000 },
  { model: "OnePlus Nord 3", price: 40000 },
  { model: "Redmi Note 13", price: 25000 },
  { model: "Realme 12 Pro", price: 35000 },
  { model: "Vivo V30", price: 42000 },
  { model: "Oppo Reno 11", price: 45000 },
  { model: "Nothing Phone 2", price: 55000 },
  { model: "Motorola Edge 40", price: 38000 },
  { model: "Samsung Galaxy S23", price: 70000 },
  { model: "iPhone 13", price: 55000 },
  { model: "Poco X6 Pro", price: 32000 },
  { model: "Infinix Note 40", price: 22000 },
  { model: "Tecno Camon 30", price: 28000 }
];


const expensivePhones = phones.filter((phone, index) => {
    return phone.price >= 50000
    
})

// console.log(expensivePhones);



const ages = [12, 18, 15, 21, 17, 25];


const adult = ages.filter((age) => {
    return age >= 18
})

// console.log(adult);


const products = [
  { name: "Pen", price: 20 },
  { name: "Book", price: 150 },
  { name: "Bag", price: 800 },
  { name: "Pencil", price: 10 }
];

const highestPricesProducts = products.filter((product) => {
    return product.price >= 100
})

console.log(highestPricesProducts);




