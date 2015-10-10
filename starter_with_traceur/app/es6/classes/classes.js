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
		
		expect(e.doWork()).toBe("completed!");
		expect(e.getName()).toBe("Sophie");
		expect(Employee.prototype.doWork.call(e)).toBe("completed!");
	});
	
	it("can have a constructor", function(){

		class Employee {
			
			constructor(name){
				this._name = name;	
			}
			
			doWork() {
				return "completed!";
			}
			
			getName() {
				return this._name;
			}
			
		}
		
		let e1 = new Employee("Sophie");
		let e2 = new Employee("Alex");
		
		expect(e1.getName()).toBe("Sophie");
		expect(e2.getName()).toBe("Alex");
	});

	it("can have getters and setters", function(){

		class Employee {
			
			constructor(name){
				this.name = name;	
			}
			
			doWork() {
				return "completed!";
			}
			
			get name() {
				return this._name.toUpperCase();
			}
			
			set name(newValue) {
				if(newValue){
					this._name = newValue;
				}
			}
		}
		
		let e1 = new Employee("Sophie");
		let e2 = new Employee("Alex");
		
		expect(e1.name).toBe("SOPHIE");
		expect(e2.name).toBe("ALEX");
		
		e1.name = "Chris";
		expect(e1.name).toBe("CHRIS");
	});
});