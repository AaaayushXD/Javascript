const body = document.body;
const slides = document.querySelectorAll('.slide');
const leftbtn = document.getElementById('left');
const rightbtn = document.getElementById('right');


let active = 0;

rightbtn.addEventListener('click', () => {
    active++;
    if (active > slides.length - 1) {
        active = 0;
    }
    setBg();
    activeSlide();
})

leftbtn.addEventListener('click', () => {
    active--;
    if (active < 0) {
        active = slides.length - 1;
    }
    setBg();
    activeSlide();
})

setBg();
function setBg() {
    body.style.backgroundImage = slides[active].style.backgroundImage
}

function activeSlide() {
    slides.forEach(slide => {
        slide.classList.remove('active');
    })
    
    slides[active].classList.add('active');
}