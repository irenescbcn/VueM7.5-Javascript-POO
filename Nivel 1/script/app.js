import {Product} from "./modules/productClass";




let productForm = document.getElementById('productForm');
productForm.addEventListener("submit", (event) => {
    event.preventDefault();
    createProduct();
});


//TO CREATE PRODUCT
function createProduct(){
    let productsName = document.getElementById("name").value;
    let productsPrice = document.getElementById("price").value;
    let productsYear = document.getElementById("year").value;

    const products = new Product(productsName, productsPrice, productsYear);
    products.showProduct();
}





