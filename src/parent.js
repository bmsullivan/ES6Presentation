import Person from './person';
export default class Parent extends Person {
    constructor(name, children) {
        super(name);
        this.children = children;
    }
}
