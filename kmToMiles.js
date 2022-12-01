//mile to km

function mileToKm(miles) {
    var km = miles * 1.61;
    return km;

}

var givenMiles = 10;
var kmResult = mileToKm(givenMiles);
console.log('total km is ', kmResult);

// km to miles

function kmToMiles(kms) {
    var mile = kms * 0.62;
    return mile;
}

var givenKm = 10;
var mileResult = kmToMiles(givenKm);
console.log('miles result is ', mileResult);