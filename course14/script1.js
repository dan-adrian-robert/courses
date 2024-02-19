
class Student {

    constructor(name, age, grades) {
        this.name = name;
        this.age = age;
        this.grades = grades;
    }

    sayHello() {
        console.log(`Hello, my name is ${this.name} !`);
    }

}

const example1 = new Student('Adrian', 28, {mate: 10});

example1.sayHello();


const test = {
    sayHello: () => {
        console.log('hELLO WORLD!');
    }
}

test.sayHello();
