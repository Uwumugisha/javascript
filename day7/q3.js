/*Carry out a chain of conversions: 
create a Boolean from a BigInt created from 
a Number that was created from a String. Start with the value "1234". Is it possible?*/

let c = Boolean(BigInt(Number(String("1234"))));
console.log(typeof c);