// if else statement with basic concepts
console.log("------if else ------");
var person1 = "sami";
if (person1 === "sami") {
    console.log("He is a good man");
}
else {
    console.log("He is not a good man");
}
// ternery operator
console.log("----ternery operator");
var personName = "pre-medical";
personName === "pre-medical" ? console.log("physics", "Biology", "chemsitry") : console.log("Math", "computer scince");
// bassically this is not a right way .we can use a if & else statemet instead of this
// switch case
var device = " fans";
switch (device) {
    case "fans":
        console.log("turn on fan button");
        break;
    case "tv":
        console.log("Tv is turn on ");
        break;
    case "Tube Light":
        console.log("= tube light is turn on ");
    default:
        console.log("plz select right input ");
}
console.log("-----------");
// Switch case implementing in days
var days = "monday";
switch (days) {
    case "monday":
        console.log("true Answer");
        break;
    case "tuesday":
        console.log("wrong Answer");
        break;
    case "wednesday":
        console.log("wrong Answer");
        break;
    case "thursay":
        console.log("wrong Answer");
        break;
    case "friday":
        console.log("wrong Answer");
        break;
    case "saturday":
        console.log("wrong Answer");
        break;
    case "sunday":
        console.log("wrong Answer");
        break;
    default:
        console.log("plz select one of this option");
        break;
}
