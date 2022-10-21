"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

///////////////////////////////////////
/*
const getCountryData = function (country) {
    const request = new XMLHttpRequest();
    request.open('GET', `https://restcountries.com/v2/name/${country}`);
    request.send();
    request.addEventListener('load', function () {

        const [data] = JSON.parse(this.responseText);
        console.log(data);

        const html = `
         <article class="country">
          <img class="country__img" src="${data.flag}" />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
                +data.population / 10000000
            ).toFixed(1)}</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>${data.currencies[0].name
            }💰</span></p>
          </div>
        </article>
    `;

        countriesContainer.insertAdjacentHTML('beforeend', html);
        countriesContainer.style.opacity = 1;
    })
}
getCountryData('nepal');
getCountryData("Australia");
getCountryData("Canada");
*/

const renderCountry = function (data, className = "") {
  const html = `
         <article class="country ${className}">
          <img class="country__img" src="${data.flag}" />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 10000000
            ).toFixed(1)}</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>${
              data.currencies[0].name
            }💰</span></p>
          </div>
        </article>
    `;

  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
};

//render error
const renderError = function (msg) {
  countriesContainer.insertAdjacentText("beforeend", msg);
  countriesContainer.style.opacity = 1;
};

//for fetch errors
const getJSON = function (url, errorMsg = "Something went wrong") {
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error(`${errorMsg}. Status code: ${response.status}`);
    }
    return response.json();
  });
};

/*
const getCountryAndNeighbour = function (country) {

  //AJAX call country
  const request = new XMLHttpRequest();
  request.open("GET", `https://restcountries.com/v2/name/${country}`);
  request.send();

//event handler
    request.addEventListener("load", function () {
        const [data] = JSON.parse(this.responseText);
        console.log(data);

    //render Country
    renderCountry(data);

    //get neighbour
    const [neighbour] = data.borders;
      
    if (!neighbour) return;
    

    //AJAX call 2
    const request2 = new XMLHttpRequest();
    request2.open("GET", `https://restcountries.com/v2/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener("load", function () {
      const data2 = JSON.parse(this.responseText);

      renderCountry(data2, "neighbour");
    });
  });
};
getCountryAndNeighbour("nepal");
*/

// const request = fetch("https://restcountries.com/v2/name/nepal");
// console.log(request);

// using fetch to get country data
// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(response => response.json())
//     .then(data => renderCountry(data[0]));
// };
// getCountryData("nepal");
// getCountryData("usa");

