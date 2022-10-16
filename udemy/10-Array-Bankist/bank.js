"use strict";

// Data
const account1 = {
  owner: "Aayush Lamichhane",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    "2019-11-18T21:31:17.178Z",
    "2019-12-23T07:42:02.383Z",
    "2020-01-28T09:15:04.904Z",
    "2020-04-01T10:17:24.185Z",
    "2020-05-08T14:11:59.604Z",
    "2020-07-26T17:01:17.194Z",
    "2022-10-12T23:36:17.929Z",
    "2022-10-14T10:51:36.790Z",
  ],
  currency: "NRS",
  locale: "en-Us", // de-DE
};

const account2 = {
  owner: "Niharika Shrestha",
  movements: [5000, 3400, -150, -790, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    "2019-11-01T13:15:33.035Z",
    "2019-11-30T09:48:16.867Z",
    "2019-12-25T06:04:23.907Z",
    "2020-01-25T14:18:46.235Z",
    "2020-02-05T16:33:06.386Z",
    "2020-04-10T14:43:26.374Z",
    "2022-10-12T18:49:59.371Z",
  ],
  currency: "USD",
  locale: "en-Us",
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

//Elements
//welcome page elements
const welcome = document.querySelector(".welcome");
const submit = document.querySelector(".submit");
const user = document.querySelector(".user");
const pin = document.querySelector(".pin");
//Navigation bar, main body and logout elements
const navigation = document.querySelector(".navbar");
const logout = document.querySelector(".logout");
const main = document.querySelector("main");
const id = document.querySelector("#id");
//To get date and time element
const currentTime = document.querySelector(".label_date");

//Movement elements
const movementContainer = document.querySelector(".movement");
const balance = document.querySelector(".total");
const income = document.querySelector(".income");
const outgoing = document.querySelector(".outgoing");
const intrest = document.querySelector(".intrest");
const transactionTime = document.querySelector(".date");
//transfer elements
const send = document.querySelector(".send");
const transferAmount = document.querySelector(".transfer-amount");
const transferId = document.querySelector(".transfer-id");
//deposite money
const depositAmount = document.querySelector(".deposit-amount");
const receive = document.querySelector(".receive");
//delete account element
const deleteAcc = document.querySelector(".throw");
const deleteUserID = document.querySelector(".user-id");
const deleteUserPin = document.querySelector(".user-pin");
//logout timer
const timer = document.querySelector('.timer');




//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
//////////////All neccessary Functions///////////////////
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////


//function for updating UI
const updateUI = function (acc) {
  //display movement
  displayMovement(acc);
  //display balance
  totalBalance(acc);
  //display summary
  summary(acc);
};

//function for hiding UI
const hideUI = function () {
  navigation.classList.remove("active");
  main.classList.remove("active");
  welcome.classList.add("active");
  document.body.style.backgroundColor = "#515050";
};

//Formatted date function
const formattedDates = function (date,locale) {
  //calculate the days passed
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));
  //time passed of transaction from current date
  const daysPassed = calcDaysPassed(new Date(), date);
  // console.log(daysPassed);

  //to print tofay,yesterday or the full date
  if (daysPassed === 0) return "Today";
  if (daysPassed === 1) return "Yesterday";
  if (daysPassed <= 7) return `${daysPassed} days ago.`;

  //internationalizinggg 
  return new Intl.DateTimeFormat(locale).format(date);
};


//formatting currency 
const formattedCurr = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
}


//Logout timer 
const logOutTimer = function () {
  const tick = function () {
    //convert sec into min and seconds
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);
    
    //in each call , print remaining time
    timer.innerHTML = `${min}:${sec}`;
    
    //when reach 0s, stop timer and logout 
    if (time === 0) {
      clearInterval(logTimer);
      hideUI();
    }
    //decrease in every second
    time--;
  };

  //set timer for 10 mins
  let time = 5*60;

  //call timer evry sec
  tick();
  const logTimer = setInterval(tick, 1000);
  return logTimer;
};

//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////


//Welcome page and login styling
let currentAccount, logTimer;

document.body.style.backgroundColor = "#515050";
submit.addEventListener("click", (e) => {

  //Prevents the form from submitting
  e.preventDefault();

  //to check for valid account for logging in
  currentAccount = accounts.find((acc) => acc.username === user.value);
  if (currentAccount?.pin === +pin.value) {

    //styling and changing the welcome page to main page
    welcome.classList.remove("active");
    document.body.style.backgroundColor = "#010101";
    navigation.classList.add("active");
    main.classList.add("active");

    //Display current date and time
    const now = new Date();
    const options = {
      hour: "numeric",
      minute: "numeric",
      day: "numeric",
      month: "long",
      year: "numeric",
      weekday: "long",
    };

    //internationalizing date
    currentTime.innerHTML = `As of ${new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now)}`;

    //logging in according to the username and pin provided
    id.innerHTML = currentAccount.owner.split(" ")[0];

    //Logout timer activates
    if (logTimer) clearInterval(logTimer);
    logTimer = logOutTimer();
    

    //upate UI
    updateUI(currentAccount);

  } else {
    alert("Username or Pin incorrect. Please try again");
  }
  user.value = pin.value = "";
});

