const navOpen = document.getElementById('open');
const navClose = document.getElementById('close');
const container = document.querySelector('.container');


navOpen.addEventListener('click', () => {
    container.classList.add('show-nav');
});

navClose.addEventListener('click', () => {
    container.classList.remove('show-nav');
});