export class Product{
    constructor (name, price, year){
        this._name = name;
        this._price = price;
        this._year = year;
    }


    showProduct(){
        console.log(`Product Name: ${this._name} Product Price: ${this._price} Product Year: ${this._year}`);
    }

}