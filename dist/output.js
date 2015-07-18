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
//import Person from '../src/person';
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _srcParent = require('../src/parent');

var _srcParent2 = _interopRequireDefault(_srcParent);

describe('Module specs', function () {
    //it('should allow imported classes to be used', function() {
    //
    //    expect(Person).toBeDefined();
    //
    //    let p = new Person('Brian');
    //    expect(p.name).toBe('Brian');
    //});

    it('should chain imports', function () {
        //let child = new Person('Molly');
        var p = new _srcParent2['default']('Brian', []);

        expect(p.children.length).toBe(0);
    });
});

},{"../src/parent":5}],4:[function(require,module,exports){
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
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _person = require('./person');

var _person2 = _interopRequireDefault(_person);

var Parent = (function (_Person) {
    _inherits(Parent, _Person);

    function Parent(name, children) {
        _classCallCheck(this, Parent);

        _get(Object.getPrototypeOf(Parent.prototype), 'constructor', this).call(this, name);
        this.children = children;
    }

    return Parent;
})(_person2['default']);

exports['default'] = Parent;
module.exports = exports['default'];

},{"./person":6}],6:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvYnJpYW4vUHJvamVjdHMvRVM2UHJlc2VudGF0aW9uR2l0SHViL3NwZWNzL2Fycm93U3BlY3MuanMiLCIvVXNlcnMvYnJpYW4vUHJvamVjdHMvRVM2UHJlc2VudGF0aW9uR2l0SHViL3NwZWNzL2NsYXNzU3BlY3MuanMiLCIvVXNlcnMvYnJpYW4vUHJvamVjdHMvRVM2UHJlc2VudGF0aW9uR2l0SHViL3NwZWNzL21vZHVsZVNwZWNzLmpzIiwiL1VzZXJzL2JyaWFuL1Byb2plY3RzL0VTNlByZXNlbnRhdGlvbkdpdEh1Yi9zcGVjcy92YXJpYWJsZVNwZWNzLmpzIiwiL1VzZXJzL2JyaWFuL1Byb2plY3RzL0VTNlByZXNlbnRhdGlvbkdpdEh1Yi9zcmMvcGFyZW50LmpzIiwiL1VzZXJzL2JyaWFuL1Byb2plY3RzL0VTNlByZXNlbnRhdGlvbkdpdEh1Yi9zcmMvcGVyc29uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxRQUFRLENBQUMsYUFBYSxFQUFFLFlBQVc7QUFDL0IsTUFBRSxDQUFDLCtCQUErQixFQUFFLFlBQVc7QUFDM0MsWUFBSSxHQUFHLEdBQUcsU0FBTixHQUFHLENBQUksQ0FBQyxFQUFFLENBQUM7bUJBQUssQ0FBQyxHQUFHLENBQUM7U0FBQSxDQUFDOztBQUUxQixjQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUM1QixDQUFDLENBQUM7O0FBRUgsTUFBRSxDQUFDLCtCQUErQixFQUFFLFlBQVc7QUFDM0MsWUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDO0FBQ1osWUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQzs7QUFFeEIsZUFBTyxDQUFD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QUFFbkIsUUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7Q0FDcEI7O3FCQUhnQixNQUFNIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImRlc2NyaWJlKCdBcnJvdyBzcGVjcycsIGZ1bmN0aW9uKCkge1xuICAgIGl0KCdzaG91bGQgaW52b2tlIGxpa2UgYSBmdW5jdGlvbicsIGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgc3VtID0gKGEsIGIpID0+IGEgKyBiO1xuXG4gICAgICAgIGV4cGVjdChzdW0oMSwyKSkudG9CZSgzKTtcbiAgICB9KTtcblxuICAgIGl0KCdzaG91bGQgYmUgdXNlZCBmb3IgcGFyYW1ldGVycycsIGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgc3VtID0gMDtcbiAgICAgICAgdmFyIG51bWJlcnMgPSBbMSwyLDMsNF07XG5cbiAgICAgICAgbnVtYmVycy5mb3JFYWNoKG4gPT4gc3VtICs9IG4pO1xuICAgICAgICBleHBlY3Qoc3VtKS50b0JlKDEwKTtcbiAgICB9KTtcblxuICAgIGl0KCdzaG91bGQgdXNlIGxleGljYWwgc2NvcGUnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5teVZhbCA9IDU7XG4gICAgICAgIGxldCBhZGRNeVZhbCA9IGEgPT4gdGhpcy5teVZhbCArIGE7XG5cbiAgICAgICAgZXhwZWN0KGFkZE15VmFsKDEpKS50b0JlKDYpO1xuICAgIH0pO1xufSk7XG4iLCJkZXNjcmliZSgnQ2xhc3Mgc3BlY3MnLCBmdW5jdGlvbigpIHtcbiAgICBjbGFzcyBTaGFwZSB7XG4gICAgICAgIGNvbnN0cnVjdG9yKHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2xhc3MgUmVjdGFuZ2xlIGV4dGVuZHMgU2hhcGUge1xuICAgICAgICBnZXQgYXJlYSgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLndpZHRoICogdGhpcy5oZWlnaHQ7XG4gICAgICAgIH1cblxuICAgICAgICBnZXRBcmVhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMud2lkdGggKiB0aGlzLmhlaWdodDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpdCgnc2hvdWxkIGNyZWF0ZSBhbiBpbnN0YW5jZSBvZiBhIGNsYXNzJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgcyA9IG5ldyBTaGFwZSgpO1xuICAgICAgICBleHBlY3QocyBpbnN0YW5jZW9mIFNoYXBlKS50b0JlVHJ1dGh5KCk7XG4gICAgfSk7XG5cbiAgICBpdCgnc2hvdWxkIHNldCBwcm9wZXJ0aWVzJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCBzID0gbmV3IFNoYXBlKDUsIDEwKTtcbiAgICAgICAgZXhwZWN0KHMud2lkdGgpLnRvQmUoNSk7XG4gICAgICAgIGV4cGVjdChzLmhlaWdodCkudG9CZSgxMCk7XG4gICAgfSk7XG5cbiAgICBpdCgnc2hvdWxkIGhhdmUgc3ViY2xhc3NlcycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IHIgPSBuZXcgUmVjdGFuZ2xlKDUsIDEwKTtcbiAgICAgICAgZXhwZWN0KHIgaW5zdGFuY2VvZiBTaGFwZSkudG9CZVRydXRoeSgpO1xuICAgIH0pO1xuXG4gICAgaXQoJ3Nob3VsZCBoYXZlIG1ldGhvZHMgYW5kIHByb3BlcnRpZXMnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgbGV0IHIgPSBuZXcgUmVjdGFuZ2xlKDUsIDEwKTtcbiAgICAgICAgZXhwZWN0KHIuYXJlYSkudG9CZSg1MCk7XG4gICAgICAgIGV4cGVjdChyLmdldEFyZWEoKSkudG9CZSg1MCk7XG4gICAgfSk7XG59KTtcbiIsIi8vaW1wb3J0IFBlcnNvbiBmcm9tICcuLi9zcmMvcGVyc29uJztcbmltcG9ydCBQYXJlbnQgZnJvbSAnLi4vc3JjL3BhcmVudCc7XG5kZXNjcmliZSgnTW9kdWxlIHNwZWNzJywgZnVuY3Rpb24oKSB7XG4gICAgLy9pdCgnc2hvdWxkIGFsbG93IGltcG9ydGVkIGNsYXNzZXMgdG8gYmUgdXNlZCcsIGZ1bmN0aW9uKCkge1xuICAgIC8vXG4gICAgLy8gICAgZXhwZWN0KFBlcnNvbikudG9CZURlZmluZWQoKTtcbiAgICAvL1xuICAgIC8vICAgIGxldCBwID0gbmV3IFBlcnNvbignQnJpYW4nKTtcbiAgICAvLyAgICBleHBlY3QocC5uYW1lKS50b0JlKCdCcmlhbicpO1xuICAgIC8vfSk7XG5cbiAgICBpdCgnc2hvdWxkIGNoYWluIGltcG9ydHMnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgLy9sZXQgY2hpbGQgPSBuZXcgUGVyc29uKCdNb2xseScpO1xuICAgICAgICBsZXQgcCA9IG5ldyBQYXJlbnQoJ0JyaWFuJywgW10pO1xuXG4gICAgICAgIGV4cGVjdChwLmNoaWxkcmVuLmxlbmd0aCkudG9CZSgwKTtcbiAgICB9KTtcbn0pO1xuIiwiZGVzY3JpYmUoJ1ZhcmlhYmxlIFNwZWNzJywgZnVuY3Rpb24oKSB7XG5cbiAgICBpdCgnc2hvdWxkIHVzZSBcImxldFwiJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCA1OyBpKyspe31cbiAgICAgICAgLy9leHBlY3QoaSkudG9CZSg1KTtcbiAgICB9KTtcblxuICAgIGl0KCdzaG91bGQgdXNlIGNvbnN0YW50cycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgUEkgPSAzLjE0MTU5O1xuICAgICAgICAvL1BJID0gMztcbiAgICAgICAgZXhwZWN0KFBJKS50b0JlKDMuMTQxNTkpO1xuICAgIH0pO1xuXG4gICAgaXQoJ3Nob3VsZCBkZXN0cnVjdHVyZSBhbiBhcnJheScsIGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgYSA9IFsxLCAyXTtcbiAgICAgICAgbGV0IFtiLCBjXSA9IGE7XG5cbiAgICAgICAgZXhwZWN0KGIpLnRvQmUoMSk7XG4gICAgICAgIGV4cGVjdChjKS50b0JlKDIpO1xuICAgIH0pO1xuXG4gICAgaXQoJ3Nob3VsZCBkZXN0cnVjdHVyZSBvYmplY3RzJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgYSA9IHsgYjogMSwgYzogMiB9O1xuXG4gICAgICAgIGxldCB7IGI6IHgsIGM6IHkgfSA9IGE7XG5cbiAgICAgICAgZXhwZWN0KHgpLnRvQmUoMSk7XG4gICAgICAgIGV4cGVjdCh5KS50b0JlKDIpO1xuXG4gICAgfSk7XG5cbiAgICBpdCgnc2hvdWxkIGRlc3RydWN0dXJlIHBhcmFtZXRlcnMnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCBzZXR0aW5ncyA9IHsgdXJsOiAnZm9vJywgbWV0aG9kOiAnUE9TVCcgfTtcbiAgICAgICAgZG9Tb21ldGhpbmcoc2V0dGluZ3MpO1xuICAgICAgICBmdW5jdGlvbiBkb1NvbWV0aGluZyh7dXJsLCBtZXRob2R9KSB7XG4gICAgICAgICAgICBleHBlY3QodXJsKS50b0JlKCdmb28nKTtcbiAgICAgICAgICAgIGV4cGVjdChtZXRob2QpLnRvQmUoJ1BPU1QnKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgaXQoJ3Nob3VsZCBhbGxvdyBkZWZhdWx0IHBhcmFtZXRlcnMnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZ1bmN0aW9uIG15RnVuYyhmb28gPSAnYmFyJykge1xuICAgICAgICAgICAgcmV0dXJuIGZvbztcbiAgICAgICAgfVxuXG4gICAgICAgIGV4cGVjdChteUZ1bmMoKSkudG9CZSgnYmFyJyk7XG4gICAgICAgIGV4cGVjdChteUZ1bmMoJ2JheicpKS50b0JlKCdiYXonKTtcbiAgICB9KTtcblxuICAgIGl0KCdzaG91bGQgdXNlIHJlc3QgcGFyYW1zJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBmdW5jdGlvbiBteUZ1bmMob25lLCB0d28sIC4uLnJlc3QpIHtcbiAgICAgICAgICAgIGV4cGVjdChvbmUpLnRvQmUoMSk7XG4gICAgICAgICAgICBleHBlY3QocmVzdCkudG9FcXVhbChbMyw0LDVdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG15RnVuYygxLCAyLCAzLCA0LCA1KTtcbiAgICB9KTtcblxuICAgIGl0KCdzaG91bGQgdXNlIHNwcmVhZCBvcGVyYXRvcicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZnVuY3Rpb24gbXlGdW5jKG9uZSwgdHdvLCB0aHJlZSkge1xuICAgICAgICAgICAgZXhwZWN0KG9uZSkudG9CZSgxKTtcbiAgICAgICAgICAgIGV4cGVjdCh0d28pLnRvQmUoMik7XG4gICAgICAgICAgICBleHBlY3QodGhyZWUpLnRvQmUoMyk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG15QXJyYXkgPSBbMSwyLDNdO1xuICAgICAgICBteUZ1bmMoLi4ubXlBcnJheSk7XG4gICAgfSk7XG5cbiAgICBpdCgnc2hvdWxkIHVzZSBzdHJpbmcgaW50ZXJwb2xhdGlvbicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IG5hbWUgPSAnQnJpYW4nO1xuICAgICAgICBsZXQgbWVzc2FnZSA9IGBIZWxsbywgJHtuYW1lfWA7XG4gICAgICAgIGV4cGVjdChtZXNzYWdlKS50b0JlKCdIZWxsbywgQnJpYW4nKTtcbiAgICB9KTtcbn0pO1xuIiwiaW1wb3J0IFBlcnNvbiBmcm9tICcuL3BlcnNvbic7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXJlbnQgZXh0ZW5kcyBQZXJzb24ge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGNoaWxkcmVuKSB7XG4gICAgICAgIHN1cGVyKG5hbWUpO1xuICAgICAgICB0aGlzLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGVyc29uIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgfVxufVxuIl19
