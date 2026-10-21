let num = [1, 2, 3];
let allNum = [...num, 4, 5, 6];

console.log(allNum)

function multply(...number) {
    return number.reduce((total, num) => total * num, 1);
}
console.log(multply(20, 4))