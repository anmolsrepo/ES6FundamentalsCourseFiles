describe("arrow functions", function(){

	it("provide a compact syntax to define a function 1", function(){

		let add = (x,y) => x + y;
		let square = x => x * x;

		expect(square(add(2,3))).toBe(25);

	});
	
	it("provide a compact syntax to define a function 2", function(){

		let add = (x,y) => {
			let temp = x + y;
			return temp;
		};
		let square = x => x * x;
		let three = () => 3;

		expect(square(add(2,three()))).toBe(25);

	});

	it("can be used with array methods", function(){

		var numbers = [1,2,3,4];

		var sum = 0;
		numbers.forEach(n => sum += n);
		expect(sum).toBe(10);

		var doubled = numbers.map(n => n * 2);
		expect(doubled).toEqual([2,4,6,8]);
	});

	//it("lexically binds to 'this' 1 - ************** NOT WORKING *************", function(done) {

		//this.name = "Scott";
	
		//expect(this.name).toBe("Scott");
		
	//});
	
	it("lexically binds to 'this' 2 (Asynch)", function(done) {

		let self = this;
		self.name = "Scott";
	
		setTimeout(function() {
			expect(self.name).toBe("Scott");
			done(); //tell jasmine when the code is finished
		},15);
		
	});
	
	it("lexically binds to 'this' 3 (Asynch)", function(done) {

		this.name = "Scott";
	
		setTimeout(()=> {
			expect(this.name).toBe("Scott");
			done(); //tell jasmine when the code is finished
		},15);
		
	});
	
	
});