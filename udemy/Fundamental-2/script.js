'use strict';
function cutter(fruits) {
    return fruits * 4;
}
function fruits(apples, oranges) {
    const applePieces = cutter(apples);
    const orangePieces = cutter(oranges);
    const juice = `Juice of ${applePieces} pieces of apple and ${orangePieces} pieces of oranges`;
    return juice;
}
console.log(fruits(5, 9));


function calcAge(birthYear) {
    return 2022 - birthYear;
}
console.log(calcAge(18));

const myAge = Age => 2022 - Age 
console.log(myAge(18)); 

const retire = (birth, firstName) => {
    const currentAge = 2022 - birth;
    const retirement = 65 - currentAge;
    return `${firstName} will retires in ${retirement} years.`;
}
console.log(retire(2004, 'Aayush'));

const friends = ['aayush', 'niharika'];
const year = new Array(2061, 2060);

console.log(friends[0] + ' ' + year[0]);
console.log(friends[1] + ' ' + year[1]);
console.log(friends.length);
console.log(year);
