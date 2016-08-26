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
	
	it("can have a super class", function(){

		class Person {
			
			constructor(name){
				this.name = name;	
			}
			
			get name() {
				return this._name;
			}
			
			set name(newValue) {
				if(newValue){
					this._name = newValue;
				}
			}
		}
		
		class Employee extends Person {
			
			doWork() {
				return `${this._name} is working`;
			}
		}
		
		let p1 = new Person("Sophie");
		let e1 = new Employee("Christopher");
		
		expect(p1.name).toBe("Sophie");
		expect(e1.name).toBe("Christopher");
		expect(e1.doWork()).toBe("Christopher is working");
	});
	
	it("can invoke super method", function(){

		class Person {
			
			constructor(name){
				this.name = name;	
			}
			
			get name() {
				return this._name;
			}
			
			set name(newValue) {
				if(newValue){
					this._name = newValue;
				}
			}
		}
		
		class Employee extends Person {
			
			constructor(title, name){
				super(name);
				this._title = title;
			}
			
			get title(){
				return this._title;
			}
			
			doWork() {
				return `${this._name} is working`;
			}
		}
		
		let e1 = new Employee("Developer", "Christopher");
		expect(e1.name).toBe("Christopher");
		expect(e1.title).toBe("Developer");
		
	});
	
		it("can override methods", function(){

		class Person {
			
			constructor(name){
				this.name = name;	
			}
			
			get name() {
				return this._name;
			}
			
			set name(newValue) {
				if(newValue){
					this._name = newValue;
				}
			}
			
			doWork() {
				return "free";
			}
			
			toString() {
				return this.name;
			}
		}
		
		class Employee extends Person {
			
			constructor(title, name){
				super(name);
				this._title = title;
			}
			
			get title(){
				return this._title;
			}
			
			doWork() {
				return super.doWork() + "paid";
			}
		}
		
		let e1 = new Employee("Developer", "Sophie");
		let p1 = new Person("Alex");
		
		expect(p1.doWork()).toBe("free");
		expect(e1.doWork()).toBe("freepaid");
		expect(p1.toString()).toBe("Alex");
		expect(e1.toString()).toBe("Sophie");
		
		let makeEveryoneWork = function(...people){
			var results = [];
			for(var i=0; i<people.length; i++) {
				if(people[i] instanceof Person){
					results.push(people[i].doWork());
				}
			};
			return results;
		}
		
		expect(makeEveryoneWork(p1, e1, {})).toEqual(["free", "freepaid"]);
	});
});