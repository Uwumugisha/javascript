let testObj = {
    nr: 600,
    str: 'text'
};
console.log(typeof testObj);
console.log(testObj.nr);
console.log(testObj.str);

let user1 = {
    name: 'Mateus',
    surname: 'Pinto',
    age: 21,
    email: 'matuesPinto@dayrep.com'
};
let user2 = {
    name: 'calvin',
    surname: 'Hart',
    age: 66,
    email: 'calvinMHart@teleworm.us'
};
user1.phone = '078787778';
console.log(user1.name,  user1.surname);
console.log(user1.phone);
let days = ['sun', 'tue', 'wed', 'thu', 'fri', 'sat'];
console.log(days[3]);
console.log(days[1]);
// let a[0] = 12;
// console.log(a[0]);
let names = [['Olive', 'ema', 'sofia'], ['willy', 'james', 'danny']];
console.log(names[0]);
let femalenames = names[0];
console.log(femalenames[2]);
console.log(typeof names);
let day0 = ['sun', 'mon', 'tue'];
let day1 = 'sunday';
console.log(typeof day0);
console.log(typeof day1);
console.log(day0 instanceof Array);
console.log(day1 instanceof Array);
console.log(day0.length);
console.log(day0.indexOf('sun'));
console.log(day0.indexOf('va'));
let day2 = day0.pop();
console.log(day0.length);
console.log(day0);
console.log(day2);
let users =[
        {
    
        name: "Calvin",
        surname: "Hart",
        age: 66,
        email: "CalvinMHart@teleworm.us"
        },
    
    {
        name: "Mateus",
         surname: "Pinto",
         age: 21,
         email: "MateusPinto@dayrep.com"
         }
     ];
     
        
     console.log(users[0].name); // -> Calvin
     console.log(users[1].age); // -> 21
    

