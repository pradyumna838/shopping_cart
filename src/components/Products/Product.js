import React, { useState } from "react";
import Header from "../Main/Home/Header";
import Footer from "../Main/Home/Footer";
import { Link } from "react-router-dom";
import {
  Card,
  CardGroup,
  CardImg,
  CardBody,
  CardTitle,
  CardFooter,
  CardText,
  Button,
} from "react-bootstrap";
import kiwi_green from "../../static/images/products/fruit-n-veg/kiwi_green.jpg";
import apple from "../../static/images/products/fruit-n-veg/apple.jpg";
import pomegrante from "../../static/images/products/fruit-n-veg/pomegrante.jpg";
import capsicum_green from "../../static/images/products/fruit-n-veg/capsicum_green.jpg";
import ProductDetails from "../../server/products/index.get";
import { useCart } from "react-use-cart";
import Cart from "../Cart/Cart";

const Product = (props) => {
  const [items, setItems] = useState(ProductDetails);
  const {addItem} = useCart(); 
 

  
  
  return (
    <div>
      <Header />
      <div class="sidenav">
        <a href="">Fruits & Vegetables</a>
        <hr />
        <a href="">Bakery Cakes and Dairy</a>
        <hr />
        <a href="">Beverages</a>
        <hr />
        <a href="">Beauty and Hygiene</a>
        <hr />
        <a href="">Baby Care</a>
        <hr />
      </div>
      <div class="wrapper">
        {items.map((data, index) => {
          return (
            <div class="wrapper" key={index}>
              <div className="card">
                <div className="card__body">
                  <h2 className="card__title">{data.name}</h2>
                  <img src={data.imageURL} className="card__img" />
                  <p className="card-footer">{data.description}</p>
                  <h3 className="card-footer">
                    MRP Rs. {data.price}
                    <button
                      className="btn btn-pink buy-now"
                      onClick={() => addItem(data)}
                    >
                      Buy Now
                    </button>
                  </h3>
                </div>
              </div>
            </div>
          );
        })}

      </div>
<Cart/>
      <Footer />
    </div>
  );
};

export default Product;
