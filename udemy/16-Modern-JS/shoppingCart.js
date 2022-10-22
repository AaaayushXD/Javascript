///Exporting module
console.log('Exporting Module');

//Blocking code
// console.log('start fetching users');
// await fetch(`https://jsonplaceholder.typicode.com/users`);
// console.log('Finish fetching');

const shippingCost = 10;
export const cart = [];

export const addToCart = function (product, quantity) {
    cart.push({ product, quantity })
    console.log(`${quantity} ${product} added to cart`);
}

const toolPrice = 237;
const totalQuantity = 23; 
export { toolPrice, totalQuantity as tq};

export default function (product, quantity) {
    cart.push({ product, quantity })
    console.log(`${quantity} ${product} added to cart`);
}