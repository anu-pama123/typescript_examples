let sum:number=0;
function displayNum(a:number,b:number) {
    console.log(a+","+b)
    sum = a+b;
    console.log('sum of a and b is :' + sum)
}
displayNum(19,7)

function dispDetails(fname:string,lname?:string) {  
    console.log("Fisrt Name",fname); 
  
    if(lname!=undefined)  
    console.log("Last Name",lname); 
 }
 dispDetails("Asmita");
 dispDetails("Nidhi", "Gupta");