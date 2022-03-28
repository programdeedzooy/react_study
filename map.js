var array = [{
        subject: "Tamil",
        score: 80
    },
    {
        subject: "English",
        score: 82
    },
    {
        subject: "maths",
        score: 78
    },
    {
        subject: "science",
        score: 90
    },
    {
        subject: "computer science",
        score: 99
    }
]

let total = 0;
let newMap = array.map((value) => total += value.score)
console.log("total :" + total);
console.log(`newMap`, newMap);
let total1 = 0;
let newForeach = array.forEach((value) => total1 += value.score)
console.log("total1 : " + total1);
console.log("newForeach : " + newForeach);