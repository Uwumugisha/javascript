// let contactList = [{
//     name: "Maxwell Wright",
//     phone: "(0191) 719 6495",
//     email: "Curabitur.egestas.nunc@nonummyac.co.uk"
// }, {
//     name: "Raja Villarreal",
//     phone: "0866 398 2895",
//     email: "posuere.vulputate@sed.com"
// }, {
//     name: "Helen Richards",
//     phone: "0800 1111",
//     email: "libero@convallis.edu"
// }];

// let user = prompt("choose first, last, new as you want:")

// switch (user) {
//     case "first":
//         if (contactList.length > 0) {
//             console.log("First contact:", contactList[0]);
//         } else {
//             console.log("please a contact of your choice");
//         }
//         break;

//     case "last":
//         if (contactList.length > 0) {
//             console.log("Last contact:", contactList[contactList.length - 1]);
//         } else {
//             console.log("please a contact of your choice");
//         }
//         break;

//     case "new":
//         let newName = prompt("Enter name:");
//         let newPhone = prompt("Enter phone:");
//         let newEmail = prompt("Enter email:");

       
//         if (newName && newPhone && newEmail) {
         
//             contactList.push({
//                 name: newName,
//                 phone: newPhone,
//                 email: newEmail
//             });
//             console.log("New contact added.");
//         } else {
//             console.log("Please enter all required data for new contact.");
//         }
//         break;

//     default:
//         console.log("error occured. Please enter 'first', 'last', or 'new'.");
// }
// let i = 100;
//  while(i >= 10) {
//      console.log(i);
//      i -= 10;
//  }
// let numbers = [21, 45, 100, 12, 11, 78, 61, 4, 39, 22];

// for (number of numbers) {

// console.log(number);

// }

// for (number of numbers) {

// if (number % 2 === 0) {

// console.log(number);

// }

// }

// for (number of numbers) {

// if (number > 10 && number < 60) {

// console.log(number);

// }

// }

// let a = 2;

// switch (a) {

//     case 1:
//         a = 'one';
//         break;
//     case 2:
//         a = 'two';
//         break;
//     default:
//         a = 'not found';
//         break;
// }
// console.log(`The value is ${a}`);
// let totalAge = 0;
// let numOfStudent = 26;
// let age = Number('enter age');
// for (let i = 0; i <= numOfStudent; i++){
//     totalAge += age;
//     let average = totalAge / numOfStudent;
//     console.log(average)
// }
// let firstnumber = Number(prompt("Enter first number"));

// let lastnumber = Number(prompt("Enter last number"));

// if (!Number.isNaN(firstnumber) && !Number.isNaN(lastnumber) && firstnumber > lastnumber) {

// for (i = firstnumber; i >= lastnumber; i -= 10) {

// console.log(i);

// }

// }
// let vessel = {

//     LATITUDE: 40.07288,
    
//     LONGITUDE: 154.48535,
    
//     COURSE: 285.6,
    
//     SPEED: 14.0, IMO: 9175717,
    
//     NAME: "MARENO" }
    
//     for (let key in vessel) {
    
//     console.log('${key} -> ${vessel[key]}');
    
//     }
while (true) {

    let firstNumber = prompt("Enter first number");
    
    let secondNumber = prompt("Enter second number");
    
    let operand = prompt("Enter operand (+, -, * or /)");
    
    let result; if (firstNumber === "Q" || secondNumber === "Q" || operand === "Q") { break; } firstNumber = Number(firstNumber); secondNumber = Number(secondNumber);
    
    if (!Number.isNaN(firstNumber) && !Number.isNaN(secondNumber)) { switch (operand) {
    
    case "+":
    
    result = firstNumber + secondNumber; break;
    
    case "-":
    
    result = firstNumber - secondNumber; break;
    
    case "*":
    
    result = firstNumber * secondNumber; break;
    
    case "/": result = firstNumber / secondNumber; break;
    
    default: result = "Error: unknown operand";
    
    } }
    
    else { result = "Error: at least one of the entered values is not a number";
    
    }
    
    alert(result);
    
    }
    



