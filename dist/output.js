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

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var _srcPerson = require('../src/person');

var personModule = _interopRequireWildcard(_srcPerson);

describe('Module specs', function () {
    it('should allow imported classes to be used', function () {

        expect(personModule.Person).toBeDefined();

        var p = new personModule.Person('Brian');
        expect(p.name).toBe('Brian');
        personModule.sayName(p);
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvYnJpYW4vUHJvamVjdHMvRVM2UHJlc2VudGF0aW9uR2l0SHViL3NwZWNzL2Fycm93U3BlY3MuanMiLCIvVXNlcnMvYnJpYW4vUHJvamVjdHMvRVM2UHJlc2VudGF0aW9uR2l0SHViL3NwZWNzL2NsYXNzU3BlY3MuanMiLCIvVXNlcnMvYnJpYW4vUHJvamVjdHMvRVM2UHJlc2VudGF0aW9uR2l0SHViL3NwZWNzL21vZHVsZVNwZWNzLmpzIiwiL1VzZXJzL2JyaWFuL1Byb2plY3RzL0VTNlByZXNlbnRhdGlvbkdpdEh1Yi9zcGVjcy92YXJpYWJsZVNwZWNzLmpzIiwiL1VzZXJzL2JyaWFuL1Byb2plY3RzL0VTNlByZXNlbnRhdGlvbkdpdEh1Yi9zcmMvcGVyc29uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxRQUFRLENBQUMsYUFBYSxFQUFFLFlBQVc7QUFDL0IsTUFBRSxDQUFDLCtCQUErQixFQUFFLFlBQVc7QUFDM0MsWUFBSSxHQUFHLEdBQUcsU0FBTixHQUFHLENBQUksQ0FBQyxFQUFFLENBQUM7bUJBQUssQ0FBQyxHQUFHLENBQUM7U0FBQSxDQUFDOztBQUUxQixjQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUM1QixDQUFDLENBQUM7O0FBRUgsTUFBRSxDQUFDLCtCQUErQixFQUFFLFlBQVc7QUFDM0MsWUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDO0FBQ1osWUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQzs7QUFFeEIsZUFBTyxDQUFDLE9BQU8sQ0FBQyxVQUFBLENBQUM7bUJBQUksR0FBRyxJQUFJLENBQUM7U0FBQSxDQUFDLENBQUM7QUFD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LEdBQVAsT0FBTyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJkZXNjcmliZSgnQXJyb3cgc3BlY3MnLCBmdW5jdGlvbigpIHtcbiAgICBpdCgnc2hvdWxkIGludm9rZSBsaWtlIGEgZnVuY3Rpb24nLCBmdW5jdGlvbigpIHtcbiAgICAgICAgbGV0IHN1bSA9IChhLCBiKSA9PiBhICsgYjtcblxuICAgICAgICBleHBlY3Qoc3VtKDEsMikpLnRvQmUoMyk7XG4gICAgfSk7XG5cbiAgICBpdCgnc2hvdWxkIGJlIHVzZWQgZm9yIHBhcmFtZXRlcnMnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHN1bSA9IDA7XG4gICAgICAgIHZhciBudW1iZXJzID0gWzEsMiwzLDRdO1xuXG4gICAgICAgIG51bWJlcnMuZm9yRWFjaChuID0+IHN1bSArPSBuKTtcbiAgICAgICAgZXhwZWN0KHN1bSkudG9CZSgxMCk7XG4gICAgfSk7XG5cbiAgICBpdCgnc2hvdWxkIHVzZSBsZXhpY2FsIHNjb3BlJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMubXlWYWwgPSA1O1xuICAgICAgICBsZXQgYWRkTXlWYWwgPSBhID0+IHRoaXMubXlWYWwgKyBhO1xuXG4gICAgICAgIGV4cGVjdChhZGRNeVZhbCgxKSkudG9CZSg2KTtcbiAgICB9KTtcbn0pO1xuIiwiZGVzY3JpYmUoJ0NsYXNzIHNwZWNzJywgZnVuY3Rpb24oKSB7XG4gICAgY2xhc3MgU2hhcGUge1xuICAgICAgICBjb25zdHJ1Y3Rvcih3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgICAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNsYXNzIFJlY3RhbmdsZSBleHRlbmRzIFNoYXBlIHtcbiAgICAgICAgZ2V0IGFyZWEoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy53aWR0aCAqIHRoaXMuaGVpZ2h0O1xuICAgICAgICB9XG5cbiAgICAgICAgZ2V0QXJlYSgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLndpZHRoICogdGhpcy5oZWlnaHQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaXQoJ3Nob3VsZCBjcmVhdGUgYW4gaW5zdGFuY2Ugb2YgYSBjbGFzcycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IHMgPSBuZXcgU2hhcGUoKTtcbiAgICAgICAgZXhwZWN0KHMgaW5zdGFuY2VvZiBTaGFwZSkudG9CZVRydXRoeSgpO1xuICAgIH0pO1xuXG4gICAgaXQoJ3Nob3VsZCBzZXQgcHJvcGVydGllcycsIGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgcyA9IG5ldyBTaGFwZSg1LCAxMCk7XG4gICAgICAgIGV4cGVjdChzLndpZHRoKS50b0JlKDUpO1xuICAgICAgICBleHBlY3Qocy5oZWlnaHQpLnRvQmUoMTApO1xuICAgIH0pO1xuXG4gICAgaXQoJ3Nob3VsZCBoYXZlIHN1YmNsYXNzZXMnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCByID0gbmV3IFJlY3RhbmdsZSg1LCAxMCk7XG4gICAgICAgIGV4cGVjdChyIGluc3RhbmNlb2YgU2hhcGUpLnRvQmVUcnV0aHkoKTtcbiAgICB9KTtcblxuICAgIGl0KCdzaG91bGQgaGF2ZSBtZXRob2RzIGFuZCBwcm9wZXJ0aWVzJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCByID0gbmV3IFJlY3RhbmdsZSg1LCAxMCk7XG4gICAgICAgIGV4cGVjdChyLmFyZWEpLnRvQmUoNTApO1xuICAgICAgICBleHBlY3Qoci5nZXRBcmVhKCkpLnRvQmUoNTApO1xuICAgIH0pO1xufSk7XG4iLCJpbXBvcnQgKiBhcyBwZXJzb25Nb2R1bGUgZnJvbSAnLi4vc3JjL3BlcnNvbic7XG5kZXNjcmliZSgnTW9kdWxlIHNwZWNzJywgZnVuY3Rpb24oKSB7XG4gICAgaXQoJ3Nob3VsZCBhbGxvdyBpbXBvcnRlZCBjbGFzc2VzIHRvIGJlIHVzZWQnLCBmdW5jdGlvbigpIHtcblxuICAgICAgICBleHBlY3QocGVyc29uTW9kdWxlLlBlcnNvbikudG9CZURlZmluZWQoKTtcblxuICAgICAgICBsZXQgcCA9IG5ldyBwZXJzb25Nb2R1bGUuUGVyc29uKCdCcmlhbicpO1xuICAgICAgICBleHBlY3QocC5uYW1lKS50b0JlKCdCcmlhbicpO1xuICAgICAgICBwZXJzb25Nb2R1bGUuc2F5TmFtZShwKTtcbiAgICB9KTtcbn0pO1xuIiwiZGVzY3JpYmUoJ1ZhcmlhYmxlIFNwZWNzJywgZnVuY3Rpb24oKSB7XG5cbiAgICBpdCgnc2hvdWxkIHVzZSBcImxldFwiJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCA1OyBpKyspe31cbiAgICAgICAgLy9leHBlY3QoaSkudG9CZSg1KTtcbiAgICB9KTtcblxuICAgIGl0KCdzaG91bGQgdXNlIGNvbnN0YW50cycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgUEkgPSAzLjE0MTU5O1xuICAgICAgICAvL1BJID0gMztcbiAgICAgICAgZXhwZWN0KFBJKS50b0JlKDMuMTQxNTkpO1xuICAgIH0pO1xuXG4gICAgaXQoJ3Nob3VsZCBkZXN0cnVjdHVyZSBhbiBhcnJheScsIGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgYSA9IFsxLCAyXTtcbiAgICAgICAgbGV0IFtiLCBjXSA9IGE7XG5cbiAgICAgICAgZXhwZWN0KGIpLnRvQmUoMSk7XG4gICAgICAgIGV4cGVjdChjKS50b0JlKDIpO1xuICAgIH0pO1xuXG4gICAgaXQoJ3Nob3VsZCBkZXN0cnVjdHVyZSBvYmplY3RzJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgYSA9IHsgYjogMSwgYzogMiB9O1xuXG4gICAgICAgIGxldCB7IGI6IHgsIGM6IHkgfSA9IGE7XG5cbiAgICAgICAgZXhwZWN0KHgpLnRvQmUoMSk7XG4gICAgICAgIGV4cGVjdCh5KS50b0JlKDIpO1xuXG4gICAgfSk7XG5cbiAgICBpdCgnc2hvdWxkIGRlc3RydWN0dXJlIHBhcmFtZXRlcnMnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCBzZXR0aW5ncyA9IHsgdXJsOiAnZm9vJywgbWV0aG9kOiAnUE9TVCcgfTtcbiAgICAgICAgZG9Tb21ldGhpbmcoc2V0dGluZ3MpO1xuICAgICAgICBmdW5jdGlvbiBkb1NvbWV0aGluZyh7dXJsLCBtZXRob2R9KSB7XG4gICAgICAgICAgICBleHBlY3QodXJsKS50b0JlKCdmb28nKTtcbiAgICAgICAgICAgIGV4cGVjdChtZXRob2QpLnRvQmUoJ1BPU1QnKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgaXQoJ3Nob3VsZCBhbGxvdyBkZWZhdWx0IHBhcmFtZXRlcnMnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZ1bmN0aW9uIG15RnVuYyhmb28gPSAnYmFyJykge1xuICAgICAgICAgICAgcmV0dXJuIGZvbztcbiAgICAgICAgfVxuXG4gICAgICAgIGV4cGVjdChteUZ1bmMoKSkudG9CZSgnYmFyJyk7XG4gICAgICAgIGV4cGVjdChteUZ1bmMoJ2JheicpKS50b0JlKCdiYXonKTtcbiAgICB9KTtcblxuICAgIGl0KCdzaG91bGQgdXNlIHJlc3QgcGFyYW1zJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBmdW5jdGlvbiBteUZ1bmMob25lLCB0d28sIC4uLnJlc3QpIHtcbiAgICAgICAgICAgIGV4cGVjdChvbmUpLnRvQmUoMSk7XG4gICAgICAgICAgICBleHBlY3QocmVzdCkudG9FcXVhbChbMyw0LDVdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG15RnVuYygxLCAyLCAzLCA0LCA1KTtcbiAgICB9KTtcblxuICAgIGl0KCdzaG91bGQgdXNlIHNwcmVhZCBvcGVyYXRvcicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZnVuY3Rpb24gbXlGdW5jKG9uZSwgdHdvLCB0aHJlZSkge1xuICAgICAgICAgICAgZXhwZWN0KG9uZSkudG9CZSgxKTtcbiAgICAgICAgICAgIGV4cGVjdCh0d28pLnRvQmUoMik7XG4gICAgICAgICAgICBleHBlY3QodGhyZWUpLnRvQmUoMyk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG15QXJyYXkgPSBbMSwyLDNdO1xuICAgICAgICBteUZ1bmMoLi4ubXlBcnJheSk7XG4gICAgfSk7XG5cbiAgICBpdCgnc2hvdWxkIHVzZSBzdHJpbmcgaW50ZXJwb2xhdGlvbicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IG5hbWUgPSAnQnJpYW4nO1xuICAgICAgICBsZXQgbWVzc2FnZSA9IGBIZWxsbywgJHtuYW1lfWA7XG4gICAgICAgIGV4cGVjdChtZXNzYWdlKS50b0JlKCdIZWxsbywgQnJpYW4nKTtcbiAgICB9KTtcbn0pO1xuIiwiZXhwb3J0IGNsYXNzIFBlcnNvbiB7XG4gICAgY29uc3RydWN0b3IobmFtZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIH1cbn1cblxuZXhwb3J0IGxldCBzYXlOYW1lID0gKHBlcnNvbikgPT4gY29uc29sZS5sb2cocGVyc29uLm5hbWUpO1xuIl19
