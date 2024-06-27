const x : number= 12;
console.log(x);
function sum(a: number, b: number) {
    return a + b;
}
console.log(sum(3, 4));

function isLegal(age: number) {
    if (age > 18) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isLegal(19));