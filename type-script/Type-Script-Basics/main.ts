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

type User = { name: string|number; email: string; age: number; salary?: number };

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

enum Directions {south, west,east,north}; // index 2

let dire: Directions = Directions.east;

console.log(dire);


enum Direction {south = 'south', west = 'west' ,east = 'east',north= 'north'}; // with values

let dire2: Direction = Direction.east;

console.log(dire2);


// let agent = new Agent("taha", 16, 30, "myemail", 21);
