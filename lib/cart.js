var buttons = document.getElementsByClassName("add-to-cart-button");
var cartTotal = document.getElementById("cartItemNumber");
var products = JSON.parse(localStorage.getItem("products"));
let cartItems = 0;
let currentProducts = [];

cartItems = products.length;

cartTotal.innerText = cartItems;

for (var i = 0; i < buttons.length; i++) {
  (function (index) {
    buttons[index].onclick = function () {
      if (index === 0) {
        alert("Sweet and Pretty Bouquet added to cart!");
        cartItems++;
        currentProducts.push("Sweet and Pretty Bouquet");
        localStorage.setItem("products", JSON.stringify(currentProducts));
        console.log(currentProducts);
      } else if (index === 1) {
        alert("Light of My Life Bouquet added to cart!");
        cartItems++;
        currentProducts.push("Light of My Life Bouquet");
        localStorage.setItem("products", JSON.stringify(currentProducts));
        console.log(currentProducts);
      } else if (index === 2) {
        alert("You're Precious Bouquet added to cart!");
        cartItems++;
        localStorage.setItem("products", JSON.stringify(currentProducts));
        localStorage.setItem("products", "You're Precious Bouquet");
        console.log(currentProducts);
      } else if (index === 3) {
        alert("Just Because Bouquet added to cart!");
        cartItems++;
        currentProducts.push("Just Because Bouquet");
        localStorage.setItem("products", JSON.stringify(currentProducts));
        console.log(currentProducts);
      }
    };
  })(i);
}
