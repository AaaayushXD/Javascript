'use strict';

//challenge 1: 
const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));

const scoreDolphins = calcAverage(144, 123, 111);
const scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

function winnerCheck(avgDolphines, avgKoalas) {
    if (avgDolphines >= 2 * avgKoalas) {
        console.log(`Dolphines wins 🏆 (${avgDolphines} vs ${avgKoalas}) `)
    } else if (avgKoalas >= 2 * avgDolphines) {
        console.log(`Koalas wins 🏆 (${avgKoalas} vs ${avgDolphines}) `)
    } else {
        console.log('Noone wins. :( ')
    }
}

winnerCheck(scoreDolphins, scoreKoalas);

//Challenge 2: 
let tipCalc = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;


let bills = [125, 555, 44];
const tips = [tipCalc(bills[0]), tipCalc(bills[1]), tipCalc(bills[2])];
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, total);

//Challenge  3:

function calcBMI(mass, height) {
    return mass / height ** 2;
}

let marks = {
    firstName: 'Mark', 
    lastName: 'Miller', 
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}
console.log(marks.calcBMI());

let johns = {
    firstName: 'John', 
    lastName: 'Smith', 
    mass: 92,
    height: 1.95,
    calcBMI: function() {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}
console.log(johns.calcBMI());

if (marks.calcBMI() > johns.calcBMI()) {
    console.log(`${marks.firstName} ${marks.lastName}'s BMI (${marks.calcBMI()}) is higher than ${johns.firstName} ${johns.lastName}'s BMI (${johns.calcBMI()})`);
} else {
    console.log(`${johns.firstName} ${johns.lastName}'s BMI (${johns.calcBMI()}) is higher than ${marks.firstName} ${marks.lastName}'s BMI (${marks.calcBMI()})`);
}


//Challenge 4:

let aBills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let aTips = [];
let aTotals = [];

for (let i = 0; i < aBills.length; i++) {
    aTips[i] = tipCalc(aBills[i]);
    aTotals[i] = aBills[i] + aTips[i];
}
console.log(aTips, aTotals, aBills);


//Bonus

let sum = 0;
function calcAvg(arr) {
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(sum);
    return sum / arr.length;
}
console.log(calcAvg([2, 3, 4]));

