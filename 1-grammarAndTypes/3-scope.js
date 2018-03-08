// Scope

//Global Scope
//Local Scope
const weather = 'bad';
function football() {
    // local scope
    var x = 7;
    console.log(x);
}

//global scope
football();
var x = 10;
console.log(x);

var count = 4;
if (true) {
    var more = 1;
}
console.log(count + more)

let count = 4
if (true) {
    let more = 1;
}
console.log(count + more) //doesn't work