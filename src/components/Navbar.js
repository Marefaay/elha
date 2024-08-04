import logo from "./images/logo.png";
// import "./Navbar.css"
import "../components/Navbar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../fontAwesome";
import Cart from "./Cart";
function Navbar() {
  const navLinks = document.getElementsByClassName("nav-item");
  const nav = document.getElementsByClassName("navbar");
  const dasboardBtn = document.getElementById("dashboard");
  const name = window.localStorage.getItem("userName");
  const first = document.getElementById("first");
  const second = document.getElementById("second");
  const third = document.getElementById("third");
  const responsiveMenu = document.getElementsByClassName("responsive-nav");
  console.log(dasboardBtn);
  // console.log(navLinks);
  const handleClick = (event) => {
    for (let i = 0; i < navLinks.length; i++) {
      // console.log(navLinks[i].classList.contains("active"));
      navLinks[i].classList.remove("active");
      // console.log(navLinks[i]);
      event.currentTarget.classList.add("active");
    }
    window.localStorage.setItem(
      "nav-bar-active",
      event.currentTarget.dataset.nav
    );
  };
  const getNavActive = () => {
    const navActive = window.localStorage.getItem("nav-bar-active");
    if (navActive) {
      for (let i = 0; i < navLinks.length; i++) {
        if (navLinks[i].dataset.nav == navActive) {
          console.log(navLinks[i]);
          navLinks[0].classList.remove("active");

          navLinks[i].classList.add("active");
        }
      }
    }
  };
  const menuClick = () => {
    third.classList.toggle("rotate45");
    first.classList.toggle("translate");
    second.classList.toggle("display");
    responsiveMenu[0].classList.toggle("top");

    // console.log(responsiveMenu);
  };
  getNavActive();
  return (
    <>
      <nav className="navbar position-sticky  top-0 nav-light navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img className="logo-width img-fluid logo-img" src={logo} />
          </Link>
          <div
            className="menu-bar d-xl-none  d-lg-block d-sm-block"
            onClick={menuClick}
          >
            <span id="first"></span>
            <span id="second"></span>
            <span id="third"></span>
          </div>
          {/* <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button> */}
          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav ms-auto d-lg-none d-xl-flex">
              <li
                data-nav="home"
                className="nav-item  active"
                onClick={(e) => {
                  handleClick(e);
                }}
              >
                <Link className="nav-link " aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li
                data-nav="buy-now"
                className="nav-item "
                onClick={(e) => {
                  handleClick(e);
                }}
              >
                <Link className="nav-link " aria-current="page" to="buy">
                  Buy Now
                </Link>
              </li>
              <li
                data-nav="about"
                className="nav-item "
                onClick={(e) => {
                  handleClick(e);
                }}
              >
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li
                data-nav="contact"
                className="nav-item "
                onClick={(e) => {
                  handleClick(e);
                }}
              >
                <Link className="nav-link" to="/contact">
                  Contact Us
                </Link>
              </li>
              <li className=" nav-item mt-2" id="log">
                <Link to="login" id="login">
                  <FontAwesomeIcon icon="fa-regular fa-user" />
                  {name}
                </Link>
              </li>
              <li className="nav-item mt-2" id="dash">
                <Link className="ms-2" to="dashboard" id="dashboard">
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>
          <div className="cart me-3 ms-3">
            {/* <Link to="cart">
              {" "}
              <FontAwesomeIcon
                icon="fa-solid fa-cart-shopping"
                fontSize={"30px"}
                color="#8a2be2"
              />
            </Link> */}
            {/* <Link to="login" id="login">
              <FontAwesomeIcon icon="fa-regular fa-user" />
             {name}
            </Link> */}
            {/* <span>{props.cart.length}</span> */}
          </div>
        </div>
      </nav>

      <div className="responsive-nav">
        <ul>
          <li>
            <Link to="/" className="text-decoration-none " id="hme">
              Home
            </Link>
          </li>
          <li>
            <Link to="buy" className="text-decoration-none " id="buy">
              Buy Now
            </Link>
          </li>
          <li>
            <Link to="about" className="text-decoration-none " id="about">
              About
            </Link>
          </li>
          <li>
            <Link to="contact" className="text-decoration-none " id="contact">
              Contact Us
            </Link>
          </li>
          <li className="  mt-2" id="log">
            <Link to="login" className="text-decoration-none " id="login-res">
              <FontAwesomeIcon icon="fa-regular fa-user" />
              {name}
            </Link>
          </li>
          <li className=" " id="dash">
            <Link
              className="text-decoration-none "
              to="dashboard"
              id="dashboard-res"
            >
              Dashboard
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
export default Navbar;
