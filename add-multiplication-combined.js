/ per table = 10cft; chair = 5cft; bed = 30cft;/

function addMultiple(chair, table, bed) {
    const perChair = 3;
    const perTable = 10;
    const perBed = 30;

    const totalTable = table * perTable;
    const totalChair = perChair * chair;
    const toatalBed = perBed * bed;


    const totalAmount = toatalBed + totalChair + totalTable;
    return totalAmount;


}

const input = addMultiple(2, 2, 2);
console.log(input);