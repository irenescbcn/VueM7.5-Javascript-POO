class Product{
    constructor (name, price, year){
        this._name = name;
        this._price = price;
        this._year = year;
    }


    showProduct(){
        let showProducts = document.getElementById("showProducts");
        let createElement = document.createElement("div");
        createElement.innerHTML = `
            <div class="showCreatedProduct">
                <strong>Product Name</strong>:  ${this._name}
                <strong>Product Price</strong>:  ${this._price}
                <strong>Product Year</strong>:  ${this._year} 
                <button class="btnDelete" id="btnDelete">Delete</button>
                
            </div>
        `;
        showProducts.appendChild(createElement);
    }


    deleteProduct(el){
        if(el.id === "btnDelete"){
            el.parentElement.parentElement.remove();

        }
    }
}