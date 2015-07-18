(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

describe('Class specs', function () {
    var Shape = function Shape(width, height) {
        _classCallCheck(this, Shape);

        this.width = width;
        this.height = height;
    };

    var Rectangle = (function (_Shape) {
        _inherits(Rectangle, _Shape);

        function Rectangle() {
            _classCallCheck(this, Rectangle);

            _get(Object.getPrototypeOf(Rectangle.prototype), 'constructor', this).apply(this, arguments);
        }

        _createClass(Rectangle, [{
            key: 'getArea',
            value: function getArea() {
                return this.width * this.height;
            }
        }, {
            key: 'area',
            get: function get() {
                return this.width * this.height;
            }
        }]);

        return Rectangle;
    })(Shape);

    it('should create an instance of a class', function () {
        var s = new Shape();
        expect(s instanceof Shape).toBeTruthy();
    });

    it('should set properties', function () {
        var s = new Shape(5, 10);
        expect(s.width).toBe(5);
        expect(s.height).toBe(10);
    });

    it('should have subclasses', function () {
        var r = new Rectangle(5, 10);
        expect(r instanceof Shape).toBeTruthy();
    });

    it('should have methods and properties', function () {
        var r = new Rectangle(5, 10);
        expect(r.area).toBe(50);
        expect(r.getArea()).toBe(50);
    });
});

},{}],3:[function(require,module,exports){
'use strict';

var _srcPerson = require('../src/person');

describe('Module specs', function () {
    it('should allow imported classes to be used', function () {

        expect(_srcPerson.Person).toBeDefined();

        var p = new _srcPerson.Person('Brian');
        expect(p.name).toBe('Brian');
        (0, _srcPerson.sayName)(p);
    });
});

},{"../src/person":5}],4:[function(require,module,exports){
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
            var foo = arguments.length <= 0 || arguments[0] === undefined ? 'bar' : arguments[0];

            return foo;
        }

        expect(myFunc()).toBe('bar');
        expect(myFunc('baz')).toBe('baz');
    });

    it('should use rest params', function () {
        function myFunc(one, two) {
            expect(one).toBe(1);

            for (var _len = arguments.length, rest = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
                rest[_key - 2] = arguments[_key];
            }

            expect(rest).toEqual([3, 4, 5]);
        }

        myFunc(1, 2, 3, 4, 5);
    });

    it('should use spread operator', function () {
        function myFunc(one, two, three) {
            expect(one).toBe(1);
            expect(two).toBe(2);
            expect(three).toBe(3);
        }
        var myArray = [1, 2, 3];
        myFunc.apply(undefined, myArray);
    });

    it('should use string interpolation', function () {
        var name = 'Brian';
        var message = 'Hello, ' + name;
        expect(message).toBe('Hello, Brian');
    });
});

},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = function Person(name) {
    _classCallCheck(this, Person);

    this.name = name;
};

