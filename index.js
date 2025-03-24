const productAmount = (productElement) => {
  const amount = parseInt(productElement.dataset.cartProductAmount);
  const quantity = productElement.querySelector(
    "[data-cart-product-quantity]"
  ).value;

  return amount * quantity;
};

document.addEventListener("DOMContentLoaded", () => {
  const subototalElement = document.querySelector("[data-cart-subtotal]");
  const shippingElement = document.querySelector("[data-cart-shipping]");
  const taxElement = document.querySelector("[data-cart-tax]");
  const totalElement = document.querySelector("[data-cart-total]");

  const productElements = document.querySelectorAll("[data-cart-product]");

  productElements.forEach((productElement) => {
    const quantity = productElement.querySelector(
      "[data-cart-product-quantity]"
    );

    quantity.addEventListener("change", () => {
      productElement.querySelector("[data-cart-product-price]").innerHTML =
        productAmount(productElement);

      const products = Array.from(
        document.querySelectorAll("[data-cart-product]")
      );
      const subtotal = products.reduce((accumulator, product) => {
        return accumulator + productAmount(product);
      }, 0);

      subototalElement.innerHTML = subtotal;
    });
  });
});

// document.addEventListener("DOMContentLoaded", () => {
//   // convert to using data attributes
//   // Example: data-cart-subtotal, data-cart-shipping, data-cart-tax, ...
//   const subtotalEl = document.getElementById("subtotal_element");
//   const shippingEl = document.getElementById("shipping");
//   const taxEl = document.getElementById("tax");
//   const totalEl = document.getElementById("total");

//   const productElements = document.querySelectorAll("[data-cart-product]");
//   productElements.forEach((productElement) => {
//     // amount = productElement.dataset.amount // parseInt
//     quantity = productElement.querySelector("[data-cart-product-quantity]")

//     quantity.addEventListener("change", () => {
//       // update product price
//       // update subtotal - use `productElements`

//       // this is logic for subtotal
//       productElements.sum((product) => {
//         amount = product.querySelector("[data-card-product-amount") // parseInt
//         quantity = product.querySelector("[data-cart-product-quantity]") // value
//         return amount * quantity
//       })
//       // update total
//     })

//   })

//   // cijene
//   const item1 = document.getElementById("item_1");
//   const item2 = document.getElementById("item_2");

//   const value1 = 250;
//   const value2 = 150;

//   item1.innerHTML = `$ ${value1}`;
//   item2.innerHTML = `$ ${value2}`;

//   // remove this
//   // shippingEl.innerHTML = 5;
//   // taxEl.innerHTML = 8;

//   // quantity1
//   // quantity2
//   const quantitySelect = document.getElementById("quantity-0");
//   const quantitySelect2 = document.getElementById("quantity-1");

//   const updatePrice = () => {
//     const quantity = parseInt(quantitySelect.value);
//     const totalPrice = quantity * value1;
//     item1.textContent = `$ ${totalPrice}`;

//     const quantity2 = parseInt(quantitySelect2.value);
//     const totalPrice2 = quantity2 * value2;
//     item2.textContent = `$ ${totalPrice2}`;
//     // update dom with subtotal
//     subtotalEl.innerHTML = `$ ${totalPrice + totalPrice2}`;
//     // update dom with shipping
//     tax = parseInt(taxEl.dataset.taxAmount);
//     shipping = parseInt(shippingEl.dataset.shippingAmount);
//     totalEl.innerHTML = `$ ${totalPrice + totalPrice2 + tax + shipping}`;
//   };

//   updatePrice();

//   // calcuate subtotal
//   quantitySelect.addEventListener("change", updatePrice);
//   quantitySelect2.addEventListener("change", updatePrice);
// });

// // removal of subotal summary

// const orderSummaryEl = document.querySelector("[data-order-summary]");
// const removeOrderSummaryEl = document.querySelector(
//   "[data-remove-order-summary]"
// );

// function toggleVisibility() {
//   if (orderSummaryEl.style.display === "none") {
//     orderSummaryEl.style.display = "block"; // Show the element
//   } else {
//     orderSummaryEl.style.display = "none"; // Hide the element
//   }
// }
// removeOrderSummaryEl.addEventListener("click", toggleVisibility);

// // staviti tooggle u domcontentload
