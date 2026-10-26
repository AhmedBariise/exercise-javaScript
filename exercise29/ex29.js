async function fetchData() {

    console.log("this is exercise 29")

    const response = await fetch("ex29.json");
    const data = await response.json();

    console.log("response ", data);

};

fetchData();