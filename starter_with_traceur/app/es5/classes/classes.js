"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

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

				this._name = name;
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
});
//# sourceMappingURL=classes.js.map
