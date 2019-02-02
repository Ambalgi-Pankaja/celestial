class Person{
    constructor(name, height){
        this.name = name,
        this.height = height
    }

    greet() {
        console.log(`Hi I am ${this.name} of ${this.height}`);
    }
}

export default Person;