import Product from "product";

class Cart {
  constructor() {
    this.subtotalElement = document.querySelector("[data-cart-subtotal]");
    this.products = Array.from(
      document.querySelectorAll("[data-cart-product]")
    ).map((element) => {
      const product = new Product(element, this);
      product.init();
      return product;
    });
    this.orderSummaryEl = document.querySelector("[data-order-summary]");
    this.removeOrderSummaryEl = document.querySelector(
      "[data-remove-order-summary]"
    );

    // izbacit ovaj poziv u init() metodu
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

export default Cart;
