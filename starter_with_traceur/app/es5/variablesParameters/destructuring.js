"use strict";

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; })();

describe("destructuring", function () {
	"use strict";

	it("can destructure arrays 1", function () {

		var x = 2;
		var y = 3;

		var _ref = [y, x];
		x = _ref[0];
		y = _ref[1];

		expect(x).toBe(3);
		expect(y).toBe(2);
	});

	it("can destructure arrays 2", function () {

		var x = undefined,
		    y = undefined;
		x = 3;
		y = 2;

		expect(x).toBe(3);
		expect(y).toBe(2);
	});

	it("can destructure arrays 3", function () {

		var doWork = function doWork() {
			return [3, 2];
		};

		var x = undefined,
		    y = undefined;

		var _doWork = doWork();

		var _doWork2 = _slicedToArray(_doWork, 2);

		x = _doWork2[0];
		y = _doWork2[1];

		expect(x).toBe(3);
		expect(y).toBe(2);
	});

	it("can destructure arrays 4", function () {

		var doWork = function doWork() {
			return [1, 3, 2];
		};

		var x = undefined,
		    y = undefined;

		var _doWork3 = doWork();

		var _doWork32 = _slicedToArray(_doWork3, 3);

		x = _doWork32[1];
		y = _doWork32[2];

		expect(x).toBe(3);
		expect(y).toBe(2);
	});

	it("can destructure arrays 5", function () {

		var doWork = function doWork() {
			return [1, 3, 2];
		};

		var x = undefined,
		    y = undefined,
		    z = undefined;

		var _doWork4 = doWork();

		var _doWork42 = _slicedToArray(_doWork4, 4);

		x = _doWork42[1];
		y = _doWork42[2];
		z = _doWork42[3];

		expect(x).toBe(3);
		expect(y).toBe(2);
		expect(z).toBeUndefined();
	});

	it("can destructure objects 1", function () {

		var doWork = function doWork() {
			return {
				firstName: "Sophie",
				lastName: "Jiang",
				twitter: "OdeToCode"
			};
		};

		var _doWork5 = doWork();

		var first = _doWork5.firstName;
		var twitter = _doWork5.twitter;

		expect(first).toBe("Sophie");
		expect(twitter).toBe("OdeToCode");
	});

	it("can destructure objects 2", function () {

		var doWork = function doWork() {
			return {
				firstName: "Sophie",
				lastName: "Jiang",
				handles: {
					twitter: "OdeToCode"
				}
			};
		};

		var _doWork6 = doWork();

		var first = _doWork6.firstName;
		var twitter = _doWork6.handles.twitter;

		expect(first).toBe("Sophie");
		expect(twitter).toBe("OdeToCode");
	});

	it("can destructure objects 3", function () {

		var doWork = function doWork() {
			return {
				firstName: "Sophie",
				lastName: "Jiang",
				handles: {
					twitter: "OdeToCode"
				}
			};
		};

		var _doWork7 = doWork();

		var firstName = _doWork7.firstName;
		var twitter = _doWork7.handles.twitter;

		expect(firstName).toBe("Sophie");
		expect(twitter).toBe("OdeToCode");
	});

	it("works with parameters 1", function () {

		var doWork = function doWork(url, _ref2) {
			var data = _ref2.data;
			var cache = _ref2.cache;
			var headers = _ref2.headers;

			return data;
		};

		var result = undefined;
		result = doWork("api/test", { data: "test", cache: false });

		expect(result).toBe("test");
	});

	it("works with parameters 2", function () {

		var doWork = function doWork(url, _ref3) {
			var data = _ref3.data;
			var cache = _ref3.cache;
			var headers = _ref3.headers;

			return cache;
		};

		var result = undefined;
		result = doWork("api/test", { data: "test", cache: false });

		expect(result).toBe(false);
	});

	it("works with parameters 3", function () {

		var doWork = function doWork(url, _ref4) {
			var data = _ref4.data;
			var cache = _ref4.cache;
			var headers = _ref4.headers;

			return headers;
		};

		var result = undefined;
		result = doWork("api/test", { data: "test", cache: false });

		expect(result).toBe(undefined);
	});
});
//# sourceMappingURL=destructuring.js.map
