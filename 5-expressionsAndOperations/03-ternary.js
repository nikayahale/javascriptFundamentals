// Ternaries (will not let go on without a default)

var x = 6;


if (x > 0) {
    console.log('hello');
} else if (x < 0) {
    console.log('hi');
} else {
    console.log('goodbye')
}

var yay = (x == 0) ? 'hello' : (x < 0) ? 'hi' : 'goodbye';
console.log(yay)

var age = 23
var ternary = (age >= 25) ? "Yay! You can rent a car!" : (age >= 21) ? "Yay! you can drink!" : (age >= 18) ? "Yay! You can vote!" : "Sorry! You're too young to do anything."
console.log(ternary)

var x = 3
var ter2 = (typeof x === 'string') ? 'String Cheese' : (typeof x === 'number') ? 'Numbers are cool' : (typeof x === 'boolean') ? 'Truthiness' : 'not one of these'
console.log(ter2)