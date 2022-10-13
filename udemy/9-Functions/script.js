"use strict";

/*


                        //to set default value 


const book = [];
const createBooking = function (flightNo, noPass = 1, price = 1999) {
  //ES5 way
  // noPass = noPass || 1;
  // price = price || 1999;

  const booking = {
    flightNo,
    noPass,
    price,
  };
  console.log(booking);
  book.push(booking);
};

createBooking("LH123");
createBooking("LH123", 800, 2999);
createBooking("LH123", undefined, 2999); //to skip a value to default




                    //pass argumennt to function



const flight = 'LH123';
const aayush = {
    name: 'Aayush',
    passport: 1237493,
}
const checkIn = function(flightNo, passenger) {
    //when we pass primitive .. it is just copied so it doesnt change original value
    flightNo = 'LH222'
    //when we pass object, change in one changes the other as they are both pointing to same refference in heap
    passenger.name = 'Mr. ' + passenger.name;

    if(passenger.passport === 1237493) {
        // alert('Checked in')
    } else {
        // alert('F off')
    }
}
checkIn(flight, aayush)
console.log(flight, aayush);

const newPass = function(person) {
    person.passport = Math.trunc(Math.random()) * 1000000000;
}
newPass(aayush);
checkIn(flight, aayush)



//Passing by refrence is not aviable in JS. We can pass the reference to avalue but we cant pass by refrence as in C or C++.





                    //fucntion that accept callback function

const oneWord = function(str) {
    return str.replace(/ /g, '').toLowerCase();
}

const upperFirst = function(str) {
    const [first, ...other] = str.split(' ');
    return [first.toUpperCase(), ...other].join(' ');
}

//Higher Order Function 
const transform = function(str, fn) {
    console.log(`Original: ${str}`);
    console.log(`Transformed String: ${fn(str)}`);

    console.log(`Transformed: ${fn.name}`);
}

//upperFirst, oneWord, high5 are callback function whereas addeventlistener and transform are higher order function.
transform('JavaScript is best!', upperFirst);
transform('JavaScript is best!', oneWord);

const high5 = function() {
    console.log('✌');
}
document.body.addEventListener('click', high5);
['Aayush', 'Aayush2', 'Aayush3'].forEach(high5);




                        //function returnning function




const greet = function(greeting) {
    return function(name) {
        console.log(`${greeting} ${name}`);
    }
}

const gretter = greet('Hey, Its me');
gretter('Aayush')
greet('Hello')('Aayush');


const welcome = come => firstName => console.log(`${come} ${firstName}`);

welcome("Hey")('Aayush')


                    //### Call, Apply and Bind method ###//





const nepalAirline = {
  airline: "budhha Air",
  code: "BA",
  booking: [],
  book(flightNo, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.code}${flightNo}`
    );
    this.booking.push({ flight: ` ${this.code}, ${flightNo}, ${name}` });
  },
};

nepalAirline.book(239, "Aayush");
console.log(nepalAirline);

//call and apply method
const euroWings = {
  airline: "EuroWings",
  code: "EW",
  booking: [],
};

const book = nepalAirline.book;
//Doesnt work like this cuz 'This keyword' points to undeifined
// book(23, "sarah")

//Call method
// .call helps us to manually manipulate this keyword.
// in this example, call helped us to manipulate this keyword from nepalAirline to EuroWings
book.call(euroWings, 23, "Sarah");
console.log(euroWings);
book.call(nepalAirline, 34, "AAAAYush");

//apply method
//it doesnt take multiple argument instead it takes an array as an argument
const data = [543, "Sarah12"];
book.apply(euroWings, data);
console.log(euroWings);
//instead of apply we can use call in this way.
book.call(euroWings, ...data); //using spread operator

//Bind method --> to set this keyword manually.
//this is easier as it creates a new function and can be used.
const bookEW = book.bind(euroWings);
bookEW(213, "Steven");

const bookEW23 = book.bind(euroWings, 23);
bookEW23("Nyari");

//With event listener
nepalAirline.planes = 300;
nepalAirline.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};
document
  .querySelector(".buy")
  .addEventListener("click", nepalAirline.buyPlane.bind(nepalAirline));

//challenge

const addTax = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addVAT = addTax(0.23);
console.log(addVAT(100));

const addTaxRate = (rate) => (value) => value + value * rate;
const vatRate = addTaxRate(0.23);
console.log(vatRate(100));




// IMMEDIETELY INVOKING FUNCTION EXPRESSION

(function() {
    console.log('This will only run once');
})();

    
(() => console.log('This will only run once')
)();


{
    const isPrivate = 23;
    var notPrivate = 21;
}
// console.log(isPrivate); doesnt work as it is block scoped
console.log( notPrivate); //var doesnt create block scope





        ////////////        CLOSURE             ////////////





//Closure is the closed over varible environment of the execution context in which was created, even after that exxecution context is gone.

// closure gives a function access to all variable of its parent function, even after the parent functyion has returned. the function keeps a refence to its outer scope, which preserves the scope chain throughout time

// Closure makes sure that a functio doesnt loose connection to variable that existed at the function's birth place

//Closure makes a function remeber all the variable at the time it was written even after it is gone. 
const secureBooking = function () {
    let passCount = 0;
    return function () {
        passCount++;
        console.log(`${passCount} passengers`);
    }
}
// the above function has completed it work and is gone but still booker get access of passCount and increases  it value.
const booker = secureBooking();
booker();   //1 passenger
booker();   //2 passenger
booker();   //3 passenger


//A function has access to the variable environment of the execution cintext in which it was created.
// closure: VE attached to function, exactly as it was at the time and place the function was created.



let f;
const g = function () {
    const a = 22;
    f = function () {
        console.log(a * 2); 
    }
}
const h = function () {
    const b = 222;
    f = function () {
        console.log(b * 3);
    }
}

g();
f();
console.dir(f);
h();
f();
console.dir(f);

*/