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
// console.log(job);
// console.log(years);

var me = 'Aayush';
let job = 'Student';
const years = 2004;

console.log(add(2, 3));
// console.log(addEx(2,3));
// console.log(addArrow(2, 3));

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


console.log(this);

const calcAge = function (birthYear) {
    console.log(2022 - birthYear);
    console.log(this);
}
calcAge(2004);


const calcAgeArrow  = (birthYear) => {
    console.log(2022 - birthYear);
    console.log(this);
}
calcAgeArrow(2000);