import Person from './person.js'

class Student extends Person {
    constructor(name, height){
        super(name, height);
    }
}

let pank = new Student("pank", 5.2);

console.log(pank);

export {pank}