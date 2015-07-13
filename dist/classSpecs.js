'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

describe('Class specs', function () {
    var Shape = function Shape(width, height) {
        _classCallCheck(this, Shape);

        this.width = width;
        this.height = height;
    };

    var Rectangle = (function (_Shape) {
        function Rectangle() {
            _classCallCheck(this, Rectangle);

            if (_Shape != null) {
                _Shape.apply(this, arguments);
            }
        }

        _inherits(Rectangle, _Shape);

        _createClass(Rectangle, [{
            key: 'getArea',
            value: function getArea() {
                return this.width * this.height;
            }
        }, {
            key: 'area',
            get: function () {
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