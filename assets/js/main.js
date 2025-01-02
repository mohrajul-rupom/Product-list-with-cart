let products = [
    { id: 1, name: 'Waffle', title: 'Waffle with Berries',  price: 6.5002, image: '/assets/images/image-waffle-desktop.jpg' },
    { id: 2, name: 'Crème Brûlée', title: 'Vanilla Bean Crème Brûlée', price: 7.00, image: '/assets/images/image-creme-brulee-desktop.jpg' },
    { id: 3, name: 'Macaron', title: 'Macaron Mix of Five', price: 8.000, image: '/assets/images/image-macaron-desktop.jpg' },
    { id: 4, name: 'Tiramisu', title: 'Classic Tiramisu', price: 5.505, image: '/assets/images/image-tiramisu-desktop.jpg' },
    { id: 5, name: 'Baklava', title: 'Pistachio Baklava', price: 4.00, image: '/assets/images/image-baklava-desktop.jpg' },
    { id: 6, name: 'Pie', title: 'Lemon Meringue Pie', price: 5.00, image: '/assets/images/image-meringue-desktop.jpg' },
    { id: 7, name: 'Cake', title: 'Red Velvet Cake', price: 4.50, image: '/assets/images/image-cake-desktop.jpg' },
    { id: 8, name: 'Brownie', title: 'Salted Caramel Brownie', price: 5.50, image: '/assets/images/image-brownie-desktop.jpg' },
    { id: 9, name: 'Panna Cotta', title: 'Vanilla Panna Cotta', price: 6.50, image: '/assets/images/image-panna-cotta-desktop.jpg' },
];
let images = {
    cart : '/assets/images/icon-add-to-cart.svg',
    remove : '/assets/images/icon-remove-item.svg',
}
function render_products(){
    let product_list = $('#pdl_product_list');
    products.forEach(product => {
        let product_div = $(
            `<div class="pdl_product">
                <div class="pdl_product_image_with_addcart">
                    <img src="${product.image}" alt="${product.name}">
                    <div class="pdl_product_controls">
                        <button class="pdl_add_to_cart" data_id="${product.id}"><span><img src="${images.cart}" alt=""></span><span>Add to Cart</span></button>
                        <div class="pdl_quantity_controls" style="display: none;">
                            <button class="pdl_decrease" data_id="${product.id}">-</button>
                            <span class="pdl_quantity">0</span>
                            <button class="pdl_increase" data_id="${product.id}">+</button>
                        </div>
                    </div>
                </div>
                <div class="pdl_product_name">${product.name}</div>
                <div class="pdl_product_title">${product.title}</div>
                <div class="pdl_product_price">$${product.price.toFixed(2)}</div>
            </div>`
        );
        product_list.append(product_div);
    });
}
$(document).ready(function(){
    render_products();
});