
function oparate(a, b, callback) {
    return callback(a, b);
};

function add(a, b) {
    return a + b;
};

function subs(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function devision(a, b) {
    return a / b;
};

console.log("addition:", oparate(7, 8, add));
console.log("substraction:", oparate(6, 3, subs));
console.log("multiply:", oparate(5, 6, multiply));
console.log("devision:", oparate(4, 2, devision));
