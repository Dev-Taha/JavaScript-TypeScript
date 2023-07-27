var userName = "taha";
var grade = 95;
var anyValue = "sdf";
var array = [];
array.push("taha");
var array2 = ["saturDay", "Sunday", "monday"];
var tupel;
tupel = [1, " taha", 13, "ahmed"];
console.log(array2);
console.log(userName, grade);
var object = {
    // salary is obtional
    name: "taha",
    email: "taha@gmail.com",
    age: 20,
    salary: 1200,
};
console.log(object);
var Agent = /** @class */ (function () {
    function Agent() {
    }
    Agent.prototype.Agent = function (name, hours, numofDays, email, age) {
        this.name = name;
        this.hours = hours;
        this.numofDays = numofDays;
        this.email = email;
        this.age = age;
    };
    Agent.prototype.getSalary = function (hours, numofDays) {
        return hours * numofDays;
    };
    Agent.prototype.getInformation = function () {
        return (this.name +
            " " +
            this.email +
            " " +
            this.age +
            " " +
            this.hours +
            " " +
            this.numofDays);
    };
    return Agent;
}());
var Directions;
(function (Directions) {
    Directions[Directions["south"] = 0] = "south";
    Directions[Directions["west"] = 1] = "west";
    Directions[Directions["east"] = 2] = "east";
    Directions[Directions["north"] = 3] = "north";
})(Directions || (Directions = {})); // index 2
var dire = Directions.east;
console.log(dire);
var Direction;
(function (Direction) {
    Direction["south"] = "south";
    Direction["west"] = "west";
    Direction["east"] = "east";
    Direction["north"] = "north";
})(Direction || (Direction = {})); // with values
var dire2 = Direction.east;
console.log(dire2);
var emp = {
    salary: 120,
    name: 'taha',
    year: 3030,
    model: 'hrker'
};
var myCar = {
    name: "Marcedes",
    year: 2002,
    model: "2022",
};
console.log(myCar); // output => as an object
var PersonName;
PersonName = "taha";
console.log(PersonName);
var p2 = { name: "Alex" };
console.log(p2); // output here as an obejct
var p3 = "Ahmed";
console.log(p3); // output here as a property
console.log(emp);
function myFunction(name, email, age) {
    this.name = name;
    this.email = email;
    this.age = age;
}
var func = new myFunction('taha', 'taha@devtaha.fts', 22); // functional constructore
console.log(func.name);
console.log(func);
function getData(values) {
    this.url = values.url;
    this.from = values.from;
    this.data = values.data;
}
var data = new getData({ url: 'https://jsonplaceholder.typicode.com/users', from: 'web', data: 'users data' });
console.log(data);
function myFinc2() {
    return { name: 'ali', email: 'ali.bou@gmail.com' };
}
console.log(myFinc2());
function getInformation(data) {
    this.name = data.name;
    this.age = data.age;
    this.emial = data.email;
}
var x = new getInformation({ name: 'malek', age: 52, email: 'email' });
console.log(x);
