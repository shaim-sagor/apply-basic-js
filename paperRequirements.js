function paperRequirements(bookOne, bookTwo, bookThree) {
    const firstBookPage = 100;
    const secondBookPage = 200;
    const thirdBookPage = 300;

    const forFirst = bookOne * firstBookPage;
    const forSecond = bookTwo * secondBookPage;
    const forThird = bookThree * thirdBookPage;

    const forTotal = forFirst + forSecond + forThird;
    return forTotal;
}

const bookInput = paperRequirements(2, 3, 4);
console.log(bookInput);


