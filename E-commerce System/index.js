class Product {
  constructor(name, price, sku, quantity) {
    this.name = name;
    this.price = price;
    this.sku = sku;
    this.quantity = quantity;
  }
  reduceQuantity(amount) {}
  increaseQuantity(amount) {}
  toString() {}
}

class Customer {
  constructor(name, customerId) {
    this.name = name;
    this.customerId = customerId;
    this.orders = [];
  }
  placeOrder(order) {}
  getOrderHistory() {}
  toString() {}
}

class Order {
  constructor(orderId, customer, products) {
    this.orderId = orderId;
    this.customer = customer;
    this.products = products;
    this.total = 0;
    this.date = null;
  }
  calculateTotal() {}
  toString() {}
}

class ECommerceSystem {
  constructor() {
    this.products = [];
    this.customers - [];
  }
  addProduct(product) {}
  addCustomer(customer) {}
  placeOrder(customerId, productSkus) {}
  toString() {}
}