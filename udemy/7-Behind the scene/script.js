'use strict';

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
