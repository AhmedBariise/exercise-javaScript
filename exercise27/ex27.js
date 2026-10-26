function fetchUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const seccess = true;
            if (seccess) {
                resolve({ id: "c12", name: "Ahmed Barise" });
            } else {
                reject(" Feiled fetch to User Data")
            }
        }, 2000)
    })
}


fetchUserData()
    .then((data) => console.log("User data", data))
    .catch((err) => console.log(err));

