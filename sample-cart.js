
const products = [
    { name: 'tv', price: 10, quantity: 2 },
    { name: 'AC', price: 5, quantity: 2 },
    { name: 'remote', price: 7, quantity: 2 },
    { name: 'dish', price: 3, quantity: 2 },
    { name: 'oven', price: 4, quantity: 2 },
    { name: 'refri', price: 2, quantity: 2 }
]

let cartTotal = 0;
let totalPrice = 0;
for (const product of products) {
    totalPrice = totalPrice + product.price;
    productTotal = product.price * product.quantity;
    cartTotal = cartTotal + productTotal;
}
console.log(totalPrice, cartTotal);