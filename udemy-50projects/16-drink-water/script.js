'use strict';

const cups = document.querySelectorAll('.cup-small');
const liters = document.getElementById('liter');
const percentage = document.getElementById('percentage');
const remaining = document.getElementById('remaining');

/*
Will complete later ....
Todo: insert input number  then the input value and display cups  and percentage filled according..
const btn = document.querySelector('.check');

 let total = 1;
function total() {
    const totalLiters = +document.getElementById('goal').value;
    if ((totalLiters <= 20 && totalLiters >= 1)) {

        const fullCups = document.querySelectorAll('.cup-small.full').length;
        const totalCups = cups.length;
     
        if (fullCups === 0) {
            percentage.style.visibility = 'hidden';
            percentage.style.height = 0;
        } else {
            percentage.style.visibility = 'visible';
            percentage.style.height = `${fullCups / totalCups * 350}px`
            percentage.innerText = `${fullCups / totalCups * 100} %`
        }
     
     
        if (fullCups === totalCups) {
            remaining.style.visibility = 'hidden';
            remaining.style.height = 0;
        } else {
            remaining.style.visibility = 'visible';
            liters.innerText = `${totalLiters - (250 * fullCups / 1000)} L`
        }
    }    
    else {
        document.getElementById('goal').value = ''
    }
}
total();
btn.addEventListener('click', total)
*/

cups.forEach((cup, idx) => {
    cup.addEventListener('click', () => {
        hightlightCup(idx);    
    })
});


function hightlightCup(idx) {
    if (cups[idx].classList.contains('full') && !cups[idx].nextElementSibling.classList.contains('full')) {
        idx--;
    }

    cups.forEach((cup, idx2) => {
        if (idx2 <= idx) {
            cup.classList.add('full');
        } else {
            cup.classList.remove('full');
        }
    })
    updateBigCup();
}


function updateBigCup() {


    const fullCups = document.querySelectorAll('.cup-small.full').length;
    const totalCups = cups.length;
    
    if (fullCups === 0) {
        percentage.style.visibility = 'hidden';
        percentage.style.height = 0;
    } else {
        percentage.style.visibility = 'visible';
        percentage.style.height = `${fullCups / totalCups * 350}px`
        percentage.innerText = `${fullCups / totalCups * 100} %`
    }


    if (fullCups === totalCups) {
        remaining.style.visibility = 'hidden';
        remaining.style.height = 0;
    } else {
        remaining.style.visibility = 'visible';
        liters.innerText = `${5 - (250 * fullCups / 1000)} L`
    }
}