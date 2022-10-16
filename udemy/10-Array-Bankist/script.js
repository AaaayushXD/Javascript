"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////

/*

//SLICE method 
//(it doesnt  mutates original arrays)
let arr = ['a', 'b', 'c', 'd', 'e'];
console.log(arr.slice(2));
console.log(arr.slice(2, 4));  //first is starting position and second is ending position
console.log(arr.slice(1, -2));
console.log([...arr]);


//SPLICE method -- it takes the value from an array and removes the remaining value from the arr. it is mostly used to remove last value from an array. (it mutates original arrays)
console.log(arr.splice(-1));
console.log(arr.splice(1, 2)); //first one is starting position and second is no of values
console.log(arr);


//REVERSE 
//(it mutates original arrays)
const arr2 = ['i', 'j', 'k', 'l', 'm'];
console.log(arr2.reverse());


//CONCAT
//(it doesnt mutates original arrays)
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);


//JOIN 
console.log(letters.join(', '));


////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////


//AT -- it tells where the value is acc to its index
const arr = [23, 11, 64];
console.log(arr[0]);  //23
console.log(arr.at(1));  //11

console.log(arr[arr.length - 1]);   //64
console.log(arr.at(-1));  //64

console.log('Aayush'.at(-1));       //h
console.log('Aayush'.at(0));       //A
*/

////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////

/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log('------FOR OF--------');
//first is index then  array (index, array). order for 'forOF'
// for (const movement of movements) {
    for(const [i, movement] of movements.entries()) {
    if (movement > 0) {
        console.log(`Movement of ${i + 1}: You deposited ${movement}`);
    } else {
        console.log(`Movement of ${i + 1}: You withdrew ${Math.abs(movement)}`);
    }
}

console.log('------FOR EACH--------');
//each value from array is passed as argument and calls the function after each iteration anc value cahnges

//first is array then index (array, index). order for 'forEach'
movements.forEach((movement, i, arr) => {  
    if (movement > 0) {
        console.log(`Movement of ${i + 1}: You deposited ${movement}`);
    } else {
        console.log(`Movement of ${i + 1}: You withdrew ${Math.abs(movement)}`);
    }
})

*/

////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////

/*
const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
]);
  
currencies.forEach(function (value, key, map) {
    console.log(`${key}: ${value}`);
})  

const currency = new Set(['USD', 'EUR', 'GBP'])
currency.forEach(function (value, _ , map){
    console.log(`${value}: ${value}`);
})
*/

////////////////////////////////////////////////////////////

///////////////MAP METHOD//////////////

//map loops over an array and returns a new array containing the result of applying an operation on all original array element.
// const arr = [3, 3, 2, 4];
// const newArr = arr.map((a) => a * 2);
// console.log(newArr);

/*
const nrsToUsd = 132;
const movements = [200, -200, 340, -300, -20, 50, 400, -460];
const inNrs = movements.map(mov => Math.round(mov * nrsToUsd));
console.log(inNrs);


const move = movements.map((movement, i, arr) =>
    `Movement of ${i + 1}: You ${movement > 0 ? 'Deposited' : 'Withdraw'} ${Math.abs(movement)}`);

console.log(move);
*/

///////////////Filter METHOD//////////////

/*
///filter returns a new array containing the array element that passed a specified test condition
// const above2 = arr.filter((a) => a > 2);
// console.log(above2);

const movements = [200, -200, 340, -300, -20, 50, 400, -460];
const deposits = movements.filter(mov => mov > 0)
console.log(movements);
console.log(deposits);

const deposit = [];
const withdraw = [];
for (const mov of movements) {
    mov > 0 ? deposit.push(mov) : withdraw.push(mov);
}
console.log(deposit);
console.log(withdraw); 
*/

///////////////Reduce METHOD//////////////

//'reduce' reduces all array element down to one single value for example to add all element in an array and returns sum.
// const sum = arr.reduce((a, b) => a + b);
// console.log(sum);

