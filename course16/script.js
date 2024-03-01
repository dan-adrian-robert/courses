/**
 * API Documentation: https://fakestoreapi.com/docs
 * baseUrl: https://fakestoreapi.com
 * endpoints: 
 *  /products
 *  /products/{id}
 *  /products/categories
 *  /products/category/{category}
 */

const BASE_URL = 'https://fakestoreapi.com';

const categoryCssClasses = {
    "electronics": "text-bg-info",
    "jewelery": "text-bg-warning",
    "men's clothing": "text-bg-primary",
    "women's clothing": "text-bg-danger"
}

/**
 * product card html:
 * <article class='col-2-md m-2 card cursor-pointer'>
        <img src="${product.image}" alt="Product Image">
        <div class="card-content">
            <div class="title">${product.title}</div>
            <div class="price">$${product.price}</div>
            <span class="badge rounded-pill ${categoryCssClasses[product.category]}">${product.category}</span>
            <div class="description">${product.description}</div>
        </div>`
    </article>
 * 
 */

function addProductToContainer(product, container) {
    const item = document.createElement('article');

    item.addEventListener('click', () => {
        // deschidem pagina product
        window.location.href = './product_page.html'
        // pasam informatiile in pagina product
        localStorage.setItem('productId', product.id)
    })

    item.classList.add("col-2-md", "m-2", "card", "cursor-pointer");
    item.innerHTML = `
        <img src="${product.image}" alt="Product Image">
        <div class="card-content">
            <div class="title">${product.title}</div>
            <div class="price">$${product.price}</div>
            <span class="badge rounded-pill ${categoryCssClasses[product.category]}">${product.category}</span>
            <div class="description">${product.description}</div>
        </div>
    `;

    container.appendChild(item);
}

//promise se rezolva ok = se apleaza methoda din then
//promise da eroare = se apeleaza metoda din catch

document.addEventListener('DOMContentLoaded', async () => {
    const productList = await fetch('').then(response => response.json())

    const productContainer = document.getElementById('products-container');

    for (let i = 0; i < productList.length; i ++) {
        addProductToContainer(productList[i], productContainer);
    }

    console.log(productContainer);
    console.log('test')
                        
});
