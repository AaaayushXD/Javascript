"use strict";

//////////////////        OOP IN USE       ///////////////////////

/*
///constructor function///
// ✅✅  Note: About constructor function
//  1) Name start with capital letter
//  2) //arrow function doesnt work as function declaration for constructor function
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
    this.birthYear = birthYear;

    
    // ❌❌  Never create method inside of a constructor. ❌❌
    // this.calcage = function () {
    //     console.log(2022 - this.birthYear);
    // }; 
};  
const aayush = new Person("Aayush", 2004); //'new' keyword is word to call constructor function
console.log(aayush);
// ✅✅ Note : how this calling works behind the scene 
//  1) New {} 'empty object' is created.
//  2) function is called, In this function, 'this' = {}
//  3) {} linked to prototype
//  4) function automatically retruns {}


const niharika = new Person('Niharika', 2004);
const jack = new Person('Jack', 2000);
console.log(niharika, '\n', jack);

//Instance of is used to find whether it is of constructor function or not
console.log(aayush instanceof Person);   //returns true



/// Prototype  ///
//✅ every function get access to prototype
// .prototype is not the prototype of 'Person' instead it is the prototype of linked object
Person.prototype.calcAge = function () {
    console.log(2022 - this.birthYear);
};

//✅  every function gets access to prototype. So, it also get access to calcAge function.
aayush.calcAge();


console.log(aayush.hasOwnProperty('firstName'));
console.log(aayush.hasOwnProperty('calcAge'));

//prototype of Person
console.log(aayush.__proto__);
//prototype of Object (top of prototype chain)
console.log(aayush.__proto__.__proto__);
//null
console.log(aayush.__proto__.__proto__.__proto__)


const arr = [3, 65, 4, 32, 2, 4, 3, 2, 32];  //new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__  === Array.prototype);

///❌❌ Dont do this on built in function. ❌❌
Array.prototype.unique = function () {
   return [...new Set(this)];
}
console.log(arr.unique());
console.dir(c => c + 1);



///  Es6    ///
// ✅✅ NOTE:
// 1. Classes are not Hoisted -> we cant use it before declaring.
// 2. Classes are first class citizen -> that can be used by calling argument or can be used in function itself.
// 3. Classses are executed in 'strict' mode.

//class expression
// const PersonCla = class { } 

//classs declaration
class PersonCl {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

    ///Methods will be added to .prototype property
    calcAge() {
        console.log(2079 - this.birthYear);
    }

    greet() {
        console.log(`hey ${this.firstName}`);
    }
    //to set property that already exist
    get age() {
        return 2079 - this.birthYear;
    }
    
    set fullName(name) {
        if (name.includes(' ')) {
            this._fullName = name;      // _ gives a new variable name
        } else {
            alert(`${name} is not full name`);
        }
    }

    get fullName() {
        return this._fullName;
    }

    ///    Static method    ///
    // the static method is a method which cannot be called through a class instance.
    static hey() {
        console.log('hey there');
        console.log(this);
    }
}
const aayush1 = new PersonCl('Aayush Lamichhane', 2061);
aayush1.calcAge(); 
console.log(aayush1);
console.log((aayush1.age) + ' ya this one');

const walter = new PersonCl('Walter White', 2050);
console.log(walter);
PersonCl.hey();


///  Getter and Setter  ///
// ✅ Getter : getter methods are used to access the property of an object
// ✅ Setter : setter methods are used to change value of an object

const acc = {
    owner: 'Aayush',
    movement: [200, 1000, 39, 43, 220],

    get latest() {
        return this.movement.slice(-1).pop();
    },
    
    set latest(mov) {
        this.movement.push(mov);
    },
}

console.log(acc.latest);
acc.latest = 50;
console.log(acc.movement);



///  Object.create()  ///
//object.create creates a new object and the prototype of object is the object we pass in
const PersonProto = {
    calcAge() {
        console.log(2079 - this.birthYear);
    }, 

    init(name, birthYear) {
        this.name = name;
        this.birthYear = birthYear;
    },
}

const steven = Object.create(PersonProto)
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2061;
steven.calcAge();

console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init("Aayush", 2061);
sarah.calcAge();


///  Inhertiance between Classes: 'Constructor function'    ///

const Person = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
}

Person.prototype.calcAge = function () {
    console.log(2037 - this.birthYear);
}
const nina = new Person('Nina', 2004);
nina.calcAge();

const Student = function (firstName, birthYear, course) {
    Person.call(this, firstName, birthYear);
    this.course = course;
}

//We must use this to link prototypes before creating any methods becuz this will overwrite any new methods created in the object
Student.prototype = Object.create(Person.prototype);

Student.prototype.intro = function () {
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
}

const mike = new Student("Mike", 2014, 'Computer Science');
mike.intro();
mike.calcAge();


console.log(mike);
console.log(nina);



///  Inhertiance between Classes: 'ES6 classes'    ///

class PersonCl {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

    ///Methods will be added to .prototype property
    calcAge() {
        console.log(2079 - this.birthYear);
    }

    greet() {
        console.log(`hey ${this.firstName}`);
    }
    //to set property that already exist
    get age() {
        return 2079 - this.birthYear;
    }
    
    set fullName(name) {
        if (name.includes(' ')) {
            this._fullName = name;      // _ gives a new variable name
        } else {
            alert(`${name} is not full name`);
        }
    }

    get fullName() {
        return this._fullName;
    }

    ///    Static method    ///
    // the static method is a method which cannot be called through a class instance.
    static hey() {
        console.log('hey there');
        console.log(this);
    }
}


class StudentCl extends PersonCl{
    constructor(fullName, birthYear, course) {
        //Always this need to happen first. otherwise we dont be able to access this keyword for future 
        super(fullName, birthYear);
        this.course = course;
    }

    intro() {
        console.log(`My name is ${this.fullName} and I study ${this.course}`);
    };

    calcAge() {
        console.log(`I'm ${2037- this.birthYear} years old.`);
    };
}

const martha = new StudentCl('Martha Jones', 2012, "computer Science")
martha.intro();
martha.calcAge();



///  Inhertiance between Classes: 'Object.create()'    ///

const PersonProto = {
    calcAge() {
        console.log(2037 - this.birthYear);
    }, 

    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    },
}

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
    PersonProto.init.call(this, firstName, birthYear);
    this.course = course;
}

StudentProto.intro = function () {
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
}

const jay = Object.create(StudentProto);
jay.init('Jay', 2010, "Computer-Science")
jay.intro()



///NOTE: CLass Fields ✅✅
/// 1) Public Fields (Public instance fields)
/// 2) Private Fields (#)
/// 3) Public Methods
/// 4) Private Methods
/// (there is also static version of this)

class Account {
  //defining public fields: they are on all the instances not the prototype.
  locale = navigator.language;

  //Defining private fields:
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;

    console.log(`Thanks for making a new account ${owner}`);
  }

  ///Public Interface

  getMovement() {
    return this.#movements;
  }

  //defining public methods
  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  //static public method
  static helper() {
    console.log("Helper");
  }

  //defining private method --> not yet aviable.

  #approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
      return this;
    }
  }
}
const acc1 = new Account("Aayush", "NRS", 1111);
acc1.deposit(250);
acc1.withdraw(50);
acc1.requestLoan(1000);
console.log(acc1);
Account.helper();

//Chainig
acc1.deposit(200).deposit(3400).withdraw(100).requestLoan(23).withdraw(10);
console.log(acc1.getMovement());
*/



