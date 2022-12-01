const phones = [
    { name: 'samsung A15', price: 10, camera: 4, memory: 10 },
    { name: 'samsung A25', price: 30, camera: 1, memory: 10 },
    { name: 'redmi  M5', price: 20, camera: 2, memory: 10 },
    { name: 'oopo  A2', price: 3, camera: 4, memory: 10 },
    { name: 'samsung A1', price: 12, camera: 4, memory: 10 },
    { name: 'samsung 5', price: 32, camera: 4, memory: 10 }
];

let cheapest = phones[0];

for (const phone of phones) {
    if (phone.price < cheapest.price) {
        cheapest = phone;
    }
}

console.log(cheapest);