//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////


//to create username
const username = function (accs) {
  accs.forEach((acc) => {
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map((names) => names[0])
      .join("");
  });
};
username(accounts);

//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////


//to show total balance of the account
const totalBalance = function (account) {
  account.balance = account.movements.reduce((accum, mov) => accum + mov, 0);
  console.log(account.balance);
  balance.innerHTML = formattedCurr(account.balance, account.locale, account.currency);
};

//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////


//display Movement
const displayMovement = function (acc) {
  movementContainer.innerHTML = "";

  acc.movements.forEach(function (mov, i) {
    const type = mov > 0 ? "deposite" : "withdraw";

    //to display transaction date
    const date = new Date(acc.movementsDates[i]);
    const displayDate = formattedDates(date, acc.locale);
    const formattedMov = formattedCurr(mov, acc.locale, acc.currency);

    const transactions = `
        <div class="transaction">
        <div class="left">
            <span class="${type} move">${i + 1}.  ${
      type[0].toUpperCase() + type.slice(1)
    }</span>
            <span class="date act">${displayDate}</span>
        </div>
        <div class="right">
            <span class="amount">${formattedMov}</span>
        </div>
        </div>
        `;
    movementContainer.insertAdjacentHTML("afterbegin", transactions); //afterbegin will put latest content at the top whereas 'beforeend' put the oldest content at the top.
  });
};

//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////


//For summary
//Income, outgoing and intrest amount
const summary = function (account) {
  const incomes = account.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  income.textContent = formattedCurr(incomes, account.locale, account.currency);

  const outAmt = account.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  outgoing.textContent =formattedCurr(Math.abs(outAmt), account.locale, account.currency);


  const intrests = account.movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * account.interestRate) / 100)
    .filter((int) => int >= 1)
    .reduce((acc, int) => acc + int, 0);
  intrest.textContent = formattedCurr(intrests, account.locale, account.currency);;
};

//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////


//To transfer money from one acc to another
send.addEventListener("click", (e) => {
  e.preventDefault();

  const amount = +transferAmount.value;
  const receiver = accounts.find((acc) => acc.username === transferId.value);
  transferAmount.value = transferId.value = "";

  //checking if the balance is positive and either the account have enough money.
  if (
    amount > 0 &&
    currentAccount.balance >= amount &&
    receiver?.username !== currentAccount.username &&
    receiver
  ) {
    //doing the transfer
    currentAccount.movements.push(-amount);
    receiver.movements.push(amount);
    //adding date for transfer
    currentAccount.movementsDates.push(new Date().toISOString());
    receiver.movementsDates.push(new Date().toISOString());
    //upate UI
    updateUI(currentAccount);

    //reset timer 
    clearInterval(logTimer);
    logTimer = logOutTimer();
  } else {
    alert("Enter valid amount or valid id for transferring.");
  }
});

//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////


//to deposit money in bank
receive.addEventListener("click", (e) => {
  e.preventDefault();

  const amount = +depositAmount.value;
  console.log(amount);
  if (
    amount > 0 &&
    currentAccount.movements.some((mov) => mov >= amount * 0.1)
  ) {
    setTimeout(function () { //Add movement
      currentAccount.movements.push(amount);

      // add deposit date
      currentAccount.movementsDates.push(new Date().toISOString());
      //update UI
      updateUI(currentAccount);
      //reset timer 
      clearInterval(logTimer);
      logTimer = logOutTimer();
    }, 3 * 1000);

  } else {
    alert(
      "We cant let you deposite this big amount of money at once. Please try again later!!"
    );
  }
  depositAmount.value = "";
});

//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////


//to delete an account
deleteAcc.addEventListener("click", (e) => {
  e.preventDefault();

  //search if username exist
  const accHolder = accounts.find((acc) => acc.username === deleteUserID.value);
  const accPin = accounts.find((acc) => acc.pin === deleteUserPin.value);

  //check if username and pin matches or not
  if (
    deleteUserID.value === currentAccount.username &&
    +deleteUserPin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      (acc) => acc.username === currentAccount.username
    );

    //delete account
    accounts.splice(index, 1);

    //logout as well
    hideUI();
  } else {
    alert("Enter valid information. Please try again!!");
  }
  deleteUserID.value = deleteUserPin.value = "";
});

//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////


//Loging out
logout.addEventListener("click", (e) => {
  //Prevents the form from submitting
  e.preventDefault();

  //take back to login page
  hideUI();
});
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
