async function fetchUser() {
    try {

        console.log("starting fetch user")

        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        if (!response.ok) {
            throw new Error(`feiled data user, ${response.status}`)
        }
        const data = await response.json();
        console.log(data);

    } catch (error) {
        console.log("fetch user feiled")
    }

}

fetchUser();