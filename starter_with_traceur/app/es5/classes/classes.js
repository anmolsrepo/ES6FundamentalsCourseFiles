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
	});
});
//# sourceMappingURL=classes.js.map