//using fetch to get country and neighbour
// const getCountryData = function (country) {
//   //country 1
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then((response) => {

//       if (!response.ok) {
//         throw new Error(`Country not found. Status code: ${response.status}`)
//       }
//       return response.json();
//     })
//     .then((data) => {
//       renderCountry(data[0]);
//       // const neighbour = data[0].borders[0];
//       const neighbour = 'sdaasd'
//       if (!neighbour) return;
//       //country 2
//       return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
//     })
//     //when promise is fulfilled. (for then)
//     .then((response) => {
//         return response.json()
//       })
//     .then((data) => renderCountry(data, "neighbour"))
//     .catch((err) => {
//       //when promise is rejected (for catch)
//       console.error(`${err} ❌❌`);
//       renderError(`Something went wrong. ${err.message}`);
//     })
//     .finally(() => {
//       //no matter promise is fullfilled or rejected (for finally)
//       countriesContainer.style.opacity = 1;
//     });
// };

// getCountryData('sadsasa')
/* 


const getCountryData = function (country) {
  //country 1
  getJSON(
    `https://restcountries.com/v2/name/${country}`,
    'Country not found'
  )
    .then((data) => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];

      if (!neighbour) throw new Error("No neighbour found!");

      //country 2
      return getJSON(
        `https://restcountries.com/v2/alpha/${neighbour}`,
        'Country not found.'
      );
    })
    .then((data) => renderCountry(data, "neighbour"))
    .catch((err) => {
      //when promise is rejected (for catch)
      console.error(`${err} ❌❌`);
      renderError(`Something went wrong. ${err.message}`);
    })
    .finally(() => {
      //no matter promise is fullfilled or rejected (for finally)
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener("click", function () {
  getCountryData("Bhutan");
});


console.log('Test start');
setTimeout(() => console.log('0 sec timer'), 0);
Promise.resolve('resloved promise 1').then(res => console.log(res));
console.log('Test ends');


//Building promises..................
const lotteryPromise = new Promise(function (resolve, reject) {
  console.log("lottery draw is happening");
  setTimeout(() => {
    if (Math.random() >= 0.5) {
      resolve("You win");
    } else {
      reject(new Error("You lose"));
    }
  }, 2000);
})

lotteryPromise.then((res) => console.log(res)).catch(err=>console.error(err));

///Promisiying setTimeout
const wait = function (sec) {
  return new Promise(function (resolve) {
    setTimeout(resolve, sec * 1000);
  })
}
wait(1)
  .then(() => {
    console.log("1 sec passed");
    return wait(1);
  })
  .then(() => {
    console.log("2 sec passed");
    return wait(1);
  })
  .then(() => {
    console.log("3 sec passed");
    return wait(1);
  })
  .then(() => {
    console.log("4 sec passed");
    return wait(1);
  });


Promise.resolve('abc').then(x => console.log(x));
Promise.reject(new Error("abc")).catch((x) => console.error(x));



const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

getPosition().then((pos) => console.log(pos));

const whereAmI = function () {
  getPosition().then((pos) => {
    const {latitude: lat, longitude:lng } = pos.coords;

    return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
  })
  
    .then((res) => {
      if (!res.ok) throw new Error("Problem with geocodder");
      console.log(res);
      return res.json();
    })

    .then((data) => {
      console.log(data);
      console.log(`You are in ${data.city}, ${data.country}`);

      return fetch(`https://restcountries.com/v2/name/${data.country}`);
    })
    .then((res) => {
      if (!res.ok)
        throw new Error(`Country not found. Status code: ${res.status}`);

      return res.json();
    })
    .then((data) => renderCountry(data[0]))
    .catch((err) => console.error(`${err.message} ❌❌`));
};

btn.addEventListener("click", whereAmI);


///Async Await
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = async function () {
  try {
    //Geolocation Api
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;

    //Reverse Geocoding
    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    if (!resGeo.ok) throw new Error(`Problem getting location`);
    const dataGeo = await resGeo.json();

    //rendering country data
    const res = await fetch(
      `https://restcountries.com/v2/name/${dataGeo.country}`
    );
    if (!res.ok) throw new Error("Invalid country name.");

    const data = await res.json();
    renderCountry(data[0]);

    return `You are in ${dataGeo.city}, ${dataGeo.country}`;
  } catch (err) {
    console.error(`${err} ❌`);
    renderError(`Something went wrong. ❌❌ ${err.message}`);

    throw err;
  }
};


(async function () {
  try {
    const city = await whereAmI()
    console.log(city);
  } catch (err) {
       console.error(`${err.message} ❌❌❌`)
    }
  })()



const getThreeCountry = async function (c1, c2, c3) {
  try {
    const data = await Promise.all([
      getJSON(`https://restcountries.com/v2/name/${c1}`),
      getJSON(`https://restcountries.com/v2/name/${c2}`),
      getJSON(`https://restcountries.com/v2/name/${c3}`),
    ]);
    console.log(data.map(d => d[0].capital));
  } catch (err) {
    console.error(err.message);
  }
}
getThreeCountry('nepal', 'canada', 'bhutan')

/// .race returns fatest . and only returns one result .
(async function () {
  const res = await Promise.race([
    getJSON(`https://restcountries.com/v2/name/nepal`),
    getJSON(`https://restcountries.com/v2/name/italy`),
    getJSON(`https://restcountries.com/v2/name/canada`),
  ]);
  console.log(res[0]);
})();

const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error("Request took too long"));
    }, sec * 1000);
  });
};

Promise.race([getJSON(`https://restcountries.com/v2/name/canada`), timeout(2)])
  .then((data) => console.log(data[0]))
  .catch((err) => console.error(err));

/// .allSettled return all the settled promises
Promise.allSettled([
  Promise.resolve("Success"),
  Promise.reject("Failure"),
  Promise.resolve("Another success"),
])
  .then((data) => console.log(data))
  .catch((err) => console.error(err));

///Promise .any returns fatest fullfilled promised, it ignores rejected promises
Promise.any([
  Promise.resolve("Success"),
  Promise.reject("Failure"),
  Promise.resolve("Another success"),
])
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
*/





///////////////////////////////////////
// Coding Challenge #1

/* 
In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.
Here are your tasks:
PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api.
The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
4. Chain a .catch method to the end of the promise chain and log errors to the console
5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.
PART 2
6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)
TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474
GOOD LUCK 😀

// `https://geocode.xyz/${lat},${lng}?geoit=json`


const whereAmI = function (lat, lng) {
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then((res) => {
      if (!res.ok) throw new Error("Problem with geocodder");
      console.log(res);
      return res.json();
    })

    .then((data) => {
      console.log(data);
      console.log(`You are in ${data.city}, ${data.country}`);

      return fetch(`https://restcountries.com/v2/name/${data.country}`);
    })
    .then((res) => {
      if (!res.ok)
        throw new Error(`Country not found. Status code: ${res.status}`);

      return res.json();
    })
    .then((data) => renderCountry(data[0]))
    .catch((err) => console.error(`${err.message} ❌❌`))
}

whereAmI(52.508, 13.381);
// whereAmI(19.037, 72.873);
whereAmI(-33.933, 18.474);

*/

///////////////////////////////////////
// Coding Challenge #2

/* 

Tasks are not super-descriptive this time, so that you can figure out some stuff on your own. Pretend you're working on your own 😉
PART 1
1. Create a function 'createImage' which receives imgPath as an input. This function returns a promise which creates a new image (use document.createElement('img')) and sets the .src attribute to the provided image path. When the image is done loading, append it to the DOM element with the 'images' class, and resolve the promise. The fulfilled value should be the image element itself. In case there is an error loading the image ('error' event), reject the promise.
If this part is too tricky for you, just watch the first part of the solution.
PART 2
2. Comsume the promise using .then and also add an error handler;
3. After the image has loaded, pause execution for 2 seconds using the wait function we created earlier;
4. After the 2 seconds have passed, hide the current image (set display to 'none'), and load a second image (HINT: Use the image element returned by the createImage promise to hide the current image. You will need a global variable for that 😉);
5. After the second image has loaded, pause execution for 2 seconds again;
6. After the 2 seconds have passed, hide the current image.
TEST DATA: Images in the img folder. Test the error handler by passing a wrong image path. Set the network speed to 'Fast 3G' in the dev tools Network tab, otherwise images load too fast.
GOOD LUCK 😀


const wait = function (sec) {
  return new Promise(function (resolve) {
    setTimeout(resolve, sec * 1000);
  });
};


const imgContainer = document.querySelector(".images");

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement("img");
    img.src = imgPath;

    img.addEventListener("load", () => {
      imgContainer.append(img);
      resolve(img);
    });

    img.addEventListener("error", () => {
      reject(new Error("Images not found"));
    });
  });
};

let currentImg;
createImage("./img/img-1.jpg")
  .then((img) => {
    currentImg = img;
    console.log("Image 1 loaded");
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = "none";
    console.log('Image 1 gone');
    return createImage("./img/img-2.jpg");
  })
  .then((img) => {
    currentImg = img;
    console.log("Image 2 loaded");
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = "none";
    console.log("Image 2 gone");

  })
  .catch((err) => console.error(err));
*/




// Coding Challenge #3

/* 
PART 1
Write an async function 'loadNPause' that recreates Coding Challenge #2, this time using async/await (only the part where the promise is consumed). Compare the two versions, think about the big differences, and see which one you like more.
Don't forget to test the error handler, and to set the network speed to 'Fast 3G' in the dev tools Network tab.
PART 2
1. Create an async function 'loadAll' that receives an array of image paths 'imgArr';
2. Use .map to loop over the array, to load all the images with the 'createImage' function (call the resulting array 'imgs')
3. Check out the 'imgs' array in the console! Is it like you expected?
4. Use a promise combinator function to actually get the images from the array 😉
5. Add the 'paralell' class to all the images (it has some CSS styles).
TEST DATA: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']. To test, turn off the 'loadNPause' function.
GOOD LUCK 😀


//////////Part 1
const wait = function (sec) {
  return new Promise(function (resolve) {
    setTimeout(resolve, sec * 1000);
  });
};

const imgContainer = document.querySelector(".images");

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement("img");
    img.src = imgPath;

    img.addEventListener("load", () => {
      imgContainer.append(img);
      resolve(img);
    });

    img.addEventListener("error", () => {
      reject(new Error("Images not found"));
    });
  });
};


const loadNPause = async function () {
  try {
    //Load image 1
    let img = await createImage("./img/img-1.jpg");
    console.log("Image 1 Loaded");
    await wait(2);
    img.style.display = "none";

    //Load image 1
    img = await createImage("./img/img-2.jpg");
    console.log("Image 2 Loaded");
    await wait(2);
    img.style.display = "none";

  } catch (err) {
    console.error(err);
  }
}
// loadNPause();


//////////Part 2

const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(async img => await createImage(img));
    console.log(imgs);

    const imgsEl = await Promise.all(imgs);
    console.log(imgsEl);

    imgsEl.forEach((img) => img.classList.add('parallel'));

  } catch (err) {
    console.error(err);
  }
}
loadAll(["img/img-1.jpg", "img/img-2.jpg", "img/img-3.jpg"]);

*/