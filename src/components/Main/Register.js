import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import logo_sabka from '../../../src/assets/img/logo_sabka.png';

export default function Login(props) {
  let date = new Date();
  let year = date.getFullYear();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const [userErr, setUserErr] = useState(false);
  const [passErr, setPassErr] = useState(false);

  function userHandler(e) {
    let item = e.target.value;
    if (item.length <= 0) {
      setUserErr(true);
    } else {
      setUserErr(false);
    }
    setUserName(item);
    // console.log(e.target.value)
  }
  function passHandler(e) {
    let item = e.target.value;
    if (item.length <= 0) {
      setPassErr(true);
    } else {
      setPassErr(false);
    }
    setPassword(item);
    // console.log(e.target.value)
  }
  const handleSubmit = (e) => {
    let name = userName.trim();
    // console.log(name);
    if (userName.length > 0) {
      setUserErr(false);
      if (password.length > 0) {
        setUserErr(false);
        setPassErr(false);
        // handleLogin(e);
      } else {
        setPassErr(true);
      }
    } else {
      setUserErr(true);
    }
  };

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

  // function authUser() {
  //   const user = JSON.parse(sessionStorage.getItem('user'));
  //   navigate('/');
  //   return { Authorization: 'Bearer ' + user.accessToken };
  // }

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
              {/* <div class="col-lg-3">
              <li class="nav-content-item">
                <a class="nav-content-link" href="https://www.cupcom.com.br/">
                  <i class="fas fa-shopping-cart"></i> 0 items
                </a>
              </li>
            </div> */}

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
                  Sign Up{' '}
                </h4>
                <h5 data-aos="fade-up" data-aos-delay="400">
                  We do not share your personal details with anyone.
                </h5>
              </div>
              <div class="col-lg-6 hero-img">
                <div class=" mb-3" style={{ width: 444 }}>
                  <div>
                    <div className="form-group">
                      <label
                        className="form-label"
                        style={{ marginRight: 350 }}
                      >
                        First Name
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                      <label
                        className="form-label"
                        style={{ marginRight: 350 }}
                      >
                        Last Name
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                      <label
                        className="form-label"
                        style={{ marginRight: 360 }}
                      >
                        Password
                      </label>
                      <input type="password" className="form-control" />
                    </div>
                    <div className="form-group">
                      <label
                        className="form-label"
                        style={{ marginRight: 300 }}
                      >
                        Confirm Password
                      </label>
                      <input type="password" className="form-control" />
                    </div>

                    <div className="text-center">
                      <Link
                        to="/"
                        style={{ marginTop: 20 }}
                        className="btn btn-primary btn-block btn-login"
                        // onClick={(e) => handleLogin(e)}
                        // onClick={(e) => handleSubmit(e)}
                      >
                        Sign Up
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
