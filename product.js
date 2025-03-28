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

export default Product;
