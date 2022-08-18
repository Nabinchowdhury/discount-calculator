// function getDiscountingElement(id) {

// const productPrice = document.getElementById(id);
// const discountingElementString = productPrice.value;
// const discountingElement = parseFloat(discountingElementString);

//     return discountingElement;
// }

function operation(id, percentage) {
    const mainPrice = document.getElementById(id);

    const discountingElementString = mainPrice.innerText;
    const discountingElementPrice = parseFloat(discountingElementString);

    const discountPercentage = percentage / 100;
    const discountingPrice = discountingElementPrice * discountPercentage;
    const discountedPrice = discountingElementPrice - discountingPrice;

    // console.log(typeof discountedPrice)
    return discountedPrice;
}



function setPrice(id, value) {
    const getElementPrice = document.getElementById(id);
    getElementPrice.innerText = value;
    // console.log(getElementPrice.innerText)
    // return getElementPrice.innerText;

    // console.log(typeof getElementPrice.innerText)

}


