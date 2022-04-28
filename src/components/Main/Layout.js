import React, { useEffect, useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import logo_sabka from '../../../src/assets/img/logo_sabka.png';
import { Button } from 'react-bootstrap';


export default function Header() {
  return (
    <div>
      <section>
        <header
          id="header"
          className="header fixed-top d-flex align-items-center"
          style={{ backgroundColor: '#fff' }}
        >
          <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
            <a href="index.html" className=" d-flex align-items-center">
              <img src={logo_sabka} alt="" style={{ marginRight: 20 }} />
              <nav class="header__menu">
                <ul>
                  <li class="active">
                    <a href="">Home</a>
                  </li>
                  <li>
                    <a href="">Products</a>
                  </li>
                </ul>
              </nav>{' '}
            </a>
          </div>

          <div class="header__top__right">
            <div class="header__top__right__auth">
              <a href="/login">
                <i class="fa fa-user"></i> Login
              </a>
            </div>
            <div class="header__top__right__auth">
              <a href="#">
                <i class="fa fa-user"></i> Register
              </a>
            </div>
          </div>
        
            <div class="header__cart">
              <Button style={{ backgroundColor: 'grey' }}>
                <i
                  class="fa-solid fa-cart-shopping"
                  style={{ marginRight: 10 }}
                ></i>
                0 items
              </Button>
            </div>
          
        </header>
      </section>

      <Outlet />

      <footer id="footer" class="footer">
        <div class="copyright text-center">
          Copyright &copy; 2011-2018{' '}
          <span>Sabka Bazaar Grocery Supplies Pvt. Ltd</span>
        </div>
      </footer>
    </div>
  );
}
