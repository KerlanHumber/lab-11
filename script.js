class ProductProperties {
    constructor(name, price, quantity){
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    getTotalValue() {
        return this.price * this.quantity;
    }

    toString(){
        return `Product: ${this.name}, Price: $${this.price.toFixed(2)}, Quantity: ${this.quantity}`;
    }
}

// Usage
const appleProduct = new ProductProperties("Apple", 2.50, 50);
console.log(appleProduct.toString());
console.log(appleProduct.getTotalValue());

// Subclass
class PerishableProductProperties extends ProductProperties {
    constructor(name, price, quantity, expriationDate) {
        super(name, price, quantity);
        this.expriationDate = expriationDate;
    }
}