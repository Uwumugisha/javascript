// functions
// function testFunction(){
//     console.log('hello');
//     console.log('world');
// }
// var inside function its scope will be limited only to the inside of that function(it's local scope) that mean the local variable outside the function will fail like example below
var globalGreeting = 'good';
function testFunction(){
    var localGreeting = 'morning';
    console.log('function:');
    console.log(globalGreeting);
    console.log(localGreeting);
}
testFunction();
console.log('main program');
console.log(globalGreeting);
console.log(localGreeting);
