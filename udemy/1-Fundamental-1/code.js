let markMass = 78;
let massJohn = 92;
let heightMark = 1.69;
let heightJohn = 1.95;

let markBMI = markMass / heightMark ** 2;
let johnBMI = massJohn / heightJohn ** 2;
console.log('Mark: ' + markBMI);
console.log('John: ' + johnBMI);

let markHigherBMI;
if (markBMI > johnBMI) {
    markHigherBMI = true;
    console.log(`Mark's BMI(${markBMI}) is higher than John's BMI(${johnBMI}).`);
} else {
    markHigherBMI = false;
    console.log(`John's BMI(${johnBMI}) is higher than Mark's BMI(${markBMI}).`);
}