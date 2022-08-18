document.getElementById("promo-code").addEventListener('keyup', function (event) {

    const code = event.target.value;
    // console.log(code);


    if (code === "DOM") {
        document.getElementById("discount-btn").removeAttribute("disabled")

    }
    else { document.getElementById("discount-btn").setAttribute("disabled", true) }

})



document.getElementById("discount-btn").addEventListener('click', function () {

    document.getElementById("promo-code").value = "";
    const afterDiscountPrice = operation("product-price", 30);
    // console.log(typeof afterDiscountPrice);
    // set
    setPrice("product-price", afterDiscountPrice)
    // console.log(typeof afterDiscountPrice)
})