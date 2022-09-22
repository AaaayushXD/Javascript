'use strict';

const btn = document.querySelectorAll('.ripple');

btn.forEach(button => {
    button.addEventListener('click', function(e) {
        const x = e.clientX;
        const y = e.clientY;
        
        const top = e.target.offsetTop;
        const left = e.target.offsetLeft;

        const xInside = x - left;
        const yInside = y - top;
        
        const circle = document.createElement('span');
        circle.classList.add('circle');
        circle.style.top = yInside + 'px';
        circle.style.left = xInside + 'px';

        this.appendChild(circle);

        setTimeout(() => {
            circle.remove()
        }, 500);
    })
})