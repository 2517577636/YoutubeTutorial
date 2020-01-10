
// what are __filename and __dirname?

console.log("filename: " + __filename + "  dirname: " + __dirname);

class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    greeting(){
        console.log(`My name is ${this.name}, I'm ${this.age}`);
    }
}

module.exports = Person;