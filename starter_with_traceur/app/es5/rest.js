"use strict";

describe("rest parameters", function () {

	it("is like varargs 1", function () {

		var doWork = function doWork(name) {
			var result = 0;

			for (var _len = arguments.length, numbers = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
				numbers[_key - 1] = arguments[_key];
			}

			numbers.forEach(function (n) {
				result += n;
			});
			return result;
		};

		var result = doWork("Scott", 1, 2, 3);
		expect(result).toBe(6);
	});

	it("is like varargs 2", function () {

		var doWork = function doWork(name) {
			var result = 0;

			for (var _len2 = arguments.length, numbers = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
				numbers[_key2 - 1] = arguments[_key2];
			}

			numbers.forEach(function (n) {
				result += n;
			});
			return result;
		};

		var result = doWork("Scott");
		expect(result).toBe(0);
	});
});
//# sourceMappingURL=rest.js.map
