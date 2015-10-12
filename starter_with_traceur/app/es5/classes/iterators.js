"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

describe("iterables", function () {

	it("can work with iterators at a low level - while(!next.done)", function () {

		var sum = 0;
		var numbers = [1, 2, 3, 4];

		// for loop
		sum = 0;
		for (var i = 0; i < numbers.length; i++) {
			sum += numbers[i];
		}
		expect(sum).toBe(10);

		// for in
		sum = 0;
		for (var i in numbers) {
			sum += numbers[i];
		}
		expect(sum).toBe(10);

		// iterator
		sum = 0;

		var iterator = numbers[Symbol.iterator]();
		var next = iterator.next();
		while (!next.done) {
			sum += next.value;
			next = iterator.next();
		}
		expect(sum).toBe(10);
	});
});

describe("for of", function () {

	it("can work with iteratables at a high level - for(let n of numbers)", function () {

		var sum = 0;
		var numbers = [1, 2, 3, 4];

		var _iteratorNormalCompletion = true;
		var _didIteratorError = false;
		var _iteratorError = undefined;

		try {
			for (var _iterator = numbers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
				var n = _step.value;

				sum += n;
			}
		} catch (err) {
			_didIteratorError = true;
			_iteratorError = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion && _iterator["return"]) {
					_iterator["return"]();
				}
			} finally {
				if (_didIteratorError) {
					throw _iteratorError;
				}
			}
		}

		expect(sum).toBe(10);
	});
});

describe("iterable", function () {

	it("can be built by implementing Symbol.iterator", function () {
		var Company = (function () {
			function Company() {
				_classCallCheck(this, Company);

				this.employees = [];
			}

			_createClass(Company, [{
				key: "addEmployees",
				value: function addEmployees() {
					for (var _len = arguments.length, names = Array(_len), _key = 0; _key < _len; _key++) {
						names[_key] = arguments[_key];
					}

					this.employees = this.employees.concat(names);
				}
			}, {
				key: Symbol.iterator,
				value: function value() {
					return new ArrayIterator(this.employees);
				}
			}]);

			return Company;
		})();

		var ArrayIterator = (function () {
			function ArrayIterator(array) {
				_classCallCheck(this, ArrayIterator);

				this.array = array;
				this.index = 0;
			}

			_createClass(ArrayIterator, [{
				key: "next",
				value: function next() {
					var result = { value: undefined, done: true };
					if (this.index < this.array.length) {
						result.value = this.array[this.index];
						result.done = false;
						this.index += 1;
					}
					return result;
				}
			}]);

			return ArrayIterator;
		})();

		var count = 0;
		var company = new Company();
		company.addEmployees("Tim", "Sue", "Joy", "Tom");

		var _iteratorNormalCompletion2 = true;
		var _didIteratorError2 = false;
		var _iteratorError2 = undefined;

		try {
			for (var _iterator2 = company[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
				var employee = _step2.value;

				count += 1;
			}
		} catch (err) {
			_didIteratorError2 = true;
			_iteratorError2 = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion2 && _iterator2["return"]) {
					_iterator2["return"]();
				}
			} finally {
				if (_didIteratorError2) {
					throw _iteratorError2;
				}
			}
		}

		expect(count).toBe(4);
	});
});
//# sourceMappingURL=iterators.js.map
