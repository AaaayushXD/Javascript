const jokes = document.getElementById('joke');
const btn = document.getElementById('jokeBtn');

btn.addEventListener('click', generateJoke);

generateJoke();

//using async and await 
async function generateJoke() {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };
    const res = await fetch('https://icanhazdadjoke.com', config);

    const data = await res.json();
    jokes.innerHTML = data.joke;
}


//using .then//


// fetch('https://icanhazdadjoke.com', config)
// .then((res) => res.json())
// .then((data) => {
//     jokes.innerHTML = data.joke;
// });
// }