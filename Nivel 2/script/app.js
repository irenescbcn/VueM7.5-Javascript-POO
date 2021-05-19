
document.getElementById('productForm').addEventListener("submit", (event) => {

    let productsName = document.getElementById("name").value;
    let productsPrice = document.getElementById("price").value;
    let productsYear = document.getElementById("year").value;

    let products = new Product(productsName, productsPrice, productsYear);
    products.showProduct();

    //Reset form
    document.getElementById("form").reset();
    //Prevent Default
    event.preventDefault();
});



document.getElementById("showProducts").addEventListener("click", (event) => {
    let productsName = document.getElementById("name").value;
    let productsPrice = document.getElementById("price").value;
    let productsYear = document.getElementById("year").value;

    let products = new Product(productsName, productsPrice, productsYear);
    products.deleteProduct(event.target);
});




