var weather = 75

if (weather <= 70) {
    console.log("wear a jacket!");
} else {
    console.log("No jacket necessary!");
}

var name = "nikaya"

if(name == "Nikaya") {
    console.log("Hello! My name is " + name + "!")
} else {
    console.log("Hello! What is your name?")
}

if(name == "nikaya"){
 var name2 = name.slice(0)
 var name3 = name2.toUpperCase()
 console.log("Hello! My name is " + name2 + "!")
} else {
    console.log("Hello! What is your name?")
}

var myName = "NiKaYa"
var name = myName.toLowerCase();
if(name[0] == name[0].toUpperCase()) {
    console.log("Hello! My name is " + name);
} else {
    console.log("Hello! My name is " + name[0].toUpperCase() + name.slice(1));
}

// Else if Statements

var age = 23

if (age <= 17) {
    console.log("Sorry, you're too young to do anything.")
} else if (21 > age && age > 17) {
    console.log("Yay! You can vote!")
} else if (25 > age && age >= 21) {
    console.log("Yay! You can drink!")
} else {
    console.log("Yay! You can rent a car!")
}

var x = 3

if ( typeof x === 'string') {
    console.log('String cheese')
} else if (typeof x === 'number') {
    console.log('Numbers are cool')
} else if (typeof x === 'boolean') {
    console.log('Truthiness')
}