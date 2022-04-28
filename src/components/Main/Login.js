import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import logo_sabka from '../../../src/assets/img/logo_sabka.png';

export default function Login(props) {
  
  const [userName, setUserName] = useState('admin1');
  const [password, setPassword] = useState('user123');


  // const handleLogin = (e) => {
  //   axios({
  //     method: "post",
  //     url: `https://executivetracking.cloudjiffy.net/SRPUSchoolWeb/login/v1/userLogin`,
  //     data: {
  //       password,
  //       userName,
  //     },
  //     headers: {
  //       "Content-type": "application/json",
  //     },
  //   })
  //     .then((response) => {
  //       if (response.data.accessToken) {
  //         sessionStorage.setItem("user", JSON.stringify(response.data));
  //         authUser();
  //       } else {
  //         alert(response.data.errorMessage);
  //       }
  //       return response.data;
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  //   setUserName("");
  //   setPassword("");
  // };

  const navigate = useNavigate();

  function authUser() {
    const user = JSON.parse(sessionStorage.getItem('user'));
    navigate('/home');
    return { Authorization: 'Bearer ' + user.accessToken };
  }

  return (
    <div>
      <div>
        <div class="header__top">
          <div class="container">
            <div class="row">
              <div class="row justify-content-end">
                <div class="col-3">
                  <Link to="/login">
                    <i class="fa-solid fa-user"></i> Login
                  </Link>
                </div>
                <div class="col-3">
                  <Link to="/register">
                    <i class="fa-solid fa-user"></i> Register
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <header class="header">
          <div class="container">
            <div class="row">
              <div class="col-lg-3">
                <div class="header__logo">
                  <a href="./index.html">
                    <img src={logo_sabka} alt="" />
                  </a>
                </div>
              </div>
              <div class="col-lg-6">
                <nav class="header__menu">
                  <ul>
                    <li class="active">
                      <a href="/home">Home</a>
                    </li>
                    <li>
                      <a href="./shop-grid.html">Products</a>
                    </li>
                  </ul>
                </nav>
              </div>
              

              <div class="col-lg-3">
                <div class="header__cart">
                  <button
                    style={{ backgroundColor: '#EEEEEE' }}
                    className="btn btn-pink button-float"
                  >
                    {' '}
                    <i
                      class="fa-solid fa-cart-plus"
                      style={{ marginRight: 10 }}
                    ></i>
                    0 items
                  </button>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
      <div>
        <section id="hero" class="hero d-flex align-items-center">
          <div class="container">
            <div class="row">
              <div class="col-lg-6 d-flex flex-column justify-content-center">
                <h4
                  data-aos="fade-up"
                  style={{ fontSize: '50', color: 'deeppink' }}
                >
                  Login{' '}
                </h4>
                <h5 data-aos="fade-up" data-aos-delay="400">
                  Get access to your Orders, Wishlist and Recommendations
                </h5>
              </div>
              <div class="col-lg-6 hero-img">
                <div class=" mb-3" style={{ width: 444 }}>
                  <div>
                    <div className="form-group">
                      <label
                        className="form-label"
                        style={{ marginRight: 400 }}
                      >
                        Email
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter email"
                        onChange={(e)=>setUserName(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label
                        className="form-label"
                        style={{ marginRight: 400 }}
                      >
                        Password
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter password"
                        onChange={(e)=>setPassword(e.target.value)}
                      />
                    </div>

                    <div className="text-center">
                      <Link
                        to="/"
                        style={{ marginTop: 20 }}
                        className="btn btn-primary btn-block btn-login"
                        onClick={(e) => authUser(e)}
                       
                      >
                        Login
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div>
        <footer>
          <div class="copyright text-center">
            Copyright &copy; 2011-2018{' '}
            <span>Sabka Bazaar Grocery Supplies Pvt. Ltd</span>
          </div>
        </footer>
      </div>
    </div>
  );
}
