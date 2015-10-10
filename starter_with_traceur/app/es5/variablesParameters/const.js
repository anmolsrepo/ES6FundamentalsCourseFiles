"use strict";

describe("using const", function () {

	it("will make a variable read-only", function () {

		var MAX_SIZE = 10;

		//MAX_SIZE = 12; //SyntaxError

		expect(MAX_SIZE).toBe(10);
	});

	it("can shadow outer declaration 1", function () {

		var doWork = function doWork() {
			var x = 12;
			var x = 10;
			return x;
		};

		var result = doWork();
		expect(result).toBe(10);
	});

	it("can shadow outer declaration 2", function () {

		var x = 12;
		var doWork = function doWork() {
			var x = 10;
			return x;
		};

		var result = doWork();
		expect(result).toBe(10);
		expect(x).toBe(12);
	});

	it("can shadow outer declaration 3", function () {

		var x = 12;
		var doWork = function doWork() {
			var x = 10;
			return x;
		};

		var result = doWork();
		expect(result).toBe(10);
		expect(x).toBe(12);
	});

	it("can shadow outer declaration 4", function () {

		var x = 12;
		var doWork = function doWork() {
			var x = 10;
			return x;
		};

		var result = doWork();
		expect(result).toBe(10);
		expect(x).toBe(12);
	});
});
//# sourceMappingURL=const.js.map
