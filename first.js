"use strict";
const x = 12;
console.log(x);
function sum(a, b) {
    return a + b;
}
console.log(sum(3, 4));
function isLegal(age) {
    if (age > 18) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isLegal(19));
