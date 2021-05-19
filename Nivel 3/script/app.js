//SHOW PRODUCTS
document.getElementById('productDiv').addEventListener("submit", (event) => {

    let productsName = document.getElementById("name").value;
    let productsPrice = document.getElementById("price").value;
    let productsYear = document.getElementById("year").value;

    let products = new Product(productsName, productsPrice, productsYear);
    products.showMessage(productsName, productsPrice, productsYear);

    //Reset form
    document.getElementById("form").reset();

    //Prevent Default
    event.preventDefault();
});



//DELETE PRODUCTS
document.getElementById("showProducts").addEventListener("click", (event) => {
    let productsName = document.getElementById("name").value;
    let productsPrice = document.getElementById("price").value;
    let productsYear = document.getElementById("year").value;

    let products = new Product(productsName, productsPrice, productsYear);
    products.deleteProduct(event.target);
});



//CREATE MESSAGE TO SHOW IN DOM
function createMessage(text){
    let showMessages = document.getElementById("messages");
            let createElement = document.createElement("div");
            createElement.innerHTML = text;
            showMessages.appendChild(createElement);

            setTimeout(()=>{
                document.getElementById("messageResult").remove();
            }, 3000);
}

text = {
    addProduct: `<div class="messageCorrect" id="messageResult">Product Added Succesfully</div>`,
    deleteProduct: `<div class="messageIncorrect" id="messageResult">Product Deleted Succesfully</div>`,
    completeProduct: `<div class="messageIncorrect" id="messageResult">Complete Fields Please</div>`,
}



