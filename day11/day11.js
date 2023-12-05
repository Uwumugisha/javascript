// // Greetings
// let hour = 10;
// if (hour >= 6 && hour < 12){
//     console.log('Good Morning');
// }
// else if (hour >= 12 && hour < 18){
//     console.log('Good afternoon');
// }
// else{
//     console.log('Good evening');
// }
// for(let i = 1; i <= 5; i++){
//     // console.log('hello world', i);
//     if(i % 2 !== 0){console.log(i);}
// }
const INSURANCE_COST = 2.99;
 let shippingCost = 9.99;
 let isOrderValid = true;
 let userAge = 22;
 let points = 400;
 let cartValue = 199;
 let hasPromoCode = false;
 let hasParentsApproval = false;
 let addInsurance = true;

 /** calculate shipping cost*/
 if ((userAge > 65) || (userAge >= 21 && (hasPromoCode || cartValue > 300 || points > 500))) 
 {
 
 shippingCost = 0;
 } else if (userAge < 21 && hasParentsApproval) {
 shippingCost = shippingCost - 5;
 } else if (userAge < 21) {
 isOrderValid = false;
 }

 /** take account of insurance */
 if (isOrderValid && addInsurance && !hasPromoCode) {
 shippingCost += INSURANCE_COST;
 }

 /** show message */
 if (isOrderValid) {
 console.log(shippingCost);
 } else {
 console.log("Cannot order if under 21");
 }
