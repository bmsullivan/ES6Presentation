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
});
