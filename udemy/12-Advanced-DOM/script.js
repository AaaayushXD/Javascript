'use strict';
///////////////////////////////////////
//////////////  ELEMENTS  /////////////////////////
///////////////////////////////////////

//header and sections for Intersection API
const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');

//modal window
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal'); 

//scroll animation
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

//navigation
const nav = document.querySelector('.nav');
const navLinks = document.querySelector('.nav__links');

//tabbed functionality
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container')
const tabsContent = document.querySelectorAll('.operations__content');


//Slider elements
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');
const dotContainer = document.querySelector('.dots');



///////////////////////////////////////
///////////////////// Page Navigation /////////////////
///////////////////////////////////////

//Note: Using event deligation (direction)-> add event listener to common parent element -> and determine what element originated the event
navLinks.addEventListener('click', function (e) {
  e.preventDefault();
  //in this, we check whether the click is in button or not, iff yes it will perform the sscrolling effect
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' })
  }
})

///////////////////////////////////////
///////////////////// Menu fadding Effect  /////////////////
///////////////////////////////////////

//creating function for fade effect 
const fadeEffect = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const sibs = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    //this keyword will be equal to value send by bind below.
    sibs.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
}

//Passing "argument" into handler as 'this' keyword
//to decrease the opacity to 0.5 of every siblings except the target
nav.addEventListener('mouseover', fadeEffect.bind(0.5));
//to bring opacity to normal 1
nav.addEventListener('mouseout', fadeEffect.bind(1));



///////////////////////////////////////
///////////////////// Scrolling Button /////////////////
///////////////////////////////////////
btnScrollTo.addEventListener('click', (e) => {
  //new way. works on new browser only
  section1.scrollIntoView({ behavior: 'smooth' });
})


///////////////////////////////////////
///////////////////// Sticky navigation /////////////////
//USING INTERSECTION OBSERVER API
///////////////////////////////////////

//returns the height of navigation bar
const navHeight = nav.getBoundingClientRect().height;
//to add or remove sticky class to navigation 
const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
}
//Intersection API implementation
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,     //initial viewport 
  threshold: 0,   //when whole viewport is invisible
  rootMargin: `-${navHeight}px`,  
});
headerObserver.observe(header);



///////////////////////////////////////
///////////////////// Modal Window  /////////////////
///////////////////////////////////////
// Modal window for creating an account form 
const openModal = function (e) {
  e.preventDefault();

  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal))


btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});



///////////////////////////////////////
///////////////////// Reveal Sections /////////////////
//USING INTERSECTION OBSERVER API
///////////////////////////////////////
const revealSection = function (entries, observer) {
  const [entry] = entries;
  
  if (!entry.isIntersecting) return;
  //when entry is intersecting then remove hidden classlist
  entry.target.classList.remove('section--hidden');
  //once all hidden classes are removes. stop observiing 
  observer.unobserve(entry.target);
}

//Implementing Intersection Observer with null root an 15% threshold.
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

//observe each section and add hidden class at begining
allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden')
})



///////////////////////////////////////
///////////////////// Lazy Loading Images /////////////////
///////////////////////////////////////
const imgTarget = document.querySelectorAll('img[data-src]');
const loadImg = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;

  //replace src with data-src attributes
  entry.target.src = entry.target.dataset.src;
  
  //remove the lazy img class and blur filter once the image is loaded
  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  })
  observer.unobserve(entry.target);
}
//Implementing Intersection Observer
const imgObserver = new IntersectionObserver(loadImg, {
  root: null, 
  threshold: 0,
  rootMargin: '200px',  //to load image 200px before we scroll to it
});
//observing images
imgTarget.forEach(img => imgObserver.observe(img));




///////////////////////////////////////
///////////////////// Tabbed functionality /////////////////
///////////////////////////////////////
tabsContainer.addEventListener('click', function (e) {

  ///////FOr TABS/////
  //to get button element only and add active class
  const clicked = e.target.closest('.operations__tab');
  //Gaurd clause --> returns immeditely if condn matches 
  if (!clicked) return;
  //remove active class from all tabs
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  //adding active class to the tab that is clicked.
  clicked.classList.add('operations__tab--active');

  //////FOR CONTENT//////
  //Remove active content before clicking
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));
  //Activate content area 
  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active');
})



///////////////////////////////////////
///////////////////// Slider Effect /////////////////
///////////////////////////////////////

let currentSlide = 0;
const maxSlide = slides.length - 1;

//GO to slides
const goToSlide = function (slide) {
  slides.forEach((s, i) => s.style.transform = `translateX(${100 * (i - slide)}%)`)
}
goToSlide(0);

//active slide indicator
const activeDot = function (slide) {
  document.querySelectorAll('.dots__dot').forEach(dot => dot.classList.remove('dots__dot--active'));
  document.querySelector(`.dots__dot[data-slide="${slide}"]`).classList.add('dots__dot--active');
}

//Go to next slide
const nextSlide = function () {
  if (currentSlide === maxSlide) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  goToSlide(currentSlide);
  activeDot(currentSlide);
}

//Go to Prev slide 
const prevSlide = function () {
  if (currentSlide === 0) {
    currentSlide = maxSlide;
  } else {
    currentSlide--;
  }
  goToSlide(currentSlide);
  activeDot(currentSlide);
}

//Create dots 
const createDots = function () {
  slides.forEach((_, i) => {
    dotContainer.insertAdjacentHTML('beforeend',
      `<button class="dots__dot" data-slide="${i}"></button>`);
  })
}


const init = function () {
  goToSlide(0);
  createDots();
  activeDot(0);
}
init();

setInterval(() => init, 1000);

///EVENT HANDLERS
//////////////// Using arrow keys ///////////////////////
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') prevSlide();
  if (e.key === 'ArrowRight') nextSlide();
})

//////////////// Using arrows button ///////////////////////
btnLeft.addEventListener('click', prevSlide);
btnRight.addEventListener('click', nextSlide);

//////////////// Using Circle buttons ///////////////////////
dotContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('dots__dot')) {
    const { slide } = e.target.dataset;
    goToSlide(slide);
    activeDot(slide);
  }
});

