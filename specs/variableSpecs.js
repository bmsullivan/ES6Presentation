describe('Variable Specs', function() {

    it('should use "let"', function() {
        for(let i = 0; i < 5; i++){}
        //expect(i).toBe(5);
    });

    it('should use constants', function () {
        const PI = 3.14159;
        //PI = 3;
        expect(PI).toBe(3.14159);
    });

    it('should destructure an array', function() {
        let a = [1, 2];
        let [b, c] = a;

        expect(b).toBe(1);
        expect(c).toBe(2);
    });

    it('should destructure objects', function () {
        let a = { b: 1, c: 2 };

        let { b: x, c: y } = a;

        expect(x).toBe(1);
        expect(y).toBe(2);

    });

    it('should destructure parameters', function () {
        let settings = { url: 'foo', method: 'POST' };
        doSomething(settings);
        function doSomething({url, method}) {
            expect(url).toBe('foo');
            expect(method).toBe('POST');
        }
    });

    it('should allow default parameters', function () {
        function myFunc(foo = 'bar') {
            return foo;
        }

        expect(myFunc()).toBe('bar');
        expect(myFunc('baz')).toBe('baz');
    });

    it('should use rest params', function () {
        function myFunc(one, two, ...rest) {
            expect(one).toBe(1);
            expect(rest).toEqual([3,4,5]);
        }

        myFunc(1, 2, 3, 4, 5);
    });

    it('should use spread operator', function () {
        function myFunc(one, two, three) {
            expect(one).toBe(1);
            expect(two).toBe(2);
            expect(three).toBe(3);
        }
        let myArray = [1,2,3];
        myFunc(...myArray);
    });

    it('should use string interpolation', function () {
        let name = 'Brian';
        let message = `Hello, ${name}`;
        expect(message).toBe('Hello, Brian');
    });
});
