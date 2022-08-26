'use strict';

const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circle = document.querySelectorAll('.circle');

let active = 1;

next.addEventListener('click', function () {
    active++;

    if (active > circle.length) {
        active = circle.length;
    };
    update();
});

prev.addEventListener('click', function () {
    active--;
    if (active < 1) {
        active = 1;
    };
    update();
});

function update() {
    circle.forEach((circle, idx) => {
        if (idx < active) {
            circle.classList.add('active');
        }      
        else {
            circle.classList.remove('active');
        }
    });

    const current = document.querySelectorAll('.active');

    progress.style.width = (((current.length - 1) / (circle.length - 1)) * 100 + '%');
    
    if (active === 1) {
        prev.disabled = true;
    } else if (active === circle.length) {
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }
};