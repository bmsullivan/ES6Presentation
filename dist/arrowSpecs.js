'use strict';

describe('Arrow specs', function () {
    it('should invoke like a function', function () {
        var sum = function sum(a, b) {
            return a + b;
        };

        expect(sum(1, 2)).toBe(3);
    });

    it('should be used for parameters', function () {
        var sum = 0;
        var numbers = [1, 2, 3, 4];

        numbers.forEach(function (n) {
            return sum += n;
        });
        expect(sum).toBe(10);
    });

    it('should use lexical scope', function () {
        var _this = this;

        this.myVal = 5;
        var addMyVal = function addMyVal(a) {
            return _this.myVal + a;
        };

        expect(addMyVal(1)).toBe(6);
    });
});