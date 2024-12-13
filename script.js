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

    toString(){
        return `${super.toString()}, Expiration Date: ${this.expriationDate}`;
    }
}

// Creating two instances
const milkProduct = new PerishableProductProperties("Milk", 1.50, 10, "2024-12-31");
const yogurtProduct = new PerishableProductProperties("Yogurt", 2.00, 15, "2024-12-25");

console.log(milkProduct.toString());
console.log(yogurtProduct.toString());

class Product {
    constrictor(name, price, quantity){
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    getTotalValue(){
        return this.price * this.quantity;
    }

    toString(){
        return `Products:${this.name}, Price: $${this.price.toFixed(2)}, Quantity: ${this.quantity}`;
    }

    static applyDiscount(products, discount){
        for (const product of products){
            product.price *= (1 - discount);
        }
    }
}

class PerishableProduct extends Product {
    constrictorconstructor(name, price, quantity, expriationDate) {
        super(name, price, quantity);
        this.expriationDate = expriationDate;
    }
    toString(){
        return `${super.toString()}, Expiration Date: ${this.expriationDate}`;
    }
}

// Product instances
const products = [
    new Product("Apple", 2.50, 50),
    new PerishableProduct("Milk", 1.50, 10, "2024-12-31"),
    new PerishableProduct("Yogurt", 2.00, 15, "2024-12-25")
];