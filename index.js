class Cart {
  constructor() {
    this.subtotalElement = document.querySelector("[data-cart-subtotal]");
    this.products = Array.from(
      document.querySelectorAll("[data-cart-product]")
    ).map((element) => new Product(element, this));
    this.orderSummaryEl = document.querySelector("[data-order-summary]");
    this.removeOrderSummaryEl = document.querySelector(
      "[data-remove-order-summary]"
    );
    this.toggleVisibility();
    this.totalElement = document.querySelector("[data-cart-total]");
    this.shippingElement = document.querySelector("[data-cart-shipping]");
    this.taxElement = document.querySelector("[data-cart-tax]");
  }

  productUpdated() {
    // update subtotal
    this.subtotalElement.innerHTML = `$ ${this.subtotal}`;
    this.totalElement.innerHTML = `$ ${
      this.subtotal +
      parseInt(this.taxElement.dataset.cartTaxAmount) +
      parseInt(this.shippingElement.dataset.cartShippingAmount)
    }`;
  }

  get subtotal() {
    return this.products.reduce((accumulator, product) => {
      return accumulator + product.price;
    }, 0);
  }

  toggleVisibility() {
    this.removeOrderSummaryEl.addEventListener("click", () => {
      if (this.orderSummaryEl.style.display === "none") {
        this.orderSummaryEl.style.display = "block"; // Show the element
      } else {
        this.orderSummaryEl.style.display = "none"; // Hide the element
      }
    });
  }
}

class Product {
  constructor(element, cart) {
    this.element = element;
    this.cart = cart;
    this.amount = parseInt(element.dataset.cartProductAmount);
    this.quantityElement = element.querySelector(
      "[data-cart-product-quantity]"
    );
    this.quantity = parseInt(this.quantityElement.value);
    this.priceElement = element.querySelector("[data-cart-product-price]");
    this.init();
  }

  init() {
    this.quantityElement.addEventListener("change", () => {
      this.quantity = parseInt(this.quantityElement.value);
      this.updatePrice();
      this.cart.productUpdated(this);
    });
  }

  get price() {
    return this.amount * this.quantity;
  }

  updatePrice() {
    this.priceElement.innerHTML = `$ ${this.price}`;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const cart = new Cart();
});
