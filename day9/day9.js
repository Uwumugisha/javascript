//operators
let n = 1;
n = ++n + n++ * n;
console.log(n);
n = 1;
n = ++n + ++n * n;
console.log(n);
n = 1;
n = n++ + ++n * n;
console.log(n);
let a = 1;
a = ++a + a++;
console.log(a);

a = 1;
a = ++a + a++;
console.log(a);
console.log(a++, ++a);
let x = 0;
let y = 0;
console.log(x++ && y++);
console.log(x);
console.log(y);
 x = 0;
 y = 0;
console.log(x++ || y++);
console.log(x);
console.log(y);
let n3 = + 'a';
console.log(`${n3}: ${typeof n3}`);

