function fetchUserDataAsyn() {
    alert("give a data")
    return { name: "ahmed", age: "19", id: "135016" }

}
console.log(" fetching data user")
const user = fetchUserDataAsyn();
console.log(" this data is good", user)

console.log(" starting fetch than result  you can see")

console.log("---------------")


function getDataUser(callback) {

    setTimeout(() => {
        const user = { id: "135026", name: "asad" }
        callback(user);
    }, 2000)
}
console.log("this date is short")
getDataUser(function (user) {
    console.log(user)
});

console.log(" by bye")