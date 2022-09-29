'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
  
/* 
const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';'); 
  const output = `${type.startsWith("_Delayed") ? '🔴' : ' '}${type.replaceAll('_', ' ')} from ${getCode(from)} to ${getCode(to)} (${time.replace(':', 'h')}).`.padStart(40);

  console.log(output);
  
} */




// Data needed for first part of the section
const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },

};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//ES 5 object literal 
  // openingHours = openingHours,  this was issue cuz variable and property name were same 

//ES6 enhanced object literal
  openingHours,

  
  /* Es5 
   order: function (straterIndex, mainIndex) {
     return[this.starterMenu[straterIndex], this.mainMenu[mainIndex]]
   }, */

  //Es6 enhanched object literal for writing methods
order(straterIndex, mainIndex) {
    return[this.starterMenu[straterIndex], this.mainMenu[mainIndex]]
  },   //no need to write 'Function' keyword to declare function in methods.


  orderDelivery: function ({straterIndex=1, mainIndex=0, time='20:00',address='Pinglasthan'}) {
    console.log(`order recieved: ${this.starterMenu[straterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },


  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is ur delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient, otherIngredients);
  },
};


/*  
                          Stringsssss 
                          

1) .indexOf()       //to find the index of word in string starting from begining
2) .lastIndexOf()     //to ffind index  of word in  string starting from end
3) .slice()       //to slice a word taking index as argument
4) .split()   //to split a word with giving argument
5) .join()      //joins the words with given argument
6) .length    //find length of string
7) .tolowerCase()  //converts all letter to lower case
8) .toUpperCase()     //convert all letters to upper case
9) .trim()      //trims out white spaces
10) .trimStart()    //trims white space at the begining only
11) .trimEnd()    //trims white space at end only
12) .replace    //used to replace the exisiting word or letter to another
13) .startsWith()   //to check whether the word starts with something
14) .includes()   //to check if the given argument is in the letter or word
15) .endsWith()   //to check the ending of a string
16) .padStart()  //add extra argument until given condition at begining
17) .padEnd()  //add extra argument until given condition at end
18) .repeat() //repeats until the given argument says


const airline = 'TAP Air';
const plane = 'A320';

console.log(airline.lastIndexOf('Air'));
console.log(airline.slice(1, 6));
console.log(airline.split(' '));


const checkMiddle = function (seat) {
  //B And E
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') {
    console.log('Lol middle seat.. you gonna regret this');
  } else {
    console.log('Nice');
  }
}
checkMiddle('11B')
checkMiddle('3E')
checkMiddle('31A')


console.log(airline.toLowerCase());
console.log(airline.toUpperCase());


//to fix capitalization
const passenger = 'aAyusH';
const passLower = passenger.toLowerCase();
const correctPassenger = passLower[0].toUpperCase() + passLower.slice(1);
console.log(correctPassenger);


//check email
const email = 'aayush@gmail.com';
const login = '  Aayush@gmail.com \n';
//fix case and trim white space
const lowerEmail = login.toLowerCase();
const correctEmail = lowerEmail.trim();
console.log(correctEmail);
//same but shorter writing
const normal = login.toLowerCase().trim();
console.log(normal);

//replacing
const priceNp = 'Rs 130,71 Rs';
const priceUs = priceNp.replace('Rs', '$').replace('.', ',')
console.log(priceUs);

const planes = 'A320neo';
console.log(planes.includes('B23'));
console.log(planes.startsWith('A320'));


//Practice exercise
const checkBag = function (items) {
  const bag = items.toLowerCase();
  if (bag.includes('knife') || bag.includes('gun')) {
    console.log('Not allowed');
  } else {
    console.log('Welcome');
  }
}
checkBag('I have laptop, some Food an a pocket kNiFe');
checkBag('socks and camera');
checkBag('Some snack and a Gun')

console.log('a+very+nice+string'.split('+'));

const [firstName, lastName] = 'Aayush Lamichhane'.split(' ');
console.log(['Mr.', firstName, lastName.toLowerCase()].join(' '));
const capitalize = function (name) {
  const names = name.split(' ');
  const nameUpper = [];
  for (const word of names) {
    //both works in same way
    // nameUpper.push(word[0].toUpperCase() + word.slice(1));
    nameUpper.push(word.replace(word[0], word[0].toUpperCase()))
  }
  console.log(nameUpper.join(' '));
}

capitalize('jessica ann smith');
capitalize('aayush lamichhane')

//padding
const message = 'Go to gate 23';
console.log(message.padStart(25, '+').padEnd(40, '-'));


//masking
const maskCreditCard = function (no) {
  const str = no + ''
  const last = str.slice(-4);
  return last.padStart(str.length, '*')
}
console.log(maskCreditCard(234394320022));


//Repeat 

const msg = 'Bad Weather. All flights delayed. '
console.log(msg.repeat(5));
*/







/*  
                            Maps
Map is adata structure that we can map values to keys. they are stored in key-values pair like objects. The difference betn object and map is , in maps, we can use any type of data as keys in whereas in object we can only use string as keys.

1) .set //to add in maps
2) .get //to get value using key which matters
3) .has //to check if the map contains the value
4) .delete //to delete particular key-value pair
5) .size  //to see the size of maps
6) .clear()  //to delete entire map


const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'France');
rest.set(2, 'Portugal')
console.log(rest);

rest.set('categories',
  ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'we are open')
  .set(false, 'we are close');
  console.log(rest.get('name'));
  console.log(rest.get(true));
  console.log(rest.get(1));

const time = 24;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
console.log(rest);

rest.delete(2)

//to change maps into array
const arr = [1,2]
rest.set(arr, 'Test');
console.log(rest.get(arr));
const arrMaps = [...rest];
console.log(arrMaps);

console.log(rest.size);
// console.log(rest.clear());
// console.log(rest);


const questions = new Map([
  ['question', 'What is best programming language?'],
  [1, 'C'],
  [2, 'C#'],
  [3, 'JavaScript'],
  [4, 'Java'],
  ['correct', 3],
  [true, 'Correct 🎉'],
  [false, "Lol, Try again! "],
]);
console.log(questions);

//Convert object into Maps
const hourMap = new Map(Object.entries(openingHours));
console.log(hourMap);

console.log(questions.get('question'));
for (const [key, value] of questions) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
  
}
const ans = Number(prompt("Write Correct answer? "))

console.log(questions.get(questions.get('correct') === ans));


//Conver map to arrays
const mapArray = [...questions]
console.log(mapArray);
*/









/*
                        Sets 

Set doesnt allow repetation.order of value are irrelatables.
There is no index in sets. so we cant retreive values. Some methods in sets are
1.has
2.delete
3.size
4.clear()

//to ddefine sets
const orderSets = new Set([
  'Pizza',
  'Pasta',
  'Chesse',
  'Pizza',
]);
console.log(orderSets);
console.log(new Set('Aayush'));
console.log(orderSets.size); //size means length of sets. DOESNT includes repeated items.

//has is similar to include in array
console.log(orderSets.has('Pizza'));
console.log(orderSets.has('bread'));

//we can add in sets using 'add'
orderSets.add('Garlic Bread');
//delete using 'delete' keyword
orderSets.delete('Pizza');
console.log(orderSets);

// to  delete whole sets.
// orderSets.clear();
// console.log(orderSets);


//looping in sets
for( const order of orderSets) console.log(order);


//Example 
const staff = ['Waiter', 'chefs', 'manager', 'chefs', 'waiter'];
//to convert sets into array put them in '[with spread operator(...)]'
const staffUnique = [...new Set(staff)];
console.log(staffUnique);   */













/*  
                        Object looping 
            (object.keys, object.values, object.entries)

Objects are irretable values. we cant loop directly so we loop object indirectly. Object looping can be done by changing the object into an array. so we can get keys and values together   

//To get Property names 'Object.keys'
const properties = Object.keys(openingHours);
console.log(properties);
let str = `We are open ${properties.length} days a week: `;

for (const day of properties) {
  str += `${day}, `;
}
console.log(str);

//TO get property values 'Object.values'
const values = Object.values(openingHours);
console.log(values);

//Entries Object ..
const entries = Object.entries(openingHours);
console.log(entries);


for (const [keys, {open,close}] of entries) {
  console.log( `On ${keys} we are open at ${open} and closes at ${close}`);
}
*/














/* 
                        Optional chaining '?.'

when we use optional chanining.. when one case is undefined it returns 'undefined' values rather than giviing error by doing next step. In simple word, it checks whether the giving case exist or not. if not then returns 'undeifned'

console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours.fri?.open);


//to check for methods.
console.log(restaurant.order ?.(0,1) ?? 'Methods doesnt exist');
console.log(restaurant.orderCheese ?.(0,1) ?? 'Methods doesnt exist');


//For arrays
const users = [
  {name: 'Aayush', email: 'hi@gmail.com'}
]
const jack = [];
console.log(users[0]?.name ?? 'Empty');
console.log(jack[0]?.name ?? 'Empty');        */













/*
                    FOR-OF LOOP
  
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for(const item of menu) console.log(item);

for (const [i, el] of menu.entries()) {
  console.log(`${i+ 1}: ${el}`);
}  */











/*  
                  Logical assignment operator 


const rest1 = {
  name: 'Capri',
  numGuest: 0,
}
const rest2 = {
  name: 'La Piazza',
  owner: 'Givenni Rossi',
}


//OR assignment operator for setting default value by short circuiting. '||='
rest1.numGuest ||= 10;
rest2.numGuest ||= 10;
console.log(rest1, rest2);


///Nullish Assignment operator 
rest1.numGuest ??= 10;
rest2.numGuest ??= 10;
console.log(rest1, rest2);

//AND Assignment operator
rest1.owner &&= '<Anonymous>'
rest2.owner &&= '<Anonymous>'
console.log(rest1,rest2);               */
















/*
                    Nullying Operator'??' 

//Nullish values only short circuit using nullish operator .. Nullish operator includes null and undefined(DOESNOT INCLUDE 0 or '') 

//using OR operator '||'
restaurant.numGuest = 0;
const guest = restaurant.numGuest || 10;
console.log(guest);

//using NUllish operator '??'
const correctGuest = restaurant.numGuest ?? 10;
console.log(correctGuest);        */












/*
                  SHORT CIRCUITING 

//Logical operator can use any data type.. they can return any data type. They can also be use for short curcuiting.

console.log(undefined || 0 || '' || 'Hello' || null || 23); //This will return hello as it is first truthy value in this chain and it short circuits and doesnt return 23.



//              OR OPERATOR

//Both steps mentioned below are used for setting value.. short circuiting is easier for setting default value.
restaurant.numGuest = 23;
const guest1 = restaurant.numGuest ? restaurant.numGuest : 10;
console.log(guest1);

const guest2 = restaurant.numGuest || 10;
console.log(guest2);


//              And Operator
//checks for all until all the values as truthy value ..if any false value found then it returns that else returns last truthy value.
console.log(1 && 'Aayush');
console.log(1 && 'Aayush' && null);


//Both steps mentioned below are used for same purpose.. it checks whether the condition is satisfied or not then sets the value.

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushroom', 'chicken', 'olive');
}

restaurant.orderPizza && restaurant.orderPizza('chicken', 'mushroom', 'cheese');            */













/*
                       REST
Rest collects element and condense into an array. In simple word, rest is used to apck element into a single array.



//Part - 1 [Destructing]
//Example of Rest 
const [a, b, ...others] = [1, 2, 3, 5, 6];
console.log(a, b, others); //'others' makes a new array which includes 3,5,6


//using rest and spread together
const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(pizza, risotto, otherFood);



//Objects using rest

const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

//Part -2 [functions]
const add = function (...num) {
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    sum += num[i];
  }
  console.log(sum);
}

add(1, 2);

const x = [12, 5, 7];
add(...x); 


//mushroom is stored in main ingredient whereas olive and chicken are stored in other Ingredient in a seperate array
restaurant.orderPizza('mushroom', 'olive', 'chicken');   */













/*  

                  SPREAD OPERATOR (...)

spread is used when individual value seperated by commas.spread works on all iterables... it inclues arrays, strings, maps,sets. So spread doesnt work in Object.


//old way
const arr = [7, 8, 9];
const oldArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(oldArr);


//new way
const newArr = [1, 2, ...arr];  // '...' is a spread function which includes all array as indiviuals
console.log(newArr);


const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

//shallow copy array
const mainMenuCopy = [...restaurant.mainMenu];


//join 2 array

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu]
console.log(menu);

//spread in strings 
const str = 'Aayush';
const letter = [...str, ' ', '.'];
console.log(letter);


const ingredients = [prompt("Let's make pasta! Ingredient 1?"),
  prompt("Ingreident 2?"),
  prompt("Ingredient 3?"),
];

//this actually works like the line below. 
restaurant.orderPasta(...ingredients) 
// resturant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);  

console.log(ingredients);


//Objects
const newRest = { foundedIn: 1998, ...restaurant, founder: 'Aayush' }
console.log(newRest);*/



















/*

                  DESTRUCTING ARRAY

restaurant.orderDelivery({
  time: '22:30',
  address: 'Pinglasthan',
  mainIndex: 2,
  straterIndex: 2,
});


restaurant.orderDelivery({
  mainIndex: 1,
  address: 'Nepal'
})


//we need to specify the tags 
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories); 

//we can changes the name of tags in this way 
const {
  name: restaurantNames,
  openingHours: hours,
  categories: tags
} = restaurant;
console.log(restaurantNames, hours, tags);


//default values
const { menu = [], starterMenu: strater = [] } = restaurant;
console.log(menu,strater);

//changing values
let a = 111;
let b = 222;
const obj = { a: 23, b: 22 };

({ a, b } = obj); //we need to wrap destructing code in '()'
console.log(a,b);


//nested objects destructing
const {
  sat: {
    open: o,
    close: c
  }
} = openingHours;
console.log(o,c);
*/


















/*

                DESTRUCTING OBJECT

const arr = [2, 3, 4]
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(a, b, c);


let [first, ,second] = restaurant.categories;
console.log(first, second);


//old way to swtich value of first and second
let tmp = first;
first = second;
second = tmp;
console.log(first, second);



//new way to swtich value of first and second
[first, second] = [second, first];
console.log(first, second);



//ordering from resturant object and destructing
const [strater, mainCourse] = (restaurant.order(2, 0));
console.log(strater, ', ', mainCourse);


//nested array
const nested = [2, 3, [1, 2]];

//noprmal destructing
// const [i, j] = nested;

//destructing nested
const [i, ,[j, k]] = nested; 
console.log(i, j, k);

const [p=1, q=1, r=1] = [8, 9];
console.log(p,q,r); */