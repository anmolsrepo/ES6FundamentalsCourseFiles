describe("the class keyword", function(){

	it("can create a class", function(){

		class Employee {
			
			doWork() {
				return "completed!";
			}
			
			getName() {
				return "Sophie";
			}
			
		}
		
		let e = new Employee();
		expect(e.doWork()).toBe("completed!")
		expect(e.getName()).toBe("Sophie")

	});

});