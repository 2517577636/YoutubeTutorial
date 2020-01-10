const Person = require('./person');
/* Import aren't support in the node.it's a new feature in the es6.
it will give us an error when we use it in the node.
*/
// import Person from "./person";

const person1 = new Person('Joh Doe', 30);
person1.greeting();