let givenArray = [12, 11, 13, 5, 6];
let t = 0,
    small = 0;
smallIndex = 0;
for (let i = 0; i < givenArray.length; i++) {
    small = givenArray[i]
    for (let j = i; j < givenArray.length; j++) {

        if (small > givenArray[j]) {
            small = givenArray[j];
            smallIndex = j;
        }
        console.log(`small`, small);
    }
    console.log();
    t = givenArray[smallIndex]
    givenArray[smallIndex] = givenArray[i]
    givenArray[i] = t
}

console.log(givenArray);