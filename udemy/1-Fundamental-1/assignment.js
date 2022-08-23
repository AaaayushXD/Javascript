// First assignment

const country = 'Nepal';
let continent = 'Asia';
let population = 30.5;
console.log('Countries: '+ country);
console.log('Continent: ' + continent);
console.log('Population (in millions): ' + population);

// Second assignment
let isIsland = false;
let language;
console.log('IS your country island: ' + isIsland);
console.log('Population (in millions): ' + population);
console.log('Countries: ' + country);
// console.log('Language spoken: ' + language);



// Third Assignment 
language = 'Nepali';
console.log('Language spoken: ' + language);



//Fourth Assignment
/*
population /= 2;
population++; 
console.log('Population in each halves: ' + population); */
let finland = 6;
if (finland > population) {
    console.log('No, Finland has more');
} else {
    console.log('Yes, Nepal has more');
}

let avg = 33;
if (avg > population) {
    console.log(`${country}'s population is below average`);
} else {
    console.log(`${country}'s population is above average`);
}

let description = 'Nepal is in Asia with around 30 millions people speaking Nepali as their mother tongue.'; description = `${country} is in ${continent} with around ${population} million people speaking ${language} as their mother tongue.`
console.log(description);


/* let numNeighbour = Number(prompt(('How many neighbour countries does your country have?')));
if (numNeighbour === 1) {
    console.log('Only 1 border!');
} else if (numNeighbour > 1) {
    console.log('More than 1 border!');
}
else {
    console.log('No border!');
}*/

if (language == 'English' && population === 50 && isIsland === false) {
    console.log(`You should live in ${country}. :)`);
} else {
    console.log(`${country} doesn't meet your criteria.`)
}


let firstDolphins = 120;
let secondDolphins = 108;
let thirdDolphins = 189;
let avgDolphins = (firstDolphins + secondDolphins + thirdDolphins) / 3;
console.log(avgDolphins);

let firstKoalas = 88;
let secondKoalas = 11;
let thirdKoalas = 10;
let avgKoalas = (firstKoalas + secondKoalas + thirdKoalas) / 3;
console.log(avgKoalas);

if (avgKoalas > avgDolphins && avgKoalas >= 100) {
    console.log('Winners are Koalas.');
} else if (avgKoalas < avgDolphins && avgDolphins >= 100) {
    console.log('Winners are Dolphines.');
} else if (avgDolphins >= 100 && avgKoalas >= 100) {
    console.log('Its a draw');
} 
else {
    console.log('Minimum requirement not fulfilled.')
}


let cost = 275;
let lessTip = (15 / 100) * cost;
let lessTotal = cost + lessTip;
let moreTip = (20 / 100) * cost;
let moreTotal = cost + moreTip;

(cost >= 30 && cost <= 300) ? console.log(`The bill was ${cost} and tip was ${lessTip} so Total value is ${lessTotal}.`) : console.log(`The bill was ${cost} and tip was ${moreTip} so Total value is ${moreTotal}.`);