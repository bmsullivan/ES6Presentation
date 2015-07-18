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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _srcPerson = require('../src/person');

var _srcPerson2 = _interopRequireDefault(_srcPerson);

describe('Module specs', function () {
    it('should allow imported classes to be used', function () {

        expect(_srcPerson2['default']).toBeDefined();

        var p = new _srcPerson2['default']('Brian');
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

exports["default"] = Person;
module.exports = exports["default"];

},{}]},{},[1,2,3,4])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvYnJpYW4vUHJvamVjdHMvRVM2UHJlc2VudGF0aW9uR2l0SHViL3NwZWNzL2Fycm93U3BlY3MuanMiLCIvVXNlcnMvYnJpYW4vUHJvamVjdHMvRVM2UHJlc2VudGF0aW9uR2l0SHViL3NwZWNzL2NsYXNzU3BlY3MuanMiLCIvVXNlcnMvYnJpYW4vUHJvamVjdHMvRVM2UHJlc2VudGF0aW9uR2l0SHViL3NwZWNzL21vZHVsZVNwZWNzLmpzIiwiL1VzZXJzL2JyaWFuL1Byb2plY3RzL0VTNlByZXNlbnRhdGlvbkdpdEh1Yi9zcGVjcy92YXJpYWJsZVNwZWNzLmpzIiwiL1VzZXJzL2JyaWFuL1Byb2plY3RzL0VTNlByZXNlbnRhdGlvbkdpdEh1Yi9zcmMvcGVyc29uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxRQUFRLENBQUMsYUFBYSxFQUFFLFlBQVc7QUFDL0IsTUFBRSxDQUFDLCtCQUErQixFQUFFLFlBQVc7QUFDM0MsWUFBSSxHQUFHLEdBQUcsU0FBTixHQUFHLENBQUksQ0FBQyxFQUFFLENBQUM7bUJBQUssQ0FBQyxHQUFHLENBQUM7U0FBQSxDQUFDOztBQUUxQixjQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUM1QixDQUFDLENBQUM7O0FBRUgsTUFBRSxDQUFDLCtCQUErQixFQUFFLFlBQVc7QUFDM0MsWUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDO0FBQ1osWUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQzs7QUFFeEIsZUFBTyxDQUFDLE9BQU8sQ0FBQyxVQUFBLENBQUM7bUJBQUksR0FBRyxJQUFJLENBQUM7U0FBQSxDQUFDLENBQUM7QUFD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QyxDQUFDO0tBQ3pCLENBQUMsQ0FBQzs7QUFFSCxNQUFFLENBQUMsNEJBQTRCLEVBQUUsWUFBWTtBQUN6QyxpQkFBUyxNQUFNLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUU7QUFDN0Isa0JBQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDcEIsa0JBQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDcEIsa0JBQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDekI7QUFDRCxZQUFJLE9BQU8sR0FBRyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7QUFDdEIsY0FBTSxrQkFBSSxPQUFPLENBQUMsQ0FBQztLQUN0QixDQUFDLENBQUM7O0FBRUgsTUFBRSxDQUFDLGlDQUFpQyxFQUFFLFlBQVk7QUFDOUMsWUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDO0FBQ25CLFlBQUksT0FBTyxlQUFhLElBQUksQUFBRSxDQUFDO0FBQy9CLGNBQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7S0FDeEMsQ0FBQyxDQUFDO0NBQ04sQ0FBQyxDQUFDOzs7Ozs7Ozs7OztJQ3pFa0IsTUFBTSxHQUNaLFNBRE0sTUFBTSxDQUNYLElBQUksRUFBRTswQkFERCxNQUFNOztBQUVuQixRQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztDQUNwQjs7cUJBSGdCLE1BQU0iLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiZGVzY3JpYmUoJ0Fycm93IHNwZWNzJywgZnVuY3Rpb24oKSB7XG4gICAgaXQoJ3Nob3VsZCBpbnZva2UgbGlrZSBhIGZ1bmN0aW9uJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCBzdW0gPSAoYSwgYikgPT4gYSArIGI7XG5cbiAgICAgICAgZXhwZWN0KHN1bSgxLDIpKS50b0JlKDMpO1xuICAgIH0pO1xuXG4gICAgaXQoJ3Nob3VsZCBiZSB1c2VkIGZvciBwYXJhbWV0ZXJzJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBzdW0gPSAwO1xuICAgICAgICB2YXIgbnVtYmVycyA9IFsxLDIsMyw0XTtcblxuICAgICAgICBudW1iZXJzLmZvckVhY2gobiA9PiBzdW0gKz0gbik7XG4gICAgICAgIGV4cGVjdChzdW0pLnRvQmUoMTApO1xuICAgIH0pO1xuXG4gICAgaXQoJ3Nob3VsZCB1c2UgbGV4aWNhbCBzY29wZScsIGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLm15VmFsID0gNTtcbiAgICAgICAgbGV0IGFkZE15VmFsID0gYSA9PiB0aGlzLm15VmFsICsgYTtcblxuICAgICAgICBleHBlY3QoYWRkTXlWYWwoMSkpLnRvQmUoNik7XG4gICAgfSk7XG59KTtcbiIsImRlc2NyaWJlKCdDbGFzcyBzcGVjcycsIGZ1bmN0aW9uKCkge1xuICAgIGNsYXNzIFNoYXBlIHtcbiAgICAgICAgY29uc3RydWN0b3Iod2lkdGgsIGhlaWdodCkge1xuICAgICAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjbGFzcyBSZWN0YW5nbGUgZXh0ZW5kcyBTaGFwZSB7XG4gICAgICAgIGdldCBhcmVhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMud2lkdGggKiB0aGlzLmhlaWdodDtcbiAgICAgICAgfVxuXG4gICAgICAgIGdldEFyZWEoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy53aWR0aCAqIHRoaXMuaGVpZ2h0O1xuICAgICAgICB9XG4gICAgfVxuICAgIGl0KCdzaG91bGQgY3JlYXRlIGFuIGluc3RhbmNlIG9mIGEgY2xhc3MnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCBzID0gbmV3IFNoYXBlKCk7XG4gICAgICAgIGV4cGVjdChzIGluc3RhbmNlb2YgU2hhcGUpLnRvQmVUcnV0aHkoKTtcbiAgICB9KTtcblxuICAgIGl0KCdzaG91bGQgc2V0IHByb3BlcnRpZXMnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgbGV0IHMgPSBuZXcgU2hhcGUoNSwgMTApO1xuICAgICAgICBleHBlY3Qocy53aWR0aCkudG9CZSg1KTtcbiAgICAgICAgZXhwZWN0KHMuaGVpZ2h0KS50b0JlKDEwKTtcbiAgICB9KTtcblxuICAgIGl0KCdzaG91bGQgaGF2ZSBzdWJjbGFzc2VzJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgciA9IG5ldyBSZWN0YW5nbGUoNSwgMTApO1xuICAgICAgICBleHBlY3QociBpbnN0YW5jZW9mIFNoYXBlKS50b0JlVHJ1dGh5KCk7XG4gICAgfSk7XG5cbiAgICBpdCgnc2hvdWxkIGhhdmUgbWV0aG9kcyBhbmQgcHJvcGVydGllcycsIGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgciA9IG5ldyBSZWN0YW5nbGUoNSwgMTApO1xuICAgICAgICBleHBlY3Qoci5hcmVhKS50b0JlKDUwKTtcbiAgICAgICAgZXhwZWN0KHIuZ2V0QXJlYSgpKS50b0JlKDUwKTtcbiAgICB9KTtcbn0pO1xuIiwiaW1wb3J0IFBlcnNvbiBmcm9tICcuLi9zcmMvcGVyc29uJztcbmRlc2NyaWJlKCdNb2R1bGUgc3BlY3MnLCBmdW5jdGlvbigpIHtcbiAgICBpdCgnc2hvdWxkIGFsbG93IGltcG9ydGVkIGNsYXNzZXMgdG8gYmUgdXNlZCcsIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIGV4cGVjdChQZXJzb24pLnRvQmVEZWZpbmVkKCk7XG5cbiAgICAgICAgbGV0IHAgPSBuZXcgUGVyc29uKCdCcmlhbicpO1xuICAgICAgICBleHBlY3QocC5uYW1lKS50b0JlKCdCcmlhbicpO1xuICAgIH0pO1xufSk7XG4iLCJkZXNjcmliZSgnVmFyaWFibGUgU3BlY3MnLCBmdW5jdGlvbigpIHtcblxuICAgIGl0KCdzaG91bGQgdXNlIFwibGV0XCInLCBmdW5jdGlvbigpIHtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IDU7IGkrKyl7fVxuICAgICAgICAvL2V4cGVjdChpKS50b0JlKDUpO1xuICAgIH0pO1xuXG4gICAgaXQoJ3Nob3VsZCB1c2UgY29uc3RhbnRzJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBQSSA9IDMuMTQxNTk7XG4gICAgICAgIC8vUEkgPSAzO1xuICAgICAgICBleHBlY3QoUEkpLnRvQmUoMy4xNDE1OSk7XG4gICAgfSk7XG5cbiAgICBpdCgnc2hvdWxkIGRlc3RydWN0dXJlIGFuIGFycmF5JywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCBhID0gWzEsIDJdO1xuICAgICAgICBsZXQgW2IsIGNdID0gYTtcblxuICAgICAgICBleHBlY3QoYikudG9CZSgxKTtcbiAgICAgICAgZXhwZWN0KGMpLnRvQmUoMik7XG4gICAgfSk7XG5cbiAgICBpdCgnc2hvdWxkIGRlc3RydWN0dXJlIG9iamVjdHMnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCBhID0geyBiOiAxLCBjOiAyIH07XG5cbiAgICAgICAgbGV0IHsgYjogeCwgYzogeSB9ID0gYTtcblxuICAgICAgICBleHBlY3QoeCkudG9CZSgxKTtcbiAgICAgICAgZXhwZWN0KHkpLnRvQmUoMik7XG5cbiAgICB9KTtcblxuICAgIGl0KCdzaG91bGQgZGVzdHJ1Y3R1cmUgcGFyYW1ldGVycycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IHNldHRpbmdzID0geyB1cmw6ICdmb28nLCBtZXRob2Q6ICdQT1NUJyB9O1xuICAgICAgICBkb1NvbWV0aGluZyhzZXR0aW5ncyk7XG4gICAgICAgIGZ1bmN0aW9uIGRvU29tZXRoaW5nKHt1cmwsIG1ldGhvZH0pIHtcbiAgICAgICAgICAgIGV4cGVjdCh1cmwpLnRvQmUoJ2ZvbycpO1xuICAgICAgICAgICAgZXhwZWN0KG1ldGhvZCkudG9CZSgnUE9TVCcpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBpdCgnc2hvdWxkIGFsbG93IGRlZmF1bHQgcGFyYW1ldGVycycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZnVuY3Rpb24gbXlGdW5jKGZvbyA9ICdiYXInKSB7XG4gICAgICAgICAgICByZXR1cm4gZm9vO1xuICAgICAgICB9XG5cbiAgICAgICAgZXhwZWN0KG15RnVuYygpKS50b0JlKCdiYXInKTtcbiAgICAgICAgZXhwZWN0KG15RnVuYygnYmF6JykpLnRvQmUoJ2JheicpO1xuICAgIH0pO1xuXG4gICAgaXQoJ3Nob3VsZCB1c2UgcmVzdCBwYXJhbXMnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZ1bmN0aW9uIG15RnVuYyhvbmUsIHR3bywgLi4ucmVzdCkge1xuICAgICAgICAgICAgZXhwZWN0KG9uZSkudG9CZSgxKTtcbiAgICAgICAgICAgIGV4cGVjdChyZXN0KS50b0VxdWFsKFszLDQsNV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgbXlGdW5jKDEsIDIsIDMsIDQsIDUpO1xuICAgIH0pO1xuXG4gICAgaXQoJ3Nob3VsZCB1c2Ugc3ByZWFkIG9wZXJhdG9yJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBmdW5jdGlvbiBteUZ1bmMob25lLCB0d28sIHRocmVlKSB7XG4gICAgICAgICAgICBleHBlY3Qob25lKS50b0JlKDEpO1xuICAgICAgICAgICAgZXhwZWN0KHR3bykudG9CZSgyKTtcbiAgICAgICAgICAgIGV4cGVjdCh0aHJlZSkudG9CZSgzKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgbXlBcnJheSA9IFsxLDIsM107XG4gICAgICAgIG15RnVuYyguLi5teUFycmF5KTtcbiAgICB9KTtcblxuICAgIGl0KCdzaG91bGQgdXNlIHN0cmluZyBpbnRlcnBvbGF0aW9uJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgbmFtZSA9ICdCcmlhbic7XG4gICAgICAgIGxldCBtZXNzYWdlID0gYEhlbGxvLCAke25hbWV9YDtcbiAgICAgICAgZXhwZWN0KG1lc3NhZ2UpLnRvQmUoJ0hlbGxvLCBCcmlhbicpO1xuICAgIH0pO1xufSk7XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQZXJzb24ge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB9XG59XG4iXX0=
