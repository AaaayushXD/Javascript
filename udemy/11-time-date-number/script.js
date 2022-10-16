'use strict';

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
    owner: "Jonas Schmedtmann",
    movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
    interestRate: 1.2, // %
    pin: 1111,
  
    movementsDates: [
      "2019-11-18T21:31:17.178Z",
      "2019-12-23T07:42:02.383Z",
      "2020-01-28T09:15:04.904Z",
      "2020-04-01T10:17:24.185Z",
      "2020-05-08T14:11:59.604Z",
      "2020-07-26T17:01:17.194Z",
      "2020-07-28T23:36:17.929Z",
      "2020-08-01T10:51:36.790Z",
    ],
    currency: "EUR",
    locale: "pt-PT", // de-DE
  };
  
  const account2 = {
    owner: "Jessica Davis",
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
  
    movementsDates: [
      "2019-11-01T13:15:33.035Z",
      "2019-11-30T09:48:16.867Z",
      "2019-12-25T06:04:23.907Z",
      "2020-01-25T14:18:46.235Z",
      "2020-02-05T16:33:06.386Z",
      "2020-04-10T14:43:26.374Z",
      "2020-06-25T18:49:59.371Z",
      "2020-07-26T12:01:20.894Z",
    ],
    currency: "USD",
    locale: "en-US",
  };
  
const accounts = [account1, account2];
/*
//
console.log(23 === 23.0);

//create a date
const currentDate = new Date();
console.log(currentDate);

console.log(new Date(3 * 0));

//Working with dates
const futureDate = new Date(2037, 10, 19, 15, 23)
console.log(futureDate);
console.log(futureDate.getFullYear());
console.log(futureDate.getMonth());
console.log(futureDate.getDate());
console.log(futureDate.getDay());
console.log(futureDate.getHours());
console.log(futureDate.getMinutes());
console.log(futureDate.getSeconds());
console.log(futureDate.toISOString());  //creates a iso string
console.log(futureDate.getTime());
console.log(new Date(2142236280000));
console.log(Date.now());   //gets current timestamp
futureDate.setFullYear(2040);
console.log(futureDate);

const future = new Date(2037, 10, 19, 15, 23);
console.log(future);

const calcDaysPassed = (date1, date2) =>
  Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

const day1 = calcDaysPassed(new Date(2037, 3, 4), new Date(2037, 3, 14));
console.log(day1);


const num = 3881213.23;
const options = {
  style: 'currency',
  unit: 'mile-per-hour',
  currency: 'NRS',
}
console.log(new Intl.NumberFormat('en-US', options).format(num));


///Set timeout
const ingredients = ['chicken', 'olive']
const timer = setTimeout((ing1, ing2) => console.log(`here is your pizza with ${ing1} an ${ing2}`), 3 * 1000, ...ingredients);
if (ingredients.includes('olive')) clearTimeout(timer);


//Set interval
setInterval(function () {
  const now = new Date();
  console.log(now);
}, 1000)
*/