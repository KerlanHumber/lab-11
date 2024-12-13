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
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    getTotalValue() {
        return this.price * this.quantity;
    }

    toString() {
        return `Product: ${this.name}, Price: $${this.price.toFixed(2)}, Quantity: ${this.quantity}`;
    }

    static applyDiscount(products, discount) {
        for (const product of products) {
            product.price *= (1 - discount);
        }
    }
}

class PerishableProduct extends Product {
    constructor(name, price, quantity, expirationDate) {
        super(name, price, quantity);
        this.expirationDate = expirationDate;
    }

    toString() {
        return `${super.toString()}, Expiration Date: ${this.expirationDate}`;
    }
}

// Create product instances
const products = [
    new Product("Apple", 2.50, 50),
    new PerishableProduct("Milk", 1.50, 10, "2024-12-31"),
    new PerishableProduct("Yogurt", 2.00, 15, "2024-12-25")
];

// Apply a 10% discount
Product.applyDiscount(products, 0.1);

// Print the updated product information
for (const product of products) {
    console.log(product.toString());
}

class Store {
    constructor() {
        this.inventory = [];
    }

    addProduct(product) {
        this.inventory.push(product);
    }

    getInventoryValue() {
        return this.inventory.reduce((total, product) => total + product.getTotalValue(), 0);
    }

    findProductByName(name){
        return this.inventory.find(product => product.name === name);
    }
}

// Create a store instance
const myStore = new Store();

// Add products to the inventory
myStore.addProduct(new Product("Apple", 2.50, 50));
myStore.addProduct(new PerishableProduct("Milk", 1.50, 10, "2024-12-31"));
myStore.addProduct(new PerishableProduct("Yogurt", 2.00, 15, "2024-12-25"));
