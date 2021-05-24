class Product{

    constructor (name, price, year){
        this._name = name;
        this._price = price;
        this._year = year;
    }



    //GETTERS
    get getName(){
        return this._name;
    }

    
    //METHODS
    showProduct(){
        let showProducts = document.getElementById("showProducts");
        let createElement = document.createElement("div");
        createElement.innerHTML = `
            <div class="showCreatedProduct" id="${this._name}">
                <span><strong>Product Name</strong>: <span id="${this._name}">${this._name}</span></span>
                <span><strong>Product Price</strong>:  ${this._price}</span>
                <span><strong>Product Year</strong>:  ${this._year} </span>
                <span><button class="btnDelete" id="btnDelete">Delete</button></span>
            </div>
        `;
        showProducts.appendChild(createElement);
        
    }
    
    deleteProduct(el){
        if(el.id === "btnDelete"){
            el.parentElement.parentElement.remove();
            createMessage(text.deleteProduct);
        }
    }

    showMessage(name, price, year){
        if(name !== "" && price !=="" && year !== ""){
            createMessage(text.addProduct);
            this.showProduct();
        }else createMessage(text.completeProduct);
    }
}






