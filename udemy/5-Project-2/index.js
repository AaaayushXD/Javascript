'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btn = document.querySelector('.close-modal');
const btns = document.querySelectorAll('.show-modal');
console.log(btns);

const open = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}
 
for (let i = 0; i < btns.length; i++) {
   btns[i].addEventListener('click', open);
}
const close = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

btn.addEventListener('click', close);
overlay.addEventListener('click', close);

document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
        close();
    }
});