// Print all values and all types of those values using console.log. 
// Try to use string interpolation to display the value and type at the same time with a single 
// console.log call, e.g. in the following form: 1000 [number].


let bln = true;
let num = 2;
let bgInt = 1n;
let str = 'hello'
console.log(`${bln}: ${ typeof bln}`);
console.log(`${num}: ${ typeof num}`);
console.log(`${bgInt}: ${ typeof bgInt}`);
console.log(`${str}: ${ typeof str}`);

