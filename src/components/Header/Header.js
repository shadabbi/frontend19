import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

import classes from "./Header.module.scss";

function Header() {
  useEffect(() => {
    // navbar
    const backBtn = document.querySelector(`.${classes["back-to-top"]}`);
    const navbar = document.querySelector(`.${classes["main-header"]} nav`);
    console.log(backBtn, navbar);

    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 500) {
        backBtn.style.transform = "translateX(0)";
        navbar.style.position = "fixed";
        navbar.style.top = 0;
      } else {
        backBtn.style.transform = "translateX(215%)";
        navbar.style.position = "relative";
        navbar.style.top = "-15%";
      }
    });

    backBtn.addEventListener("click", () => {
      document.documentElement.scrollTop = 0;
    });

    // sidebar

    const burger = document.querySelector(`.${classes.burger}`);
    const sidebar = document.querySelector(`.${classes.sidebar}`);
    const backdrop = document.querySelector(`.${classes.backdrop}`);
    const svg = document.querySelector(`svg`);

    const body = document.querySelector("body");

    burger.addEventListener("click", () => {
      svg.classList.toggle(`active`);
      sidebar.classList.toggle(`${classes.showSidebar}`);
      backdrop.classList.toggle(`${classes.showBackdrop}`);
      body.classList.toggle("stopScroll");
    });
  }, []);
  return (
    <header className={classes["main-header"]}>
      <div className={classes["back-to-top"]}>
        <span>
          <i className="fa fa-arrow-up" aria-hidden="true"></i>{" "}
        </span>
      </div>
      <nav className="">
        <div className={classes["brand-container"]}>
          <NavLink className={classes.brand} to="/">
            frontend
          </NavLink>
        </div>

        <div className={classes.links}>
          <ul className="">
            <li>
              <NavLink to="/">Home </NavLink>
            </li>
            <li className={classes["nav-item"]}>
              <NavLink to="/photo">Photos</NavLink>
            </li>
            <li className={classes["nav-item"]}>
              <NavLink to="/posts">Posts</NavLink>
            </li>
            <li className={classes["nav-item"]}>
              <NavLink to="albums">Albums</NavLink>
            </li>
          </ul>
        </div>
        <div className={classes.burger}>
          <svg className="ham hamRotate ham4" viewBox="0 0 100 100" width="80">
            <path
              className="line top"
              d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20"
            />
            <path className="line middle" d="m 70,50 h -40" />
            <path
              className="line bottom"
              d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20"
            />
          </svg>
        </div>
      </nav>

      <div className={classes.backdrop}></div>

      <div className={classes.sidebar}>
        <div className={classes.links}>
          <div className={classes.icons}>
            <div>
              <a href="#">
                <i className="fa fa-facebook" aria-hidden="true"></i>
              </a>

              <a href="#">
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </a>
            </div>

            <div className={classes["contact-btn"]}>
              <a href="#">Contact</a>
            </div>
          </div>
          <ul className="">
            <li>
              <a href="#">Home </a>
            </li>
            <li className="nav-item">
              <a href="#">Services</a>
            </li>
            <li className="nav-item">
              <a href="#">About Us</a>
            </li>
            <li className="nav-item">
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
