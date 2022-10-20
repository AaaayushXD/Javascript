'use strict';
/*

//Methods of selecting in DOM
console.log(document.documentElement);
const header = document.querySelector('.header');
document.querySelectorAll('.section');
document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);
console.log(document.getElementsByClassName('btn'));


//Creating element

// 1) .insertAdjecentHTML --> to create new element for html
// 2) .createElement creates a new tag element for eg, a div
const msg = document.createElement('div');  
msg.classList.add('cookie-message');


//Inserting text or element

//1. .textContent 
//2. .innerHTML 
// msg.textContent = 'We use cookie for improved functionality and analytics.'
msg.innerHTML = `We use cookie for improved functionality and analytics. \n <button class="btn btn--close-cookie">Got It!</button>"`

//Inserting content at a particular position
//1. .append()
//2. .prepend()
//3. .before()
//4. .after()

// header.prepend(msg);         //puts the msg at the begining
header.append(msg);         //puts the msg at end
// header.append(msg.cloneNode(true))  //clones msg if the condn is true
header.before(msg);     //puts the msg before the eleement
header.after(msg);      //puts the msg after the element



//Delete Element
//1. remove()
//2. .removeChild()
document.querySelector('.btn--close-cookie').addEventListener('click', () =>
    // msg.remove()
    msg.parentElement.removeChild(msg)
);


//styles
// .getComputedStyle() returns us the style which we see in our innterface
//setProperty . we can use this to set property to our custom property(variable in css)

msg.style.backgroundColor = '#37383d';
msg.style.width = '120%';
msg.style.height = Number.parseFloat(getComputedStyle(msg).height) + 40 + 'px';
console.log(getComputedStyle(msg).height);
document.documentElement.style.setProperty('--color-primary', 'orangered')

//Attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.className);
logo.alt = 'Easy, simple logo';
logo.setAttribute('designer', 'Aayush')

console.log(logo.src);   //gives absolute
console.log(logo.getAttribute('src'));  //gives relative

//Data Attributes.
console.log(logo.dataset.versionNumber);

//classes
logo.classList.add('c');
logo.classList.remove('c');
logo.classList.toggle('c');
logo.classList.contains('c');

//dont use .className --> this will overwrite any old class name and we cant set more than 1 class name to an element



///////////////////////////////////////
const allSections = document.querySelectorAll('.section');

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', (e) => {
    
    //new way. works on new browser only
    section1.scrollIntoView({ behavior: 'smooth' });
    
    //////OLD WAY... will work on any browser...
  // const s1 = section1.getBoundingClientRect();  
  // console.log(s1);
  // console.log(e.target.getBoundingClientRect());
  // console.log('current scroll', window.pageXOffset, window.pageYOffset);
  // console.log('height and width', document.documentElement.clientHeight, document.documentElement.clientWidth);

  //Scrolling animation 
  // window.scrollTo(s1.left + window.pageXOffset, s1.top + window.pageYOffset)
  
  // window.scrollTo({
  //   left: s1.left + window.pageXOffset,
  //   top: s1.top + window.pageYOffset,
  //   behavior: 'smooth',
  // }) 
}


//rgb(255,255,255)
const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () =>
    `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;


document.querySelector('.nav__link').addEventListener('click', function (e) {
    this.style.backgroundColor = randomColor();
    console.log('Link', e.target, e.currentTarget);

    //to stop propagation
    // e.stopPropagation(); 
})

document.querySelector('.nav__links').addEventListener('click', function (e) {
    this.style.backgroundColor = randomColor();
    console.log('Links', e.target, e.currentTarget);

})

document.querySelector('.nav').addEventListener('click', function (e) {
    this.style.backgroundColor = randomColor();
    console.log('nav', e.target, e.currentTarget);

})

////We arent using this because...........
//  in this method, forEach will add all the code to every siblings in the node while looping, this will cuz performance issue in bigger website inside we can use event deligation to do same task but much faster

navLink.forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      const id = this.getAttribute('href');
      document.querySelector(id).scrollIntoView({ behavior: 'smooth' })
    })
  })

  

const h1 = document.querySelector('h1');
console.log(h1);

//going downwarD: child
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);
console.log(h1.children);

h1.firstElementChild.style.color = 'orangered';
h1.lastElementChild.style.color = 'white';

//going upward: Parent
console.log(h1.parentNode);
console.log(h1.parentElement);

//closest is opposite of querySelector. it finds the parent while querySelector finds child 
h1.closest('.header').style.background = 'var(--gradient-secondary)';
h1.closest('h1').style.background = 'var(--gradient-primary)';


//Going sideway: siblings
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);


console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(function (el) {
    if (el !== h1) el.style.transform = 'scale(0.5)';
})

//this method also works but window.scroll will fire every time u scroll and will cause performance issue
const initial = section1.getBoundingClientRect()
console.log(initial);

window.addEventListener('scroll', function (e) {

  if (this.window.scrollY > initial.top) {
    nav.classList.add('sticky')
  } else {
    nav.classList.remove('sticky')
  }
})

///Intersection Observer API

const obsCallBack = function (entries, observer) {
  entries.forEach(entry => {
    console.log(entry);
  })
}

const obsOptions = {
  root: null,
  threshold: [0, 0.2],
}

const observer = new IntersectionObserver(obsCallBack, obsOptions);
observer.observe(section1);


document.addEventListener('DOMContentLoaded', function (e) {
    console.log('Loaded');
})

window.addEventListener('beforeunload', function (e) {
    e.preventDefault()
    console.log(e);
    e.returnValue = '';
})
*/