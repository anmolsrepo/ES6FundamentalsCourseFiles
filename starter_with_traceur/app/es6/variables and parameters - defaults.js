describe("default parameters", function(){

	it("provides defaults 1 (test pass value)", function(){

		var doWork = function(name="Scott") {						
			return name;
		};

		var result = doWork();

		expect(result).toBe("Scott");

	});

	it("provides defaults 2 (test empty string)", function(){

		var doWork = function(name="Scott") {						
			return name;
		};

		var result = doWork("");

		expect(result).toBe("");

	});
	
	it("provides defaults 3 (test undefined)", function(){

		var doWork = function(name="Scott") {						
			return name;
		};

		var result = doWork(undefined);

		expect(result).toBe("Scott");

	});
	
	it("provides defaults 4 (test null value)", function(){

		var doWork = function(name="Scott") {						
			return name;
		};

		var result = doWork(null);

		expect(result).toBe(null);

	});
	
	it("will provide a value for undefined", function(){

		let doWork = function(a = 1, b = 2, c = 3){
			return [a,b,c];
		};
		
		let a, b, c;
		[a,b,c] = doWork(5, undefined);

		expect(a).toBe(5);
		expect(b).toBe(2);
		expect(c).toBe(3);
	});

	it("works with destructuring", function() {

		let doWork = function(
			     url, 
				{data = "Scott", cache = true}){
			return data;
		};

		let result = doWork(
				"api/test", {
					cache: false
				}
			);
		
		expect(result).toBe("Scott");

	});

});