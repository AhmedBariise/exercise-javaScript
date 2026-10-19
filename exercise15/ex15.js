const students = [
    {
        name: "ahmed",
        id: "CA12",

        city: "mogadisho"
    },
    {
        name: "xasan",
        id: "CA13",
        city: "hargeysa"
    },
    {
        name: "mc hamuada",
        id: "CA11",
        city: "malaysia"
    }
];

console.log("Properties and values of each student:");

for (const student of students) {
    for (const key in student) {
        console.log(key + ": " + student[key]);
    }

    console.log("-------------");
}