exports.Person = Person;
var sayName = function sayName(person) {
    return console.log(person.name);
};
exports.sayName = sayName;

},{}]},{},[1,2,3,4])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvYnJpYW4vUHJvamVjdHMvRVM2UHJlc2VudGF0aW9uR2l0SHViL3NwZWNzL2Fycm93U3BlY3MuanMiLCIvVXNlcnMvYnJpYW4vUHJvamVjdHMvRVM2UHJlc2VudGF0aW9uR2l0SHViL3NwZWNzL2NsYXNzU3BlY3MuanMiLCIvVXNlcnMvYnJpYW4vUHJvamVjdHMvRVM2UHJlc2VudGF0aW9uR2l0SHViL3NwZWNzL21vZHVsZVNwZWNzLmpzIiwiL1VzZXJzL2JyaWFuL1Byb2plY3RzL0VTNlByZXNlbnRhdGlvbkdpdEh1Yi9zcGVjcy92YXJpYWJsZVNwZWNzLmpzIiwiL1VzZXJzL2JyaWFuL1Byb2plY3RzL0VTNlByZXNlbnRhdGlvbkdpdEh1Yi9zcmMvcGVyc29uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxRQUFRLENBQUMsYUFBYSxFQUFFLFlBQVc7QUFDL0IsTUFBRSxDQUFDLCtCQUErQixFQUFFLFlBQVc7QUFDM0MsWUFBSSxHQUFHLEdBQUcsU0FBTixHQUFHLENBQUksQ0FBQyxFQUFFLENBQUM7bUJBQUssQ0FBQyxHQUFHLENBQUM7U0FBQSxDQUFDOztBQUUxQixjQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUM1QixDQUFDLENBQUM7O0FBRUgsTUFBRSxDQUFDLCtCQUErQixFQUFFLFlBQVc7QUFDM0MsWUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDO0FBQ1osWUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQzs7QUFFeEIsZUFBTyxDQUFDLE9BQU8sQ0FBQyxVQUFBLENBQUM7bUJBQUksR0FBRyxJQUFJLENBQUM7U0FBQSxDQUFDLENBQUM7QUFD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ZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImRlc2NyaWJlKCdBcnJvdyBzcGVjcycsIGZ1bmN0aW9uKCkge1xuICAgIGl0KCdzaG91bGQgaW52b2tlIGxpa2UgYSBmdW5jdGlvbicsIGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgc3VtID0gKGEsIGIpID0+IGEgKyBiO1xuXG4gICAgICAgIGV4cGVjdChzdW0oMSwyKSkudG9CZSgzKTtcbiAgICB9KTtcblxuICAgIGl0KCdzaG91bGQgYmUgdXNlZCBmb3IgcGFyYW1ldGVycycsIGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgc3VtID0gMDtcbiAgICAgICAgdmFyIG51bWJlcnMgPSBbMSwyLDMsNF07XG5cbiAgICAgICAgbnVtYmVycy5mb3JFYWNoKG4gPT4gc3VtICs9IG4pO1xuICAgICAgICBleHBlY3Qoc3VtKS50b0JlKDEwKTtcbiAgICB9KTtcblxuICAgIGl0KCdzaG91bGQgdXNlIGxleGljYWwgc2NvcGUnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5teVZhbCA9IDU7XG4gICAgICAgIGxldCBhZGRNeVZhbCA9IGEgPT4gdGhpcy5teVZhbCArIGE7XG5cbiAgICAgICAgZXhwZWN0KGFkZE15VmFsKDEpKS50b0JlKDYpO1xuICAgIH0pO1xufSk7XG4iLCJkZXNjcmliZSgnQ2xhc3Mgc3BlY3MnLCBmdW5jdGlvbigpIHtcbiAgICBjbGFzcyBTaGFwZSB7XG4gICAgICAgIGNvbnN0cnVjdG9yKHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2xhc3MgUmVjdGFuZ2xlIGV4dGVuZHMgU2hhcGUge1xuICAgICAgICBnZXQgYXJlYSgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLndpZHRoICogdGhpcy5oZWlnaHQ7XG4gICAgICAgIH1cblxuICAgICAgICBnZXRBcmVhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMud2lkdGggKiB0aGlzLmhlaWdodDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpdCgnc2hvdWxkIGNyZWF0ZSBhbiBpbnN0YW5jZSBvZiBhIGNsYXNzJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgcyA9IG5ldyBTaGFwZSgpO1xuICAgICAgICBleHBlY3QocyBpbnN0YW5jZW9mIFNoYXBlKS50b0JlVHJ1dGh5KCk7XG4gICAgfSk7XG5cbiAgICBpdCgnc2hvdWxkIHNldCBwcm9wZXJ0aWVzJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCBzID0gbmV3IFNoYXBlKDUsIDEwKTtcbiAgICAgICAgZXhwZWN0KHMud2lkdGgpLnRvQmUoNSk7XG4gICAgICAgIGV4cGVjdChzLmhlaWdodCkudG9CZSgxMCk7XG4gICAgfSk7XG5cbiAgICBpdCgnc2hvdWxkIGhhdmUgc3ViY2xhc3NlcycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IHIgPSBuZXcgUmVjdGFuZ2xlKDUsIDEwKTtcbiAgICAgICAgZXhwZWN0KHIgaW5zdGFuY2VvZiBTaGFwZSkudG9CZVRydXRoeSgpO1xuICAgIH0pO1xuXG4gICAgaXQoJ3Nob3VsZCBoYXZlIG1ldGhvZHMgYW5kIHByb3BlcnRpZXMnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgbGV0IHIgPSBuZXcgUmVjdGFuZ2xlKDUsIDEwKTtcbiAgICAgICAgZXhwZWN0KHIuYXJlYSkudG9CZSg1MCk7XG4gICAgICAgIGV4cGVjdChyLmdldEFyZWEoKSkudG9CZSg1MCk7XG4gICAgfSk7XG59KTtcbiIsImltcG9ydCB7IFBlcnNvbiwgc2F5TmFtZSB9IGZyb20gJy4uL3NyYy9wZXJzb24nO1xuZGVzY3JpYmUoJ01vZHVsZSBzcGVjcycsIGZ1bmN0aW9uKCkge1xuICAgIGl0KCdzaG91bGQgYWxsb3cgaW1wb3J0ZWQgY2xhc3NlcyB0byBiZSB1c2VkJywgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgZXhwZWN0KFBlcnNvbikudG9CZURlZmluZWQoKTtcblxuICAgICAgICBsZXQgcCA9IG5ldyBQZXJzb24oJ0JyaWFuJyk7XG4gICAgICAgIGV4cGVjdChwLm5hbWUpLnRvQmUoJ0JyaWFuJyk7XG4gICAgICAgIHNheU5hbWUocCk7XG4gICAgfSk7XG59KTtcbiIsImRlc2NyaWJlKCdWYXJpYWJsZSBTcGVjcycsIGZ1bmN0aW9uKCkge1xuXG4gICAgaXQoJ3Nob3VsZCB1c2UgXCJsZXRcIicsIGZ1bmN0aW9uKCkge1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgNTsgaSsrKXt9XG4gICAgICAgIC8vZXhwZWN0KGkpLnRvQmUoNSk7XG4gICAgfSk7XG5cbiAgICBpdCgnc2hvdWxkIHVzZSBjb25zdGFudHMnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IFBJID0gMy4xNDE1OTtcbiAgICAgICAgLy9QSSA9IDM7XG4gICAgICAgIGV4cGVjdChQSSkudG9CZSgzLjE0MTU5KTtcbiAgICB9KTtcblxuICAgIGl0KCdzaG91bGQgZGVzdHJ1Y3R1cmUgYW4gYXJyYXknLCBmdW5jdGlvbigpIHtcbiAgICAgICAgbGV0IGEgPSBbMSwgMl07XG4gICAgICAgIGxldCBbYiwgY10gPSBhO1xuXG4gICAgICAgIGV4cGVjdChiKS50b0JlKDEpO1xuICAgICAgICBleHBlY3QoYykudG9CZSgyKTtcbiAgICB9KTtcblxuICAgIGl0KCdzaG91bGQgZGVzdHJ1Y3R1cmUgb2JqZWN0cycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IGEgPSB7IGI6IDEsIGM6IDIgfTtcblxuICAgICAgICBsZXQgeyBiOiB4LCBjOiB5IH0gPSBhO1xuXG4gICAgICAgIGV4cGVjdCh4KS50b0JlKDEpO1xuICAgICAgICBleHBlY3QoeSkudG9CZSgyKTtcblxuICAgIH0pO1xuXG4gICAgaXQoJ3Nob3VsZCBkZXN0cnVjdHVyZSBwYXJhbWV0ZXJzJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgc2V0dGluZ3MgPSB7IHVybDogJ2ZvbycsIG1ldGhvZDogJ1BPU1QnIH07XG4gICAgICAgIGRvU29tZXRoaW5nKHNldHRpbmdzKTtcbiAgICAgICAgZnVuY3Rpb24gZG9Tb21ldGhpbmcoe3VybCwgbWV0aG9kfSkge1xuICAgICAgICAgICAgZXhwZWN0KHVybCkudG9CZSgnZm9vJyk7XG4gICAgICAgICAgICBleHBlY3QobWV0aG9kKS50b0JlKCdQT1NUJyk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGl0KCdzaG91bGQgYWxsb3cgZGVmYXVsdCBwYXJhbWV0ZXJzJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBmdW5jdGlvbiBteUZ1bmMoZm9vID0gJ2JhcicpIHtcbiAgICAgICAgICAgIHJldHVybiBmb287XG4gICAgICAgIH1cblxuICAgICAgICBleHBlY3QobXlGdW5jKCkpLnRvQmUoJ2JhcicpO1xuICAgICAgICBleHBlY3QobXlGdW5jKCdiYXonKSkudG9CZSgnYmF6Jyk7XG4gICAgfSk7XG5cbiAgICBpdCgnc2hvdWxkIHVzZSByZXN0IHBhcmFtcycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZnVuY3Rpb24gbXlGdW5jKG9uZSwgdHdvLCAuLi5yZXN0KSB7XG4gICAgICAgICAgICBleHBlY3Qob25lKS50b0JlKDEpO1xuICAgICAgICAgICAgZXhwZWN0KHJlc3QpLnRvRXF1YWwoWzMsNCw1XSk7XG4gICAgICAgIH1cblxuICAgICAgICBteUZ1bmMoMSwgMiwgMywgNCwgNSk7XG4gICAgfSk7XG5cbiAgICBpdCgnc2hvdWxkIHVzZSBzcHJlYWQgb3BlcmF0b3InLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZ1bmN0aW9uIG15RnVuYyhvbmUsIHR3bywgdGhyZWUpIHtcbiAgICAgICAgICAgIGV4cGVjdChvbmUpLnRvQmUoMSk7XG4gICAgICAgICAgICBleHBlY3QodHdvKS50b0JlKDIpO1xuICAgICAgICAgICAgZXhwZWN0KHRocmVlKS50b0JlKDMpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBteUFycmF5ID0gWzEsMiwzXTtcbiAgICAgICAgbXlGdW5jKC4uLm15QXJyYXkpO1xuICAgIH0pO1xuXG4gICAgaXQoJ3Nob3VsZCB1c2Ugc3RyaW5nIGludGVycG9sYXRpb24nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCBuYW1lID0gJ0JyaWFuJztcbiAgICAgICAgbGV0IG1lc3NhZ2UgPSBgSGVsbG8sICR7bmFtZX1gO1xuICAgICAgICBleHBlY3QobWVzc2FnZSkudG9CZSgnSGVsbG8sIEJyaWFuJyk7XG4gICAgfSk7XG59KTtcbiIsImV4cG9ydCBjbGFzcyBQZXJzb24ge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB9XG59XG5cbmV4cG9ydCBsZXQgc2F5TmFtZSA9IChwZXJzb24pID0+IGNvbnNvbGUubG9nKHBlcnNvbi5uYW1lKTtcbiJdfQ==
