// --------------example1------------------

interface Person { 
    firstName:string, 
    lastName:string, 
    sayHi: ()=>string 
} 
  
var customer:Person = { 
    firstName:"Ajay",
    lastName:"Anu", 
    sayHi: ()=>{return "Hi"} 
} 
  
console.log("Customer Object Details: ");
console.log(customer.sayHi()); 
console.log(customer.firstName); 
console.log(customer.lastName); 

var employee:Person = { 
    firstName:"Vikas",
    lastName:"Jainer", 
    sayHi: () =>{return "Hello"} 
 } 
  
 console.log("Employee  Object Details: ");
 console.log(employee.sayHi());
 console.log(employee.firstName);
 console.log(employee.lastName);
 
// ----------------example 2----------------- 

interface data {
    name: string;
    age: number
}

interface data {
    email: string;
}

const person: data = {
    name: "kgowda",
    age: 20,
    email: " kgowda@gmail.com"
};

console.log(person);