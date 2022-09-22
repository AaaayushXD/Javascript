'use strict';


//all neccessary variables
const hourEl = document.querySelector('.hour');
const minEl = document.querySelector('.minute');
const secEl = document.querySelector('.second');
const timeEl = document.querySelector('.time');
const dateEl = document.querySelector('.date');
const btn = document.querySelector('.toggle');
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const mnths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];


//toggle dark-light mode
btn.addEventListener('click', (e) => {
    const html = document.querySelector('html');
    if (html.classList.contains('dark')) {
        html.classList.remove('dark');
        e.target.innerHTML = 'Dark Mode'
    } else {
        html.classList.add('dark');
        e.target.innerHTML = 'Light Mode'
    }
})


//set time
function setTime() {
    //get all the neccessary data
    const time = new Date();
    const month = time.getMonth();
    const hour = time.getHours();
    const day = time.getDay();
    const dates = time.getDate();
    const hourClock = hour % 12;
    const mins = time.getMinutes();
    const secs = time.getSeconds();
    const ampm = hour >= 12 ? 'PM' : 'AM';
    
    //rotate the needle accurately for mins, secs and hours
    hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hourClock, 0, 11, 0, 360)}deg)`
    
    minEl.style.transform = `translate(-50%, -100%) rotate(${scale(mins, 0, 59, 0, 360)}deg)`
    
    secEl.style.transform = `translate(-50%, -100%) rotate(${scale(secs, 0, 59, 0, 360)}deg)`
    
    //set digital time value
    timeEl.innerHTML = `${hour < 10 ? `0${hour}` : hour}: ${mins < 10 ? `0${mins}` : mins} ${ampm}`
    
    //set day, month and date value
    dateEl.innerHTML = `${days[day]}, ${mnths[month]} <span class= "circle">${dates}</span>`
}

//map a range 
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
  }

setTime();

setInterval(setTime, 1000)