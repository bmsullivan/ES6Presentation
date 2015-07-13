describe('Class specs', function() {
    class Shape {
        constructor(width, height) {
            this.width = width;
            this.height = height;
        }
    }

    class Rectangle extends Shape {
        get area() {
            return this.width * this.height;
        }

        getArea() {
            return this.width * this.height;
        }
    }
    it('should create an instance of a class', function () {
        let s = new Shape();
        expect(s instanceof Shape).toBeTruthy();
    });

    it('should set properties', function() {
        let s = new Shape(5, 10);
        expect(s.width).toBe(5);
        expect(s.height).toBe(10);
    });

    it('should have subclasses', function () {
        let r = new Rectangle(5, 10);
        expect(r instanceof Shape).toBeTruthy();
    });

    it('should have methods and properties', function() {
        let r = new Rectangle(5, 10);
        expect(r.area).toBe(50);
        expect(r.getArea()).toBe(50);
    });
});
