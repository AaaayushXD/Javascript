//Importing module

//naming import is used to import some function with it name and not the whole module
// import { addToCart, toolPrice as price, tq as quantity } from './shoppingCart.js'
// addToCart('bread', 5)
// console.log(price, quantity);

console.log("Importing module");

//importing whole module at once.
// import * as ShoppingCart from './shoppingCart.js'
// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.toolPrice);

///imports are not copy of exports, rather they are live connnection. as they points to same location in memory
import add, { cart } from "./shoppingCart.js";
add("pizza", 2);
add("bread", 3);
add("apple", 5);
add("bananas", 6);

console.log(cart);
/*
///top-level await only works in module --> it blocks the exectution
// console.log("Startinggg...");
// const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
// const data = await res.json();
// console.log(data);
// console.log('waitinggg...');


const getLastPost = async function () {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const data = await res.json();

    return {title: data.at(-1).title, body: data.at(-1).body}
};


const lastPost = getLastPost();
//not so clean.. we need to merge two types together
lastPost.then(last => console.log(last))

//insteadd use top level await
const lastPost2 = await getLastPost()
console.log(lastPost2);


/////ES5 module patttern ... which is no more used
const shoppingCart2 = (function () {
    const cart = [];
    const shippingCost = 10;
    const totalPrice = 234;
    const totalQuantity = 23;

     const addToCart = function (product, quantity) {
       cart.push({ product, quantity });
       console.log(`${quantity} ${product} added to cart. Shipping cost is ${shippingCost}`);
    };

     const orderFrom = function (product, quantity) {
       cart.push({ product, quantity });
       console.log(`${quantity} ${product} ordered from supplier.`);
    };
    
    return {
        addToCart,
        cart,
        totalPrice,
        totalQuantity,
    };
})();

shoppingCart2.addToCart('apple', 3);
shoppingCart2.addToCart("pizza", 2);
console.log(shoppingCart2);
*/

////CommonJs module in Node.js
// export.addToCart = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(`${quantity} ${product} added to cart. Shipping cost is ${shippingCost}`);
// }

import cloneDeep from "lodash-es";
const state = {
  cart: [
    { product: "bread", quantity: 2 },
    { product: "pizza", quantity: 5 },
  ],
  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);

state.user.loggedIn = false;
console.log(stateClone);
console.log(stateDeepClone);

if (module.hot) {
  module.hot.accept();
}

class Person {
  gretting = "Hey";
  constructor(name) {
    this.name = name;
    console.log(`${this.gretting}, ${this.name}`);
  }
}
const aayush = new Person("Aayush");

console.log(aayush);
Promise.resolve("Test").then(function (x) {
  return console.log(x);
});

import "core-js/stable/array/find";
