let count = 0;
function increment() {
    count++;
    document.getElementById("counter").textContent = count;
}

function decrement() {
    count--;
    document.getElementById("counter").textContent = count;
}

let saveEl = document.getElementById("save-el");
function save() {
    let first = count + " - ";
    saveEl.textContent += first;
    count = 0;
    document.getElementById("counter").textContent = count;
}
