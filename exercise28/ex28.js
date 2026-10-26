
function fetchUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const seccess = true;
            if (seccess) {
                resolve({ id: "c12", name: "Ahmed Barise" })
            } else {
                reject("feiled fetch to User data")
            }
        }, 2000)
    })
};


async function displayData() {
    try {
        const user = await fetchUserData();
        console.log(user)
    } catch (err) {
        console.log(err)
    }
}

displayData();