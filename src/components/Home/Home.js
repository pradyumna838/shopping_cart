import React from "react";
import Carousel from "nuka-carousel";
import Header from "../Main/Home/Header";
import offer1 from "../../static/images/offers/offer1.jpg";
import offer2 from "../../static/images/offers/offer2.jpg";
import offer3 from "../../static/images/offers/offer3.jpg";
import offer4 from "../../static/images/offers/offer4.jpg";
import offer5 from "../../static/images/offers/offer5.jpg";
import fruits from "../../static/images/category/fruits.png";
import bakery from "../../static/images/category/bakery.png";
import beverages from "../../static/images/category/beverages.png";
import beauty from "../../static/images/category/beauty.png";
import baby from "../../static/images/category/baby.png";
import Footer from "../Main/Home/Footer";

const LandingHome = () => {
  return (
    <div>
      <Header />
      <Carousel style={{ marginTop: 20 }}>
        <img src={offer1} alt="offers1" className="img-fluid" />
        <img src={offer2} alt="offers1" className="img-fluid" />
        <img src={offer3} alt="offers1" className="img-fluid" />
        <img src={offer4} alt="offers1" className="img-fluid" />
        <img src={offer5} alt="offers1" className="img-fluid" />
      </Carousel>

      <div class="row">
        <div class="col home-float">
          <img
            src={fruits}
            alt="fruits"
            class="float-left img-fluid"
            style={{ width: 400, height: 300 }}
          />
        </div>
        <div class="col text-right alignment">
          Fruits and Vegetables
          <br />
          <br /> A variety of fresh fruits and vegetables.
          <br /> <br />
          <button className="btn btn-pink">Explore fruit-and-veg</button>
        </div>
      </div>

      <div class="row">
        <div class="col text-right alignment">
          Bakery Cakes and Dairy
          <br />
          <br /> Buy beauty and personal care products online in India at best
          prices.
          <br /> <br />
          <button className="btn btn-pink">Explore bakery-cakes-dairy</button>
        </div>
        <div class="col home-float">
          <img
            src={bakery}
            alt="bakery"
            class="float-left img-fluid"
            style={{ width: 400, height: 300 }}
          />
        </div>
      </div>

      <div class="row">
        <div class="col home-float">
          <img
            src={beverages}
            alt="Beverages"
            class="float-left img-fluid"
            style={{ width: 400, height: 300 }}
          />
        </div>
        <div class="col text-right alignment">
          Beverages
          <br />
          <br />
          Our beverage department will ensure your fridge is always fully
          stocked. Shop for soda, juice, beer and more.
          <br /> <br />
          <button className="btn btn-pink">Explore beverages</button>
        </div>
      </div>

      <div class="row">
        <div class="col text-right alignment">
          Beauty and Hygiene
          <br />
          <br />
          Buy beauty and personal care products online in India at best prices.
          <br /> <br />
          <button className="btn btn-pink">Explore beauty-hygiene</button>
        </div>
        <div class="col home-float">
          <img
            src={beauty}
            alt="Pineapple"
            class="float-left img-fluid"
            style={{ width: 400, height: 300 }}
          />
        </div>
      </div>

      <div class="row">
        <div class="col home-float">
          <img
            src={baby}
            alt="baby"
            class="float-left img-fluid "
            style={{ width: 400, height: 300 }}
          />
        </div>
        <div class="col text-right alignment">
          Baby Care
          <br />
          <br />
          Shop online for Baby Products, Diapers, Skin Care Products,etc.
          <br /> <br />
          <button className="btn btn-pink">Explore baby</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LandingHome;
