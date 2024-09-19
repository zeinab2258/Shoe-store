let cart = [];

function addToCart(product) {
    cart.push(product);
    alert(product + " added to cart!");
}

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function() {
        const productName = this.parentElement.querySelector('h3').innerText;
        addToCart(productName);
    });
});
