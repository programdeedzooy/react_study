let givenArray = [12, 11, 13, 5, 6]
let givenArray2 = [...givenArray]
let m = 0,
    t = 0;
for (let i = 0; i < givenArray.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
        t = givenArray2[i]
        if (givenArray[j] > givenArray[i]) {
            m++;
        }
    }
    for (let j = i - 1, x = 0; x < m; j--, x++) {
        givenArray[j + 1] = givenArray[j]
    }
    if (m > 0) {
        givenArray[i - m] = t
    }
    m = 0;
}

console.log(givenArray);