///////////////////////////////////////
// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.
DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h
GOOD LUCK 😀

                        ///SOULTION///
const Car = function (make, speed) {
    this.make = make;
    this.speed = speed;
}
const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 150)


Car.prototype.accelerate = function () {
    this.speed += 10
    console.log(`${this.make} is going at ${this.speed} km/hr`);
}
bmw.accelerate();

Car.prototype.brake = function () {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/hr`);
}
mercedes.brake();
*/

///////////////////////////////////////
// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.
DATA CAR 1: 'Ford' going at 120 km/h
GOOD LUCK 😀



class Cars {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    accelerate() {
        this.speed += 10
        console.log(`${this.make} is going at ${this.speed} km/hr`);
    }
    
    brake() {
        this.speed -= 5;
        console.log(`${this.make} is going at ${this.speed} km/hr`);
    }

    get speedUs() {
        return this.speed / 1.6;
    }

    set speedUs(speed) {
        this.speed = speed * 1.6;
    }
}  

const ford = new Cars('Ford', 120);
console.log(ford.speedUs);
ford.accelerate();
ford.speedUs = 50;
console.log(ford);
*/

////////////////////////////////////////
// Coding Challenge #3

/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉
DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%
GOOD LUCK 😀


const Car = function (make, speed) {
    this.make = make;
    this.speed = speed;
}


Car.prototype.accelerate = function () {
    this.speed += 10
    console.log(`${this.make} is going at ${this.speed} km/hr`);
}


Car.prototype.brake = function () {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/hr`);
}


const EV = function (make, speed, charge) {
    Car.call(this, make, speed);
    this.charge = charge;
}

//Linking prototype
EV.prototype = Object.create(Car.prototype)

EV.prototype.chargeBattery = function (chargeTo) {
    this.charge = chargeTo;
}

EV.prototype.accelerate = function() {
    this.speed += 20;
    this.charge--;
    console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`);
}

const tesla = new EV('Tesla', 120, 50);
tesla.chargeBattery(90);
tesla.accelerate();
*/




///////////////////////////////////////
// Coding Challenge #4

/* 
1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
2. Make the 'charge' property private;
3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. They experiment with chining!
DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%
GOOD LUCK 😀



class Cars {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    accelerate() {
        this.speed += 10
        console.log(`${this.make} is going at ${this.speed} km/hr`);
    }
    
    brake() {
        this.speed -= 5;
        console.log(`${this.make} is going at ${this.speed} km/hr`);
        return this;
    }

    get speedUs() {
        return this.speed / 1.6;
    }

    set speedUs(speed) {
        this.speed = speed * 1.6;
    }
}  


class EVCl extends Cars{
    #charge;
    constructor(make, speed, charge) {
        super(make, speed);
        this.#charge = charge;
    }

    chargeBattery(chargeTo) {
        this.#charge = chargeTo;
        return this;
    }

    accelerate() {
        this.speed += 20;
        this.#charge--;
        console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.#charge}%`);
        return this;
    }
}

const rivian = new EVCl('Rivian', 120, 90);
console.log(rivian);
rivian.accelerate().accelerate().brake().chargeBattery(50).accelerate();
console.log(rivian.speedUs);
console.log(rivian);
*/