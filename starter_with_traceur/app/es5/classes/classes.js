"use strict";

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

describe("the class keyword", function () {

	it("can create a class", function () {
		var Employee = (function () {
			function Employee() {
				_classCallCheck(this, Employee);
			}

			_createClass(Employee, [{
				key: "doWork",
				value: function doWork() {
					return "completed!";
				}
			}, {
				key: "getName",
				value: function getName() {
					return "Sophie";
				}
			}]);

			return Employee;
		})();

		var e = new Employee();

		expect(e.doWork()).toBe("completed!");
		expect(e.getName()).toBe("Sophie");
		expect(Employee.prototype.doWork.call(e)).toBe("completed!");
	});

	it("can have a constructor", function () {
		var Employee = (function () {
			function Employee(name) {
				_classCallCheck(this, Employee);

				this._name = name;
			}

			_createClass(Employee, [{
				key: "doWork",
				value: function doWork() {
					return "completed!";
				}
			}, {
				key: "getName",
				value: function getName() {
					return this._name;
				}
			}]);

			return Employee;
		})();

		var e1 = new Employee("Sophie");
		var e2 = new Employee("Alex");

		expect(e1.getName()).toBe("Sophie");
		expect(e2.getName()).toBe("Alex");
	});

	it("can have getters and setters", function () {
		var Employee = (function () {
			function Employee(name) {
				_classCallCheck(this, Employee);

				this.name = name;
			}

			_createClass(Employee, [{
				key: "doWork",
				value: function doWork() {
					return "completed!";
				}
			}, {
				key: "name",
				get: function get() {
					return this._name.toUpperCase();
				},
				set: function set(newValue) {
					if (newValue) {
						this._name = newValue;
					}
				}
			}]);

			return Employee;
		})();

		var e1 = new Employee("Sophie");
		var e2 = new Employee("Alex");

		expect(e1.name).toBe("SOPHIE");
		expect(e2.name).toBe("ALEX");

		e1.name = "Chris";
		expect(e1.name).toBe("CHRIS");
	});

	it("can have a super class", function () {
		var Person = (function () {
			function Person(name) {
				_classCallCheck(this, Person);

				this.name = name;
			}

			_createClass(Person, [{
				key: "name",
				get: function get() {
					return this._name;
				},
				set: function set(newValue) {
					if (newValue) {
						this._name = newValue;
					}
				}
			}]);

			return Person;
		})();

		var Employee = (function (_Person) {
			_inherits(Employee, _Person);

			function Employee() {
				_classCallCheck(this, Employee);

				_get(Object.getPrototypeOf(Employee.prototype), "constructor", this).apply(this, arguments);
			}

			_createClass(Employee, [{
				key: "doWork",
				value: function doWork() {
					return this._name + " is working";
				}
			}]);

			return Employee;
		})(Person);

		var p1 = new Person("Sophie");
		var e1 = new Employee("Christopher");

		expect(p1.name).toBe("Sophie");
		expect(e1.name).toBe("Christopher");
		expect(e1.doWork()).toBe("Christopher is working");
	});

	it("can invoke super method", function () {
		var Person = (function () {
			function Person(name) {
				_classCallCheck(this, Person);

				this.name = name;
			}

			_createClass(Person, [{
				key: "name",
				get: function get() {
					return this._name;
				},
				set: function set(newValue) {
					if (newValue) {
						this._name = newValue;
					}
				}
			}]);

			return Person;
		})();

		var Employee = (function (_Person2) {
			_inherits(Employee, _Person2);

			function Employee(title, name) {
				_classCallCheck(this, Employee);

				_get(Object.getPrototypeOf(Employee.prototype), "constructor", this).call(this, name);
				this._title = title;
			}

			_createClass(Employee, [{
				key: "doWork",
				value: function doWork() {
					return this._name + " is working";
				}
			}, {
				key: "title",
				get: function get() {
					return this._title;
				}
			}]);

			return Employee;
		})(Person);

		var e1 = new Employee("Developer", "Christopher");
		expect(e1.name).toBe("Christopher");
		expect(e1.title).toBe("Developer");
	});

	it("can override methods", function () {
		var Person = (function () {
			function Person(name) {
				_classCallCheck(this, Person);

				this.name = name;
			}

			_createClass(Person, [{
				key: "doWork",
				value: function doWork() {
					return "free";
				}
			}, {
				key: "toString",
				value: function toString() {
					return this.name;
				}
			}, {
				key: "name",
				get: function get() {
					return this._name;
				},
				set: function set(newValue) {
					if (newValue) {
						this._name = newValue;
					}
				}
			}]);

			return Person;
		})();

		var Employee = (function (_Person3) {
			_inherits(Employee, _Person3);

			function Employee(title, name) {
				_classCallCheck(this, Employee);

				_get(Object.getPrototypeOf(Employee.prototype), "constructor", this).call(this, name);
				this._title = title;
			}

			_createClass(Employee, [{
				key: "doWork",
				value: function doWork() {
					return _get(Object.getPrototypeOf(Employee.prototype), "doWork", this).call(this) + "paid";
				}
			}, {
				key: "title",
				get: function get() {
					return this._title;
				}
			}]);

			return Employee;
		})(Person);

		var e1 = new Employee("Developer", "Sophie");
		var p1 = new Person("Alex");

		expect(p1.doWork()).toBe("free");
		expect(e1.doWork()).toBe("freepaid");
		expect(p1.toString()).toBe("Alex");
		expect(e1.toString()).toBe("Sophie");

		var makeEveryoneWork = function makeEveryoneWork() {
			var results = [];

			for (var _len = arguments.length, people = Array(_len), _key = 0; _key < _len; _key++) {
				people[_key] = arguments[_key];
			}

			for (var i = 0; i < people.length; i++) {
				if (people[i] instanceof Person) {
					results.push(people[i].doWork());
				}
			};
			return results;
		};

		expect(makeEveryoneWork(p1, e1, {})).toEqual(["free", "freepaid"]);
	});
});
//# sourceMappingURL=classes.js.map
