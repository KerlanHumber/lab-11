// Creating the base class
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

// Create products
const products = [
    new Product("Laptop", 800, 10),
    new Product("Phone", 500, 20),
    new PerishableProduct("Milk", 2, 50, "2025-01-01"),
    new PerishableProduct("Bread", 1.5, 30, "2024-12-25"),
    new Product("Book", 10, 100),
];

// Create a store and add products
const myStore = new Store();
products.forEach(product => myStore.addProduct(product));

// Print initial inventory value
console.log("Initial Inventory Value" , myStore.getInventoryValue());

// Apply a 15% discount
Product.applyDiscount(products, 0.15);

// Print inventory value after discount
console.log("Inventory Value after 15% discount:" , myStore.getInventoryValue());

// Find and print details of a specific product 
const foundProduct = myStore.findProductByName("Milk");
if (foundProduct) {
    console.log("Found Product:", foundProduct.toString());
} else {
    console.log("Product not found.");
}

