let shoppingCart = [];
let products = document.getElementsByTagName('button');

function updateCart() {
    document.getElementById('productsInCart').innerHTML = shoppingCart.length;
}

function listProductsInCart() {
    let cartProducts = '';
    for(let i = 0; i < shoppingCart.length; i++) {
        cartProducts += '<li><span class="product-title">Titel: </span>' + shoppingCart[i] + '</li>';
    }

    document.getElementById('products').innerHTML = cartProducts;
}

for(let i = 0; i < products.length; i++) {
    products[i].addEventListener('click', function(event) {
        let product = event.target.parentNode.getAttribute('data-product');
        shoppingCart.push(product);
        updateCart();
        listProductsInCart();
    });
}

document.getElementById('open-cart').addEventListener('click', function() {
    document.getElementById('cart').classList.toggle('hide');
    listProductsInCart();
});