
/*
FUNCIONES
*/
function calculateDiscounterPrice(price, discountPercentage){
    const discount = (price * discountPercentage) / 100;
    const priceWithDiscount = price - discount;

    return priceWithDiscount;
}

const originalPrice = 100;
const discountPercentage = 20;
const finalPrice = calculateDiscounterPrice(originalPrice, discountPercentage);

console.log(finalPrice);