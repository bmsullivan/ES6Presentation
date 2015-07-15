describe('Arrow specs', function() {
    it('should invoke like a function', function() {
        let sum = (a, b) => a + b;

        expect(sum(1,2)).toBe(3);
    });

    it('should be used for parameters', function() {
        var sum = 0;
        var numbers = [1,2,3,4];

        numbers.forEach(n => sum += n);
        expect(sum).toBe(10);
    });

    it('should use lexical scope', function() {
        this.myVal = 5;
        let addMyVal = a => this.myVal + a;

        expect(addMyVal(1)).toBe(6);
    });
});
