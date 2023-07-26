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
})(Directions || (Directions = {}));
;
var dire = Directions.east;
console.log(dire);
var Direction;
(function (Direction) {
    Direction["south"] = "south";
    Direction["west"] = "west";
    Direction["east"] = "east";
    Direction["north"] = "north";
})(Direction || (Direction = {}));
;
var dire2 = Direction.east;
console.log(dire2);
// let agent = new Agent("taha", 16, 30, "myemail", 21);
