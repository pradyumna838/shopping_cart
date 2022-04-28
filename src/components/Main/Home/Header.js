import React, { useEffect, useState } from "react";
import logo_sabka from "../../../assets/img/logo_sabka.png";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import ProductDetails from "../../../server/products/index.get";
import { useCart } from "react-use-cart";

const NavBar = () => {
  const [items, setItems] = useState(ProductDetails);
  const cartContainer = document.querySelector(".cart-container");

  const {
    isEmpty,
    totalItems,
    totalUniqueItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  function eventListeners() {
    // show/hide cart container
    document.getElementById("cart-btn").addEventListener("click", () => {
      cartContainer.classList.toggle("show-cart-container");
    });
  }

  return (
    <div>
      <header>
        <div class="container">
          <nav class="navbar">
            <a href="index.html" class="navbar-brand">
              <img src={logo_sabka} alt="logo" class="img-fluid" />
            </a>
            {/* <span>home</span>
            <span>producy</span> */}
<Link to="/cart">
            <div class="cart">
              <button type="button" id="cart-btn">
                <i class="fas fa-shopping-cart"></i>
                <span id="cart-count-info">{totalUniqueItems}</span>
              </button>

              
              <div class="cart-container ">
                <div class="cart-total dropdown">
                  <h3>Total: {totalItems}</h3>
                  <span id="cart-total-value"></span>
                </div>
              </div>
            </div>
              </Link>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default NavBar;
