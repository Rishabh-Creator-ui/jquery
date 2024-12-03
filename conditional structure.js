// Example of If Statement
let a = 10;
if (a > 5) {
    console.log("If Statement: a is greater than 5");
}
console.log("This runs regardless of the 'if' condition\n");

// Example of If-Else Statement
let b = 3;
if (b > 5) {
    console.log("If-Else: b is greater than 5");
} else {
    console.log("If-Else: b is not greater than 5");
}
console.log("This runs regardless of the 'if-else' condition\n");

// Example of If-Else If-Else Ladder
let c = 15;
if (c < 10) {
    console.log("If-Else If: c is less than 10");
} else if (c === 15) {
    console.log("If-Else If: c is equal to 15");
} else {
    console.log("If-Else If: c is neither less than 10 nor equal to 15");
}
console.log("This runs regardless of the 'if-else if' conditions\n");

// Example of Ternary Operator
let d = 20;
d > 15
    ? console.log("Ternary Operator: d is greater than 15")
    : console.log("Ternary Operator: d is not greater than 15");
console.log("This runs regardless of the ternary condition\n");

// Example of Switch Statement
let e = 2;
switch (e) {
    case 1:
        console.log("Switch: e is 1");
        break;
    case 2:
        console.log("Switch: e is 2");
        break;
    case 3:
        console.log("Switch: e is 3");
        break;
    default:
        console.log("Switch: e is not 1, 2, or 3");
}
console.log("This runs regardless of the switch cases\n");
