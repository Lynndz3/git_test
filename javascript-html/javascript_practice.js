function Book(title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read
    this.info = function() {
        console.log(`${this.title} by ${author} is ${pages} pages`);
        read === true ? console.log("and is read") : console.log("and is not read");
    }
}

let newBook = new Book("Hobbit", "authorrr", 550, false);

//newBook.info();

/////////////////////////////////////////////////////////////

function Plant() {
    this.country = "Mexico",
    this.isOrganic = 'true'
}

Plant.prototype.AmIOrganic = function () {
    if (this.isOrganic == 'true') {
        console.log("I am organic!");
    }
    else console.log("I am not organic");
}

Plant.prototype.showNameAndColor = function () {
    console.log(`I am ${this.name} and ${this.color}`);
}

let poisonOak = new Plant();

function Fruit (name, color) {
    this.name = name;
    this.color = color;
} 

Fruit.prototype = new Plant ();

let watermelon = new Fruit("melon", "green");

//watermelon.showNameAndColor();
//watermelon.AmIOrganic();

function People () {
    this.superstar = "Michael";
}

People.prototype.athlete = "Tiger Woods";

let newPerson = new People ();

newPerson.superstar = "John";

//console.log(newPerson.athlete);
//console.log(People.superstar);

function Animal () {
    this.eats = "mmhmmm"
    this.doesWalk = function() {
        console.log("animal walks");
    }
}

let rabbit = {};

rabbit.talks = "hi";

//Object.setPrototypeOf(rabbit, Animal.prototype);
//Animal.prototype.wow = "wowee1"
//console.log(rabbit.eats);

let head = {
    glasses: 1
  };
  
  let table = Object.create(head);

  table.pen = 3;
  
  let bed = Object.create(table);
  
  bed.sheet = 1;
  bed.pillow = 2;
  
  let pockets = Object.create(bed);

  pockets.money = 2000;

//   console.log(pockets.pen);
//   console.log(bed.glasses);
//   console.log(pockets.pillow);


let person = {
    firstName: "John",
    age: 32
}

let greet = function() {
    console.log(`${this.firstName} yo yo`);
}

greet.call(person);

