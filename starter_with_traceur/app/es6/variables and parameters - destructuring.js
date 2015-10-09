describe("destructuring", function() {
	"use strict";
  
  	it("can destructure arrays 1", function() {

		let x = 2;
		let y = 3;
		
		[x, y] = [y, x];

		expect(x).toBe(3);
		expect(y).toBe(2);
		
	});
	
	it("can destructure arrays 2", function() {

		let x, y;
		[x, y] = [3, 2];

		expect(x).toBe(3);
		expect(y).toBe(2);
	});
	
	it("can destructure arrays 3", function() {
		
		let doWork = function(){
			return [3, 2];
		};
		
		let x, y;
		[x, y] = doWork();

		expect(x).toBe(3);
		expect(y).toBe(2);
		
	});
	
	it("can destructure arrays 4", function() {

		var doWork = function(){
			return [1, 3, 2];
		}
		
		let x, y;
		[, x, y] = doWork();

		expect(x).toBe(3);
		expect(y).toBe(2);
		
	});
	
	it("can destructure arrays 5", function() {

		var doWork = function(){
			return [1, 3, 2];
		}
		
		let x, y, z;
		[, x, y, z] = doWork();

		expect(x).toBe(3);
		expect(y).toBe(2);
		expect(z).toBeUndefined();
		
	});

	it("can destructure objects 1", function() {
		
		var doWork = function() {
			return {
				firstName: "Scott",
				lastName: "Allen",
				twitter: "OdeToCode"
			};
		};
		
		let { firstName: first, twitter: twitter } = doWork();
		
		expect(first).toBe("Scott");
		expect(twitter).toBe("OdeToCode");
		
	});
	
	it("can destructure objects 2", function() {

	    let doWork = function() {
		     return {
			    firstName: "Scott",
		        lastName: "Allen",
		        handles: {
		        	twitter: "OdeToCode"    
		    	}
		    };
		};

		let { firstName: first, handles:{twitter: twitter} } = doWork();

		expect(first).toBe("Scott");
		expect(twitter).toBe("OdeToCode");

	});

	it("can destructure objects 3", function() {

	    let doWork = function() {
		     return {
			    firstName: "Scott",
		        lastName: "Allen",
		        handles: {
		        	twitter: "OdeToCode"    
		    	}
		    };
		};

		let { firstName, handles: {twitter} } = doWork();

		expect(firstName).toBe("Scott");
		expect(twitter).toBe("OdeToCode");

	});
	
	it("works with parameters 1", function() {

		let doWork = function(url, {data, cache, headers}){
			return data;
		};

		let result;
		result = doWork( "api/test", 
						 { data: "test", cache: false } );
		
		expect(result).toBe("test");

	});

	it("works with parameters 2", function() {

		let doWork = function(url, {data, cache, headers}){
			return cache;
		};

		let result;
		result = doWork( "api/test", 
						 { data: "test", cache: false } );
		
		expect(result).toBe(false);

	});
	
	it("works with parameters 3", function() {

		let doWork = function(url, {data, cache, headers}){
			return headers;
		};

		let result;
		result = doWork( "api/test", 
						 { data: "test", cache: false } );
		
		expect(result).toBe(undefined);

	});
	
});