'use strict';

describe('Variable Specs', function () {

    it('should use "let"', function () {
        for (var i = 0; i < 5; i++) {}
        //expect(i).toBe(5);
    });

    it('should use constants', function () {
        var PI = 3.14159;
        //PI = 3;
        expect(PI).toBe(3.14159);
    });

    it('should destructure an array', function () {
        var a = [1, 2];
        var b = a[0];
        var c = a[1];

        expect(b).toBe(1);
        expect(c).toBe(2);
    });

    it('should destructure objects', function () {
        var a = { b: 1, c: 2 };

        var x = a.b;
        var y = a.c;

        expect(x).toBe(1);
        expect(y).toBe(2);
    });

    it('should destructure parameters', function () {
        var settings = { url: 'foo', method: 'POST' };
        doSomething(settings);
        function doSomething(_ref) {
            var url = _ref.url;
            var method = _ref.method;

            expect(url).toBe('foo');
            expect(method).toBe('POST');
        }
    });

    it('should allow default parameters', function () {
        function myFunc() {
            var foo = arguments[0] === undefined ? 'bar' : arguments[0];

            return foo;
        }

        expect(myFunc()).toBe('bar');
        expect(myFunc('baz')).toBe('baz');
    });

    it('should use rest params', function () {
        function myFunc(one, two) {
            for (var _len = arguments.length, rest = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
                rest[_key - 2] = arguments[_key];
            }

            expect(one).toBe(1);
            expect(rest).toEqual([3, 4, 5]);
        }

        myFunc(1, 2, 3, 4, 5);
    });
});