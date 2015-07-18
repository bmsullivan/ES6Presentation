export class Person {
    constructor(name) {
        this.name = name;
    }
}

export let sayName = (person) => console.log(person.name);
