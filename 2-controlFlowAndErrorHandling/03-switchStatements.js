// Swithc Statements

var friend = "Taylor"

switch (friend) {
    case "Fred":
    console.log("Hey Fred, let's go golfing.");
    break;
    case "Karl":
    console.log("Lets hang.");
    break;
    case "John":
    console.log("Sorry, I'm busy right now");
    break;
    default:
    console.log("Hey" + friend + "can I call you back in a minute?")
}

var dessert = "ice cream"

switch (dessert) {
    case "pie":
    console.log('Pie, pie, me oh my!');
    break;
    case "cake":
    console.log('Cake is great!');
    break;
    case "ice cream":
    console.log('I scream for ice cream!');
    break;
    default:
    console.log('Not on the menu.')
}

var x = 5
switch (typeof x) {
    case 'string':
    console.log('String cheese');
    break;
    case 'number':
    console.log('Numbers are cool')
    break;
    case 'boolean':
    console.log('Truthiness')
    break;
    default:
    console.log('Everything else')
}