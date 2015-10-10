"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

describe("comprehensions", function () {

	it("can create arrays or generators", function () {

		var range = regeneratorRuntime.mark(function range(start, end) {
			var current;
			return regeneratorRuntime.wrap(function range$(context$3$0) {
				while (1) switch (context$3$0.prev = context$3$0.next) {
					case 0:
						current = start;

					case 1:
						if (!(current <= end)) {
							context$3$0.next = 7;
							break;
						}

						context$3$0.next = 4;
						return current;

					case 4:
						current += 1;
						context$3$0.next = 1;
						break;

					case 7:
					case "end":
						return context$3$0.stop();
				}
			}, range, this);
		});

		var numbers = [];
		var _arr = [1, 2, 3];
		for (var _i = 0; _i < _arr.length; _i++) {
			var n = _arr[_i];
			numbers.push(n * n);
		}
		expect(numbers).toEqual([1, 4, 9]);

		//let numbers = [for (n of [1,2,3]) if(n > 1) n * n];
		//expect(numbers).toEqual([4,9]);

		//let numbers2 = (for (n of [1,2,3]) n * n);
		//expect(Array.from(numbers2)).toEqual([1,4,9]);
	});

	it("can be used with yield*", function () {
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
					var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, e;

					return regeneratorRuntime.wrap(function value$(context$4$0) {
						while (1) switch (context$4$0.prev = context$4$0.next) {
							case 0:
								_iteratorNormalCompletion = true;
								_didIteratorError = false;
								_iteratorError = undefined;
								context$4$0.prev = 3;
								_iterator = this.employees[Symbol.iterator]();

							case 5:
								if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
									context$4$0.next = 13;
									break;
								}

								e = _step.value;

								console.log("yield", e);
								context$4$0.next = 10;
								return e;

							case 10:
								_iteratorNormalCompletion = true;
								context$4$0.next = 5;
								break;

							case 13:
								context$4$0.next = 19;
								break;

							case 15:
								context$4$0.prev = 15;
								context$4$0.t0 = context$4$0["catch"](3);
								_didIteratorError = true;
								_iteratorError = context$4$0.t0;

							case 19:
								context$4$0.prev = 19;
								context$4$0.prev = 20;

								if (!_iteratorNormalCompletion && _iterator["return"]) {
									_iterator["return"]();
								}

							case 22:
								context$4$0.prev = 22;

								if (!_didIteratorError) {
									context$4$0.next = 25;
									break;
								}

								throw _iteratorError;

							case 25:
								return context$4$0.finish(22);

							case 26:
								return context$4$0.finish(19);

							case 27:
							case "end":
								return context$4$0.stop();
						}
					}, value, this, [[3, 15, 19, 27], [20,, 22, 26]]);
				})
			}]);

			return Company;
		})();

		var filter = regeneratorRuntime.mark(function filter(items, predicate) {
			return regeneratorRuntime.wrap(function filter$(context$3$0) {
				while (1) switch (context$3$0.prev = context$3$0.next) {
					case 0:
					case "end":
						return context$3$0.stop();
				}
			}, filter, this);
		});

		//yield* (for (item of items) if(predicate(item)) item);
		// for(let item of items) {
		// 	if(predicate(item)) {
		// 		yield item;
		// 	}
		// }			
		var take = regeneratorRuntime.mark(function take(items, number) {
			var count, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, item;

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
						_iteratorNormalCompletion2 = true;
						_didIteratorError2 = false;
						_iteratorError2 = undefined;
						context$3$0.prev = 6;
						_iterator2 = items[Symbol.iterator]();

					case 8:
						if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
							context$3$0.next = 18;
							break;
						}

						item = _step2.value;
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
						_iteratorNormalCompletion2 = true;
						context$3$0.next = 8;
						break;

					case 18:
						context$3$0.next = 24;
						break;

					case 20:
						context$3$0.prev = 20;
						context$3$0.t0 = context$3$0["catch"](6);
						_didIteratorError2 = true;
						_iteratorError2 = context$3$0.t0;

					case 24:
						context$3$0.prev = 24;
						context$3$0.prev = 25;

						if (!_iteratorNormalCompletion2 && _iterator2["return"]) {
							_iterator2["return"]();
						}

					case 27:
						context$3$0.prev = 27;

						if (!_didIteratorError2) {
							context$3$0.next = 30;
							break;
						}

						throw _iteratorError2;

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
		var found = undefined;
		company.addEmployees("Tim", "Sue", "Joy", "Tom");

		var _iteratorNormalCompletion3 = true;
		var _didIteratorError3 = false;
		var _iteratorError3 = undefined;

		try {
			for (var _iterator3 = take(filter(company, function (e) {
				return e[0] == 'S';
			}), 1)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
				var employee = _step3.value;

				count += 1;
				found = employee;
				console.log("got", employee);
			}
		} catch (err) {
			_didIteratorError3 = true;
			_iteratorError3 = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion3 && _iterator3["return"]) {
					_iterator3["return"]();
				}
			} finally {
				if (_didIteratorError3) {
					throw _iteratorError3;
				}
			}
		}

		expect(count).toBe(1);
		expect(found).toBe("Sue");
	});
});
//# sourceMappingURL=comprehensions.js.map
