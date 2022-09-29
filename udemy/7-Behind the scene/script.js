'use strict';
/*
function calcAge(birthYear) {
    const age = 2022 - birthYear;
    console.log(age, firstName);

    function printAge() {
        const output = `${firstName} is ${age} years old .He was born in ${birthYear} A.D. .`
        console.log(output);

        if (birthYear >= 1900 && birthYear <= 2000) {
            var str = `Oh, ${firstName} is a Millenial.`
        }
        else {
            var str= `${firstName} is a GenY`
        }
        console.log(str);
    }
    printAge();
    return age;
}



const firstName = 'Aayush';
calcAge(1992);



//Hoisting Example

console.log(me);
 console.log(job);
 console.log(years);

var me = 'Aayush';
let job = 'Student';
const years = 2004;

console.log(add(2, 3));
 console.log(addEx(2,3));
 console.log(addArrow(2, 3));

function add(a, b) {
    return a + b;
}   //this can only be used before initialization.

const addEx = function (a, b) {
    return a + b;
}

const addArrow = (a, b) => {
    return a + b;
}


//Example

let num = 10;
if (!num) deleteCart();

function deleteCart() {
    console.log('All Products deleted');
}*/


// console.log(this);

// const calcAge = function (birthYear) {
//     console.log(2022 - birthYear);
//     console.log(this);
// }
// calcAge(2004);


// const calcAgeArrow  = (birthYear) => {
//     console.log(2022 - birthYear);
//     console.log(this);
// }
// calcAgeArrow(2000);

/*

const jonas = {
    firstName: 'Aayush',
    year: 2004,
    calcAge: function () {
        console.log(2022-this.year);
        
        const self = this;

        const isMillenial = function () {
            console.log(self);
            console.log(self.year);
        }
        isMillenial();
    }    
}
jonas.calcAge();

const addEx = function (a, b) {
    console.log(arguments);
    return a + b;
}
addEx(2, 5);


//argument are only aviavle for normal function and cant be used in arrow function.
var addArrow = (a, b) => {
    console.log(arguments);
    return a + b;
}

addArrow(2, 5); 

let age = 18;
let oldAge = age;
age = 19;
console.log(age, oldAge); //119, 18


const me = {
    name: 'Aayush',
    age: 18
};

const friend = me;
friend.age = 20; // changes age of both to 20

//they point to same object in memory so by changng one, both value gets changed.
console.log('Friend: ', friend); //age = 20
console.log('Me: ', me);    //age = 20   


//primitive values are saved in each piece in memory stack
let lastName = 'Lamichhane';
let oldLastName = lastName;
lastName = 'blah';
console.log(lastName, oldLastName);  //blah, lamichhane

//reference type
const Aayush = {
    firstName: 'Aayush',
    lastName: 'Lamichhane',
    age: 18,
};

//this doesnt create new object in heap..it just ppoint to same memory address.
// const aayushchanged = Aayush;
// aayushchanged.lastName = 'blah';


//copying object
const Aayush2 = {
    firstName: 'Aayush',
    lastName: 'Lamichhane',
    age: 18,
    family: ['Abcd', 'asds', 'sgvc'],
};

//object.assign only works in first lvl of copying.. it means it only copy primitives but cant deep clone array and objects inside another
const copy = Object.assign({}, Aayush2);
copy.lastName = 'blah';


copy.family.push('mvnm');
copy.family.push('sdsd');

console.log('Unchanged: ', Aayush2);
console.log('Changed: ', copy); */