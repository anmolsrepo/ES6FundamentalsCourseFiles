"use strict";

describe("arrow functions", function () {

	it("provide a compact syntax to define a function 1", function () {

		var add = function add(x, y) {
			return x + y;
		};
		var square = function square(x) {
			return x * x;
		};

		expect(square(add(2, 3))).toBe(25);
	});

	it("provide a compact syntax to define a function 2", function () {

		var add = function add(x, y) {
			var temp = x + y;
			return temp;
		};
		var square = function square(x) {
			return x * x;
		};
		var three = function three() {
			return 3;
		};

		expect(square(add(2, three()))).toBe(25);
	});

	it("can be used with array methods", function () {

		var numbers = [1, 2, 3, 4];

		var sum = 0;
		numbers.forEach(function (n) {
			return sum += n;
		});
		expect(sum).toBe(10);

		var doubled = numbers.map(function (n) {
			return n * 2;
		});
		expect(doubled).toEqual([2, 4, 6, 8]);
	});

	//it("lexically binds to 'this' 1 - ************** NOT WORKING *************", function(done) {

	//this.name = "Scott";

	//expect(this.name).toBe("Scott");

	//});

	it("lexically binds to 'this' 2 (Asynch)", function (done) {

		var self = this;
		self.name = "Scott";

		setTimeout(function () {
			expect(self.name).toBe("Scott");
			done(); //tell jasmine when the code is finished
		}, 15);
	});

	it("lexically binds to 'this' 3 (Asynch)", function (done) {
		var _this = this;

		this.name = "Scott";

		setTimeout(function () {
			expect(_this.name).toBe("Scott");
			done(); //tell jasmine when the code is finished
		}, 15);
	});
});
//# sourceMappingURL=arrows.js.map
