let arrayProducts = [];


//SHOW PRODUCTS
document.getElementById('productDiv').addEventListener("submit", (event) => {

    let productsName = document.getElementById("name").value.toLowerCase();
    let productsPrice = document.getElementById("price").value;
    let productsYear = document.getElementById("year").value;

    let checkProduct= findProduct(productsName);

    if (checkProduct == -1){
        if(productsName !== "" && productsPrice !=="" && productsYear !== ""){
            let products = new Product(productsName, productsPrice, productsYear);
            arrayProducts.push(products);
            products.showMessage(productsName, productsPrice, productsYear);
            console.log(arrayProducts);
        }else createMessage(text.completeProduct);
    }else createMessage(text.existingProduct);
    

    //Reset form
    document.getElementById("form").reset();

    //Prevent Default
    event.preventDefault();

});



//DELETE PRODUCTS
document.getElementById("showProducts").addEventListener("click", (event) => {
    let productsName = event.target.parentElement.parentElement.children[0].children[1].id;
    // let productsPrice = document.getElementById("price").value;
    // let productsYear = document.getElementById("year").value;

    for (const [index, product] of arrayProducts.entries()) {
        if(product._name == productsName){
            arrayProducts.splice(index, 1);
            console.log(arrayProducts);
            product.deleteProduct(event.target);
        }
    }

    // let products = new Product(productsName, productsPrice, productsYear);
    // let checkProduct= findProduct(productsName);
    // products.deleteProduct(event.target, arrayProducts, checkProduct);
    // console.log(arrayProducts);
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
    existingProduct: `<div class="messageIncorrect" id="messageResult">This product already exists</div>`
}


//FIND THE PRODUCT
function findProduct(name){
    let index = -1;
    
    for (let i = 0; i< arrayProducts.length; i++){
        if (name == arrayProducts[i].getName){
            index = i;
            break;
        }
    }

    return index;
}



