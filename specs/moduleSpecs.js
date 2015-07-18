import * as personModule from '../src/person';
describe('Module specs', function() {
    it('should allow imported classes to be used', function() {

        expect(personModule.Person).toBeDefined();

        let p = new personModule.Person('Brian');
        expect(p.name).toBe('Brian');
        personModule.sayName(p);
    });
});
