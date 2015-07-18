import { Person, sayName } from '../src/person';
describe('Module specs', function() {
    it('should allow imported classes to be used', function() {

        expect(Person).toBeDefined();

        let p = new Person('Brian');
        expect(p.name).toBe('Brian');
        sayName(p);
    });
});
