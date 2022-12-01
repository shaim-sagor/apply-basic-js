function countingTree(distance) {
    const firstStage = 1;
    const secondStage = 2;
    const thirdStage = 3;

    if (distance <= 5) {
        let firstCount = distance * firstStage;
        return firstCount;
    }
    else if (distance <= 10) {
        const forFirst = 5 * firstStage;
        const extraFirst = distance - 5;
        const forScond = extraFirst * secondStage;
        const totalSecond = forFirst + forScond;
        return totalSecond;
    }
    else if (distance <= 15) {
        const forFirst = 5 * firstStage;
        const forScond = 5 * secondStage;
        const extraThird = distance - 10;
        const forThird = extraThird * thirdStage;
        const totalThird = forFirst + forScond + forThird;
        return totalThird;
    }

}

console.log(countingTree(14));