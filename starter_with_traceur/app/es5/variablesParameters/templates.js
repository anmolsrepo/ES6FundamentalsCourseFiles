"use strict";

var _templateObject = _taggedTemplateLiteral(["", " + ", " is ", ""], ["", " + ", " is ", ""]);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

describe("template literals", function () {

	it("can easily combine literals and data", function () {

		var doWork = function doWork(name) {
			return "Hello, " + name;
		};

		var result = doWork("Sophie");
		expect(result).toBe("Hello, Sophie");
	});

	it("can help build URLs", function () {

		var category = "music";
		var id = 2112;

		var url = "http://apiserver/" + category + "/" + id;

		expect(url).toBe("http://apiserver/music/2112");
	});

	it("can use tags - ****************** NOT SURE HOW IT WORKS ******************", function () {

		var upper = function upper(strings) {
			var result = "";

			for (var _len = arguments.length, values = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
				values[_key - 1] = arguments[_key];
			}

			for (var i = 0; i < strings.length; i++) {
				result += strings[i];
				if (i < values.length) {
					result += values[i];
				}
			}
			return result.toUpperCase();
		};

		var x = 1;
		var y = 3;
		var result = upper(_templateObject, x, y, x + y);

		expect(result).toBe("1 + 3 IS 4");
	});
});
//# sourceMappingURL=templates.js.map
