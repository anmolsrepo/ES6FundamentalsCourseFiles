describe("using const", function(){

	it("will make a variable read-only", function(){

		const MAX_SIZE = 10;
		
		//MAX_SIZE = 12; //sYNTAXeRROR
		
		expect(MAX_SIZE).toBe(10);
	});
	
	it("can shadow outer declaration 1", function(){

		var doWork = function(){
			var x = 12;
			var x = 10;
			return x;
		};
		
		var result = doWork();
		expect(result).toBe(10);
	});
	
	it("can shadow outer declaration 2", function(){

		let x = 12;
		var doWork = function(){
			var x = 10;
			return x;
		};
		
		var result = doWork();
		expect(result).toBe(10);
		expect(x).toBe(12);
	});
	
	it("can shadow outer declaration 3", function(){

		const x = 12;
		var doWork = function(){
			var x = 10;
			return x;
		};
		
		var result = doWork();
		expect(result).toBe(10);
		expect(x).toBe(12);
	});
	
	it("can shadow outer declaration 4", function(){

		const x = 12;
		var doWork = function(){
			let x = 10;
			return x;
		};
		
		var result = doWork();
		expect(result).toBe(10);
		expect(x).toBe(12);
	});
});

