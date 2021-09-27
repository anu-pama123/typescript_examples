// example1
function printNum(value) {
    console.log(value);
}
printNum("hai");
printNum(66);
// example2
var value;
value = 190;
console.log("Numeric value of the value: " + value);
value = "it is TypeScript!";
console.log("String value of the value: " + value);
// example 3
function displayType(item) {
    if (typeof (item) === "number") {
        console.log("item is a number");
    }
    else if (typeof (item) === "string") {
        console.log("item is a string");
    }
}
displayType(49);
displayType('hai');
// example 4
var arr = [2, 5, 7, 5, 11, 15];
console.log("Display the array elements");
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
// arr = ["Geeks", "G4G", "GFG", "GeeksforGeeks"];
console.log("Display the array elements");
// Loop to display the array elements
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