/*
const movements = [200, -200, 340, -300, -20, 50, 400, -460];

//accum is accumulator which gives the sum of the arrays
const balance = movements.reduce((accum, current) => accum + current, 0);
console.log(balance);
*/

///////////////FIND METHOD//////////////
//returns only the first element from the array which satisfies the given condition
/*
const movements = [200, -200, 340, -300, -20, 50, 400, -460];

const first = movements.find(mov => mov < 0);    
console.log(movements);
console.log(first);

const account = accounts.find(acc => acc.owner === "Jessica Davis")
console.log(account);


////////SOME method//////
//It checks for any value in an array for given condition
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);
console.log(movements.includes(-130)); //include checks just for equality
console.log(movements.some(mov=> mov>0)); //some checks for a condition and returns true or false boolean value
console.log(movements.some(mov=> mov>2999));

////////Every method//////
//it returns true or false if every element in an array satisfies the given condition.
console.log(movements.every(mov => mov > 0)); 
console.log(account4.movements.every(mov => mov > 0));



////////FLAT method//////////////
//if we have arrays inside an array we can use flat method to make them into a single big array
const arr = [1, 2, [3, [2, 4, 3], 4, 5], 6, 7, [1, 2, [2, 4,[1,2]]]];
console.log(arr.flat(3)); 


// const accountMovement = accounts.map(acc => acc.movements)
// const allMovement = accountMovement.flat();
// const overallBalance = allMovement.reduce((acc, curr) => acc + curr, 0);

const overallBalance = accounts.map(acc => acc.movements).flat().reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance);



/////////////FLATMAP method////////////
//it is combined form of flat and map 
const overallBalance2 = accounts.flatMap(acc => acc.movements).reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance2);


/////////////Sorting method////////////
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const owner = ['Aayush', 'Zach', 'Samar', 'Martha'];

console.log(owner.sort());
console.log(movements);


//Numbers
//Ascending order
const sorted = movements.sort((a, b) => a - b);
console.log(sorted);

//Descending order
const sorted2 = movements.sort((a, b) => b - a);
console.log(sorted2);



//Array constructor
const x = new Array(7);
console.log(x);
//this create a new empty array of length 7 instead of creating an array with element 7.

//we can use fill, to fill any array with elements.
x.fill(2, 1); //second value is starting point and third is end parameter
console.log(x);

//Arrray.from
//this takes length as parameter and a callback function.
const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);


//Practice on Array Methods

//Ex. 1
//Here,
const bankDeposit = accounts.flatMap(acc => acc.movements).filter(mov => mov > 0).reduce((acc, mov) => acc + mov, 0);
//Flatmap helps us to get all the movements from diff accounts into one array.
//Filter helps us to get all the movements which are deposits (i.e movement is positive)
//reduce helps to add all the remaining movements together
console.log(bankDeposit);


//Ex 2.
//To add all deposite from all accounts into one and count number of deposites done
const numDeposit = accounts.flatMap(acc => acc.movements).filter(mov => mov >= 1000).length;
console.log(numDeposit);

const numDepositReduce = accounts.flatMap(acc => acc.movements).reduce((count, curr) => (curr >= 1000 ? ++count : count), 0);
console.log(numDepositReduce);

//Ex 3.
const {deposits, withdraw} = accounts.flatMap(acc => acc.movements).reduce((sums, curr) => {
    // curr > 0 ? sums.deposits += curr : sums.withdraw += curr;
    sums[curr > 0 ? 'deposits' : 'withdraw'] += curr;
    return sums;
}, { deposits: 0, withdraw: 0 });

console.log(deposits, withdraw);

//Ex 4.
//this is a nice title = This Is a Nice Title
const converTitle = function (title) {
    const exception = ['a', 'an', 'the', 'but', 'or', 'on', 'is', 'with'];
    
    const titleCase = title.toLowerCase().split(' ').map(word => exception.includes(word) ? word : word[0].toUpperCase() + word.slice(1)).join(' ');
    return titleCase;
}
console.log(converTitle('this is a nice title'));
console.log(converTitle('this is a LONG title but not too long'));

*/

