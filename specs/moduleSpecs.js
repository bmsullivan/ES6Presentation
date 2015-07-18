//import Person from '../src/person';
import Parent from '../src/parent';
describe('Module specs', function() {
    //it('should allow imported classes to be used', function() {
    //
    //    expect(Person).toBeDefined();
    //
    //    let p = new Person('Brian');
    //    expect(p.name).toBe('Brian');
    //});

    it('should chain imports', function() {
        //let child = new Person('Molly');
        let p = new Parent('Brian', []);

        expect(p.children.length).toBe(0);
    });
});
