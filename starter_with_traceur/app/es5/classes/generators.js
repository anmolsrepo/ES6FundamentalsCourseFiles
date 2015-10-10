"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

describe("generators", function () {

	it("can build an iterable", function () {

		var numbers = regeneratorRuntime.mark(function numbers(start, end) {
			var i;
			return regeneratorRuntime.wrap(function numbers$(context$3$0) {
				while (1) switch (context$3$0.prev = context$3$0.next) {
					case 0:
						i = start;

					case 1:
						if (!(i <= end)) {
							context$3$0.next = 7;
							break;
						}

						context$3$0.next = 4;
						return i;

					case 4:
						i++;
						context$3$0.next = 1;
						break;

					case 7:
					case "end":
						return context$3$0.stop();
				}
			}, numbers, this);
		});

		var sum = 0;
		var _iteratorNormalCompletion = true;
		var _didIteratorError = false;
		var _iteratorError = undefined;

		try {
			for (var _iterator = numbers(1, 5)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
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

		expect(sum).toBe(15);
	});

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
				value: regeneratorRuntime.mark(function value() {
					var _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, e;

					return regeneratorRuntime.wrap(function value$(context$4$0) {
						while (1) switch (context$4$0.prev = context$4$0.next) {
							case 0:
								_iteratorNormalCompletion2 = true;
								_didIteratorError2 = false;
								_iteratorError2 = undefined;
								context$4$0.prev = 3;
								_iterator2 = this.employees[Symbol.iterator]();

							case 5:
								if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
									context$4$0.next = 12;
									break;
								}

								e = _step2.value;
								context$4$0.next = 9;
								return e;

							case 9:
								_iteratorNormalCompletion2 = true;
								context$4$0.next = 5;
								break;

							case 12:
								context$4$0.next = 18;
								break;

							case 14:
								context$4$0.prev = 14;
								context$4$0.t0 = context$4$0["catch"](3);
								_didIteratorError2 = true;
								_iteratorError2 = context$4$0.t0;

							case 18:
								context$4$0.prev = 18;
								context$4$0.prev = 19;

								if (!_iteratorNormalCompletion2 && _iterator2["return"]) {
									_iterator2["return"]();
								}

							case 21:
								context$4$0.prev = 21;

								if (!_didIteratorError2) {
									context$4$0.next = 24;
									break;
								}

								throw _iteratorError2;

							case 24:
								return context$4$0.finish(21);

							case 25:
								return context$4$0.finish(18);

							case 26:
							case "end":
								return context$4$0.stop();
						}
					}, value, this, [[3, 14, 18, 26], [19,, 21, 25]]);
				})
			}]);

			return Company;
		})();

		var filter = regeneratorRuntime.mark(function filter(items, predicate) {
			var _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, item;

			return regeneratorRuntime.wrap(function filter$(context$3$0) {
				while (1) switch (context$3$0.prev = context$3$0.next) {
					case 0:
						_iteratorNormalCompletion3 = true;
						_didIteratorError3 = false;
						_iteratorError3 = undefined;
						context$3$0.prev = 3;
						_iterator3 = items[Symbol.iterator]();

					case 5:
						if (_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done) {
							context$3$0.next = 13;
							break;
						}

						item = _step3.value;

						if (!predicate(item)) {
							context$3$0.next = 10;
							break;
						}

						context$3$0.next = 10;
						return item;

					case 10:
						_iteratorNormalCompletion3 = true;
						context$3$0.next = 5;
						break;

					case 13:
						context$3$0.next = 19;
						break;

					case 15:
						context$3$0.prev = 15;
						context$3$0.t0 = context$3$0["catch"](3);
						_didIteratorError3 = true;
						_iteratorError3 = context$3$0.t0;

					case 19:
						context$3$0.prev = 19;
						context$3$0.prev = 20;

						if (!_iteratorNormalCompletion3 && _iterator3["return"]) {
							_iterator3["return"]();
						}

					case 22:
						context$3$0.prev = 22;

						if (!_didIteratorError3) {
							context$3$0.next = 25;
							break;
						}

						throw _iteratorError3;

					case 25:
						return context$3$0.finish(22);

					case 26:
						return context$3$0.finish(19);

					case 27:
					case "end":
						return context$3$0.stop();
				}
			}, filter, this, [[3, 15, 19, 27], [20,, 22, 26]]);
		});

		var take = regeneratorRuntime.mark(function take(items, number) {
			var count, _iteratorNormalCompletion4, _didIteratorError4, _iteratorError4, _iterator4, _step4, item;

			return regeneratorRuntime.wrap(function take$(context$3$0) {
				while (1) switch (context$3$0.prev = context$3$0.next) {
					case 0:
						count = 0;

						if (!(number < 1)) {
							context$3$0.next = 3;
							break;
						}

						return context$3$0.abrupt("return");

					case 3:
						_iteratorNormalCompletion4 = true;
						_didIteratorError4 = false;
						_iteratorError4 = undefined;
						context$3$0.prev = 6;
						_iterator4 = items[Symbol.iterator]();

					case 8:
						if (_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done) {
							context$3$0.next = 18;
							break;
						}

						item = _step4.value;
						context$3$0.next = 12;
						return item;

					case 12:
						count += 1;

						if (!(count >= number)) {
							context$3$0.next = 15;
							break;
						}

						return context$3$0.abrupt("return");

					case 15:
						_iteratorNormalCompletion4 = true;
						context$3$0.next = 8;
						break;

					case 18:
						context$3$0.next = 24;
						break;

					case 20:
						context$3$0.prev = 20;
						context$3$0.t0 = context$3$0["catch"](6);
						_didIteratorError4 = true;
						_iteratorError4 = context$3$0.t0;

					case 24:
						context$3$0.prev = 24;
						context$3$0.prev = 25;

						if (!_iteratorNormalCompletion4 && _iterator4["return"]) {
							_iterator4["return"]();
						}

					case 27:
						context$3$0.prev = 27;

						if (!_didIteratorError4) {
							context$3$0.next = 30;
							break;
						}

						throw _iteratorError4;

					case 30:
						return context$3$0.finish(27);

					case 31:
						return context$3$0.finish(24);

					case 32:
					case "end":
						return context$3$0.stop();
				}
			}, take, this, [[6, 20, 24, 32], [25,, 27, 31]]);
		});

		var count = 0;
		var company = new Company();
		company.addEmployees("Tim", "Sue", "Joy", "Tom");

		var _iteratorNormalCompletion5 = true;
		var _didIteratorError5 = false;
		var _iteratorError5 = undefined;

		try {
			for (var _iterator5 = take(filter(company, function (e) {
				return e[0] == 'T';
			}), 1)[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
				var employee = _step5.value;

				count += 1;
			}
		} catch (err) {
			_didIteratorError5 = true;
			_iteratorError5 = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion5 && _iterator5["return"]) {
					_iterator5["return"]();
				}
			} finally {
				if (_didIteratorError5) {
					throw _iteratorError5;
				}
			}
		}

		expect(count).toBe(1);
	});

	it("can take a parameter from next(param)", function () {

		var range = regeneratorRuntime.mark(function range(start, end) {
			var current, delta;
			return regeneratorRuntime.wrap(function range$(context$3$0) {
				while (1) switch (context$3$0.prev = context$3$0.next) {
					case 0:
						current = start;

					case 1:
						if (!(current <= end)) {
							context$3$0.next = 8;
							break;
						}

						context$3$0.next = 4;
						return current;

					case 4:
						delta = context$3$0.sent;

						current += delta || 1;
						context$3$0.next = 1;
						break;

					case 8:
					case "end":
						return context$3$0.stop();
				}
			}, range, this);
		});

		var range2 = function range2(start, end) {
			var current = start;
			var first = true;
			return {
				next: function next() {
					var delta = arguments.length <= 0 || arguments[0] === undefined ? 1 : arguments[0];

					var result = { value: undefined, done: true };
					if (!first) {
						current += delta;
					}
					if (current <= end) {
						result.value = current;
						result.done = false;
					}
					first = false;
					return result;
				}
			};
		};

		var result = [];
		var iterator = range2(1, 10);
		var next = iterator.next();
		while (!next.done) {
			result.push(next.value);
			next = iterator.next(2);
		}

		expect(result).toEqual([1, 3, 5, 7, 9]);
	});
});

//console.log(e);

//console.log("filter", item);

//console.log("take", item);
//# sourceMappingURL=generators.js.map
