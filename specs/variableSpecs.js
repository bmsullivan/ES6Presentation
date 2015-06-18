describe('Variable Specs', function() {

    xit('should use "let"', function() {
        for(let i = 0; i < 5; i++){}
        expect(i).toBe(5);
    });

});
