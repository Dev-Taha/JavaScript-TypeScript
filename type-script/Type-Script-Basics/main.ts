let userName: string = "taha";

let grade: number = 95;
let anyValue: any = "sdf";

let array: Array<string> = [];
array.push("taha");

let array2: readonly string[] = ["saturDay", "Sunday", "monday"];

let tupel: readonly [number, string, number, string];
tupel = [1, " taha", 13, "ahmed"];
console.log(array2);

console.log(userName, grade);

type User = {
  name: string | number;
  email: string;
  age: number;
  salary?: number;
};

let object: User = {
  // salary is obtional
  name: "taha",
  email: "taha@gmail.com",
  age: 20,
  salary: 1200,
};

console.log(object);

class Agent {
  name: string;
  email: string;
  age: number;
  hours: number;
  numofDays: number;

  Agent(
    name: string,
    hours: number,
    numofDays: number,
    email: string,
    age: number
  ) {
    this.name = name;
    this.hours = hours;
    this.numofDays = numofDays;
    this.email = email;
    this.age = age;
  }

  getSalary(hours: number, numofDays: number) {
    return hours * numofDays;
  }

  getInformation() {
    return (
      this.name +
      " " +
      this.email +
      " " +
      this.age +
      " " +
      this.hours +
      " " +
      this.numofDays
    );
  }
}

enum Directions {
  south,
  west,
  east,
  north,
} // index 2

let dire: Directions = Directions.east;

console.log(dire);

enum Direction {
  south = "south",
  west = "west",
  east = "east",
  north = "north",
} // with values

let dire2: Direction = Direction.east;

console.log(dire2);

// let agent = new Agent("taha", 16, 30, "myemail", 21);

interface Car {
  name: string;
  year: number;
  model: string;
}

interface Employee extends Car{
  salary: number;
}

let emp: Employee = {
  salary : 120,
  name : 'taha',
  year : 3030,
  model: 'hrker'
}


let myCar: Car = {
  name: "Marcedes",
  year: 2002,
  model: "2022",
};

console.log(myCar); // output => as an object

let PersonName: string;
PersonName = "taha";
console.log(PersonName);

interface Agent2 {
  name: string;
}

let p2: Agent2 = { name: "Alex" };
console.log(p2); // output here as an obejct

let p3: string = "Ahmed";
console.log(p3); // output here as a property

console.log(emp);

function myFunction(name: string,email: string, age: number){ //local var
  this.name = name;
  this.email = email;
  this.age = age;
}

let func = new myFunction('taha','taha@devtaha.fts',22); // functional constructore

console.log(func.name);
console.log(func);

type data = {url: string, from: string | number, data?:string};
function getData(values: data){
  this.url = values.url;
  this.from = values.from;
  this.data = values.data;
}
let data = new getData({url: 'https://jsonplaceholder.typicode.com/users',from: 'web',data: 'users data'});

console.log(data);

type Funct1 = {name: string, email:string}; // name?:string error
function myFinc2() : Funct1 {
    return {name: 'ali',email: 'ali.bou@gmail.com'};
}

console.log(myFinc2());

type method = {name: string,age?: number,email: string | number}; // optional is allowed last object(paremeter) - here the solution this problem use type object
function getInformation(data: method) { // functional constructor
  this.name = data.name;
  this.age = data.age;
  this.emial = data.email;
}

let x = new getInformation({name:'malek',age:52,email:'email'});
console.log(x);

// Done //
