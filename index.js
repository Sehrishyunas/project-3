document.addEventListener("DOMContentLoaded", () => {
    const cartCountElement = document.getElementById('cart-count');
    let cartCount = 0;

    const updateCartCount = () => {
        cartCountElement.textContent = cartCount;
    };

    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            cartCount += 1;
            updateCartCount();
            alert('Item added to cart!');
        });
    });

    document.querySelector('.shop-now').addEventListener('click', () => {
        alert('This feature is not yet implemented.');
    });
});
