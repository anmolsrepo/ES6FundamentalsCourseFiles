describe("rest parameters", function(){

	it("is like varargs 1", function(){

		let doWork = function(name, ...numbers){
			let result = 0;
			numbers.forEach(function(n){
				result += n;
			});
			return result;
		};

		let result = doWork("Sophie", 1, 2, 3);
		expect(result).toBe(6);

	});
	
	it("is like varargs 2", function(){

		let doWork = function(name, ...numbers){
			let result = 0;
			numbers.forEach(function(n){
				result += n;
			});
			return result;
		};

		let result = doWork("Sophie");
		expect(result).toBe(0);

	});
	
});