class Employee { 
    name:string; 

    constructor(name:string) { 
       this.name = name; 
    }  

    display():void { 
       console.log("Employee Name: "+this.name);
    } 
} 
  
var obj = new Employee("Anu");

console.log("Employee Name: "+obj.name);  

obj.display();