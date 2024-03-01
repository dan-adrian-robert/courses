const BASE_URL = 'https://fakestoreapi.com';

document.addEventListener('DOMContentLoaded', async () => {
    const productId = localStorage.getItem('productId')

    const url = `${BASE_URL}/products/${productId}`;

    const productData = await fetch(url).then(res => res.json())

    
    const {title, category, description, price, image} = productData;

    document.getElementById('product-title').innerText = title;
    document.getElementById('product-categ').innerText = category;
    document.getElementById('product-description').innerText = description;
    document.getElementById('product-price').innerText = price;

    document.getElementById('img-container').innerHTML = `<img src=${image} alt="Product Image">`
});
