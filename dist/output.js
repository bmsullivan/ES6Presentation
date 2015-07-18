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

},{}]},{},[1,2,3,4])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvYnJpYW4vUHJvamVjdHMvRVM2UHJlc2VudGF0aW9uR2l0SHViL3NwZWNzL2Fycm93U3BlY3MuanMiLCIvVXNlcnMvYnJpYW4vUHJvamVjdHMvRVM2UHJlc2VudGF0aW9uR2l0SHViL3NwZWNzL2NsYXNzU3BlY3MuanMiLCIvVXNlcnMvYnJpYW4vUHJvamVjdHMvRVM2UHJlc2VudGF0aW9uR2l0SHViL3NwZWNzL21vZHVsZVNwZWNzLmpzIiwiL1VzZXJzL2JyaWFuL1Byb2plY3RzL0VTNlByZXNlbnRhdGlvbkdpdEh1Yi9zcGVjcy92YXJpYWJsZVNwZWNzLmpzIiwiL1VzZXJzL2JyaWFuL1Byb2plY3RzL0VTNlByZXNlbnRhdGlvbkdpdEh1Yi9zcmMvcGVyc29uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxRQUFRLENBQUMsYUFBYSxFQUFFLFlBQVc7QUFDL0IsTUFBRSxDQUFDLCtCQUErQixFQUFFLFlBQVc7QUFDM0MsWUFBSSxHQUFHLEdBQUcsU0FBTixHQUFHLENBQUksQ0FBQyxFQUFFLENBQUM7bUJBQUssQ0FBQyxHQUFHLENBQUM7U0FBQSxDQUFDOztBQUUxQixjQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUM1QixDQUFDLENBQUM7O0FBRUgsTUFBRSxDQUFDLCtCQUErQixFQUFFLFlBQVc7QUFDM0MsWUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDO0FBQ1osWUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQzs7QUFFeEIsZUFBTyxDQUFDLE9BQU8sQ0FBQyxVQUFBLENBQUM7bUJBQUksR0FBRyxJQUFJLENBQUM7U0FBQSxDQUFDLENBQUM7QUFD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LEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDekIsQ0FBQyxDQUFDOztBQUVILE1BQUUsQ0FBQyw0QkFBNEIsRUFBRSxZQUFZO0FBQ3pDLGlCQUFTLE1BQU0sQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRTtBQUM3QixrQkFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNwQixrQkFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNwQixrQkFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN6QjtBQUNELFlBQUksT0FBTyxHQUFHLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztBQUN0QixjQUFNLGtCQUFJLE9BQU8sQ0FBQyxDQUFDO0tBQ3RCLENBQUMsQ0FBQzs7QUFFSCxNQUFFLENBQUMsaUNBQWlDLEVBQUUsWUFBWTtBQUM5QyxZQUFJLElBQUksR0FBRyxPQUFPLENBQUM7QUFDbkIsWUFBSSxPQUFPLGVBQWEsSUFBSSxBQUFFLENBQUM7QUFDL0IsY0FBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztLQUN4QyxDQUFDLENBQUM7Q0FDTixDQUFDLENBQUM7Ozs7Ozs7Ozs7O0lDekVVLE1BQU0sR0FDSixTQURGLE1BQU0sQ0FDSCxJQUFJLEVBQUU7MEJBRFQsTUFBTTs7QUFFWCxRQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztDQUNwQjs7UUFIUSxNQUFNLEdBQU4sTUFBTSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJkZXNjcmliZSgnQXJyb3cgc3BlY3MnLCBmdW5jdGlvbigpIHtcbiAgICBpdCgnc2hvdWxkIGludm9rZSBsaWtlIGEgZnVuY3Rpb24nLCBmdW5jdGlvbigpIHtcbiAgICAgICAgbGV0IHN1bSA9IChhLCBiKSA9PiBhICsgYjtcblxuICAgICAgICBleHBlY3Qoc3VtKDEsMikpLnRvQmUoMyk7XG4gICAgfSk7XG5cbiAgICBpdCgnc2hvdWxkIGJlIHVzZWQgZm9yIHBhcmFtZXRlcnMnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHN1bSA9IDA7XG4gICAgICAgIHZhciBudW1iZXJzID0gWzEsMiwzLDRdO1xuXG4gICAgICAgIG51bWJlcnMuZm9yRWFjaChuID0+IHN1bSArPSBuKTtcbiAgICAgICAgZXhwZWN0KHN1bSkudG9CZSgxMCk7XG4gICAgfSk7XG5cbiAgICBpdCgnc2hvdWxkIHVzZSBsZXhpY2FsIHNjb3BlJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMubXlWYWwgPSA1O1xuICAgICAgICBsZXQgYWRkTXlWYWwgPSBhID0+IHRoaXMubXlWYWwgKyBhO1xuXG4gICAgICAgIGV4cGVjdChhZGRNeVZhbCgxKSkudG9CZSg2KTtcbiAgICB9KTtcbn0pO1xuIiwiZGVzY3JpYmUoJ0NsYXNzIHNwZWNzJywgZnVuY3Rpb24oKSB7XG4gICAgY2xhc3MgU2hhcGUge1xuICAgICAgICBjb25zdHJ1Y3Rvcih3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgICAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNsYXNzIFJlY3RhbmdsZSBleHRlbmRzIFNoYXBlIHtcbiAgICAgICAgZ2V0IGFyZWEoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy53aWR0aCAqIHRoaXMuaGVpZ2h0O1xuICAgICAgICB9XG5cbiAgICAgICAgZ2V0QXJlYSgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLndpZHRoICogdGhpcy5oZWlnaHQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaXQoJ3Nob3VsZCBjcmVhdGUgYW4gaW5zdGFuY2Ugb2YgYSBjbGFzcycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IHMgPSBuZXcgU2hhcGUoKTtcbiAgICAgICAgZXhwZWN0KHMgaW5zdGFuY2VvZiBTaGFwZSkudG9CZVRydXRoeSgpO1xuICAgIH0pO1xuXG4gICAgaXQoJ3Nob3VsZCBzZXQgcHJvcGVydGllcycsIGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgcyA9IG5ldyBTaGFwZSg1LCAxMCk7XG4gICAgICAgIGV4cGVjdChzLndpZHRoKS50b0JlKDUpO1xuICAgICAgICBleHBlY3Qocy5oZWlnaHQpLnRvQmUoMTApO1xuICAgIH0pO1xuXG4gICAgaXQoJ3Nob3VsZCBoYXZlIHN1YmNsYXNzZXMnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCByID0gbmV3IFJlY3RhbmdsZSg1LCAxMCk7XG4gICAgICAgIGV4cGVjdChyIGluc3RhbmNlb2YgU2hhcGUpLnRvQmVUcnV0aHkoKTtcbiAgICB9KTtcblxuICAgIGl0KCdzaG91bGQgaGF2ZSBtZXRob2RzIGFuZCBwcm9wZXJ0aWVzJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCByID0gbmV3IFJlY3RhbmdsZSg1LCAxMCk7XG4gICAgICAgIGV4cGVjdChyLmFyZWEpLnRvQmUoNTApO1xuICAgICAgICBleHBlY3Qoci5nZXRBcmVhKCkpLnRvQmUoNTApO1xuICAgIH0pO1xufSk7XG4iLCJpbXBvcnQgeyBQZXJzb24gfSBmcm9tICcuLi9zcmMvcGVyc29uJztcbmRlc2NyaWJlKCdNb2R1bGUgc3BlY3MnLCBmdW5jdGlvbigpIHtcbiAgICBpdCgnc2hvdWxkIGFsbG93IGltcG9ydGVkIGNsYXNzZXMgdG8gYmUgdXNlZCcsIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIGV4cGVjdChQZXJzb24pLnRvQmVEZWZpbmVkKCk7XG5cbiAgICAgICAgbGV0IHAgPSBuZXcgUGVyc29uKCdCcmlhbicpO1xuICAgICAgICBleHBlY3QocC5uYW1lKS50b0JlKCdCcmlhbicpO1xuICAgIH0pO1xufSk7XG4iLCJkZXNjcmliZSgnVmFyaWFibGUgU3BlY3MnLCBmdW5jdGlvbigpIHtcblxuICAgIGl0KCdzaG91bGQgdXNlIFwibGV0XCInLCBmdW5jdGlvbigpIHtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IDU7IGkrKyl7fVxuICAgICAgICAvL2V4cGVjdChpKS50b0JlKDUpO1xuICAgIH0pO1xuXG4gICAgaXQoJ3Nob3VsZCB1c2UgY29uc3RhbnRzJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBQSSA9IDMuMTQxNTk7XG4gICAgICAgIC8vUEkgPSAzO1xuICAgICAgICBleHBlY3QoUEkpLnRvQmUoMy4xNDE1OSk7XG4gICAgfSk7XG5cbiAgICBpdCgnc2hvdWxkIGRlc3RydWN0dXJlIGFuIGFycmF5JywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCBhID0gWzEsIDJdO1xuICAgICAgICBsZXQgW2IsIGNdID0gYTtcblxuICAgICAgICBleHBlY3QoYikudG9CZSgxKTtcbiAgICAgICAgZXhwZWN0KGMpLnRvQmUoMik7XG4gICAgfSk7XG5cbiAgICBpdCgnc2hvdWxkIGRlc3RydWN0dXJlIG9iamVjdHMnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCBhID0geyBiOiAxLCBjOiAyIH07XG5cbiAgICAgICAgbGV0IHsgYjogeCwgYzogeSB9ID0gYTtcblxuICAgICAgICBleHBlY3QoeCkudG9CZSgxKTtcbiAgICAgICAgZXhwZWN0KHkpLnRvQmUoMik7XG5cbiAgICB9KTtcblxuICAgIGl0KCdzaG91bGQgZGVzdHJ1Y3R1cmUgcGFyYW1ldGVycycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IHNldHRpbmdzID0geyB1cmw6ICdmb28nLCBtZXRob2Q6ICdQT1NUJyB9O1xuICAgICAgICBkb1NvbWV0aGluZyhzZXR0aW5ncyk7XG4gICAgICAgIGZ1bmN0aW9uIGRvU29tZXRoaW5nKHt1cmwsIG1ldGhvZH0pIHtcbiAgICAgICAgICAgIGV4cGVjdCh1cmwpLnRvQmUoJ2ZvbycpO1xuICAgICAgICAgICAgZXhwZWN0KG1ldGhvZCkudG9CZSgnUE9TVCcpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBpdCgnc2hvdWxkIGFsbG93IGRlZmF1bHQgcGFyYW1ldGVycycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZnVuY3Rpb24gbXlGdW5jKGZvbyA9ICdiYXInKSB7XG4gICAgICAgICAgICByZXR1cm4gZm9vO1xuICAgICAgICB9XG5cbiAgICAgICAgZXhwZWN0KG15RnVuYygpKS50b0JlKCdiYXInKTtcbiAgICAgICAgZXhwZWN0KG15RnVuYygnYmF6JykpLnRvQmUoJ2JheicpO1xuICAgIH0pO1xuXG4gICAgaXQoJ3Nob3VsZCB1c2UgcmVzdCBwYXJhbXMnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZ1bmN0aW9uIG15RnVuYyhvbmUsIHR3bywgLi4ucmVzdCkge1xuICAgICAgICAgICAgZXhwZWN0KG9uZSkudG9CZSgxKTtcbiAgICAgICAgICAgIGV4cGVjdChyZXN0KS50b0VxdWFsKFszLDQsNV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgbXlGdW5jKDEsIDIsIDMsIDQsIDUpO1xuICAgIH0pO1xuXG4gICAgaXQoJ3Nob3VsZCB1c2Ugc3ByZWFkIG9wZXJhdG9yJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBmdW5jdGlvbiBteUZ1bmMob25lLCB0d28sIHRocmVlKSB7XG4gICAgICAgICAgICBleHBlY3Qob25lKS50b0JlKDEpO1xuICAgICAgICAgICAgZXhwZWN0KHR3bykudG9CZSgyKTtcbiAgICAgICAgICAgIGV4cGVjdCh0aHJlZSkudG9CZSgzKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgbXlBcnJheSA9IFsxLDIsM107XG4gICAgICAgIG15RnVuYyguLi5teUFycmF5KTtcbiAgICB9KTtcblxuICAgIGl0KCdzaG91bGQgdXNlIHN0cmluZyBpbnRlcnBvbGF0aW9uJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgbmFtZSA9ICdCcmlhbic7XG4gICAgICAgIGxldCBtZXNzYWdlID0gYEhlbGxvLCAke25hbWV9YDtcbiAgICAgICAgZXhwZWN0KG1lc3NhZ2UpLnRvQmUoJ0hlbGxvLCBCcmlhbicpO1xuICAgIH0pO1xufSk7XG4iLCJleHBvcnQgY2xhc3MgUGVyc29uIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgfVxufVxuIl19