///////////////////////////////////////
// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.
Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:
1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets
HINT: Use tools from all lectures in this section so far 😉
TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
GOOD LUCK 😀


const checkDogs = function (dogsJulia, dogsKate) {
    const corrected = dogsJulia.slice(1,-2);
    // console.log(corrected);
    const dogs = corrected.concat(dogsKate);
    console.log(dogs);
    // "Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶"
    dogs.forEach((dog, i) => {
        if (dog >= 3) {
            console.log(`Dog number ${i+1} is an adult, and is ${dog} years old`);
        } else {
            console.log(`Dog number ${i + 1} is still a puppy 🐶`)
        }
    }) 
}
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3])]

*/

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.
Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:
1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets
TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]
GOOD LUCK 😀



const age1 = [5, 2, 4, 1, 15, 8, 3];
const age2 = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge = function (ages) {
    const humanAges = ages.map((age) => age <= 2 ? 2 * age : 16 + age * 4);
    console.log(humanAges);  //[36, 4, 32, 2, 76, 48, 28] OR [80, 40, 56, 36, 40, 2, 32]
    const adultDogs = humanAges.filter(age => age >= 18)
    console.log(adultDogs);     //[36, 32, 76, 48, 28] or [80, 40, 56, 36, 40, 32]
    const avgDogAges = adultDogs.reduce((acc, curr) => acc + curr, 0) / adultDogs.length;
    console.log(avgDogAges); //44 OR 47.333333333333336
    
}
calcAverageHumanAge(age1);
calcAverageHumanAge(age2);


const calcAverageHumanAge2 =  (ages) => ages.map(age => age <= 2 ? 2 * age : 16 + age * 4).filter(ab18 => ab18 >= 18).reduce((acc, curr, i, arr) => acc + curr / arr.length, 0) 

console.log(calcAverageHumanAge2(age1))
console.log(calcAverageHumanAge2(age2))
*/

//////Chaining methods together

// const nrsToUsd = 132;
// const totalUsd = account1.movements.filter(mov => mov > 0).map(mov => mov / nrsToUsd).reduce((acc, curr) => acc + curr, 0);
// console.log(totalUsd);

///////////////////////////////////////
// Coding Challenge #3

/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!
TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]
GOOD LUCK 😀
*/




///////////////////////////////////////
// Coding Challenge #4

/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).
1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)
HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.
TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];
GOOD LUCK 😀


const dogs = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
    { weight: 32, curFood: 340, owners: ['Michael'] }
];
  
//1.
dogs.forEach(dog => dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28));
console.log(dogs);

//2. 
const sarahDog = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(`Sarah's dog is eating too ${sarahDog.curFood > sarahDog.recommendedFood ? 'much' : 'less'}`);

//3.
const tooMuch = dogs.filter(dog => dog.curFood > dog.recommendedFood).flatMap(dog => dog.owners);
console.log(tooMuch);

const tooLittle = dogs.filter(dog => dog.curFood < dog.recommendedFood).flatMap(dog => dog.owners);
console.log(tooLittle);



//4.  "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
console.log(`${tooMuch.join(" and ")}'s dogs eat too much! and ${tooLittle.join(' and ')}'s dogs eat too little! `);



//5.
console.log(dogs.some(dog => dog.curFood === dog.recommendedFood));


//6.  current > (recommended * 0.90) && current < (recommended * 1.10)
const checkOk = dog => dog.curFood > (dog.recommendedFood * 0.9) && dog.curFood < (dog.recommendedFood * 1.10);
console.log(dogs.some(checkOk));


//7.
console.log(dogs.filter(checkOk));


//8.
const dogsSortedCopy = dogs.slice().sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log(dogsSortedCopy);

*/