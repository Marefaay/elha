import About from "./components/About";
import Homepage from "./components/Homepage";
// import MainSection from "./components/MainSection";
// import Navbar from "./components/Navbar";
// import Products from "./components/Products";
// import UnderMain from "./components/UnderMain";
// import logo from "./logo.svg";
// import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Social from "./components/Social";
import ToTop from "./components/ToTop";
import BuyNow from "./components/BuyNow";
import ProductDetails from "./components/ProductDetails";
import ContactPage from "./components/ContactPage";
import Scroller from "./components/Scroller";
import Dashboard from "./Dashboard/Dashboard";
import { useEffect, useState } from "react";
import AdminProductDetails from "./Dashboard/AdminProductDetails";
import Products from "./Dashboard/Prds";
import SideBar from "./Dashboard/SideBar";
import DashboardNavbar from "./Dashboard/DashboardNavbar";
import Categories from "./Dashboard/Categories";
import Users from "./Dashboard/Users";
import Profile from "./Dashboard/Profile";
import AddProduct from "./Dashboard/AddProduct";
import AddCategories from "./Dashboard/AddCategories";
import EditProduct from "./Dashboard/Edit";
import EditCatgory from "./Dashboard/EditCategory";
import Cart from "./components/Cart";
import Login from "./components/Login";
// import EditProduct from "./Dashboard/Edit";
// import Products from "./Dashboard/Products";
function App() {
  const [showNav, setShowNav] = useState(true);
  const [showDashNav, setshowDashNav] = useState(true);
  const [cart, setCart] = useState([]);
  const cartArr = [];
  const addToCart = (product) => {
    // console.log(product)
    setCart(product);
    console.log(cart);
    cartArr.push(cart);
    window.localStorage.setItem("product", JSON.stringify(cartArr));
  };
  // useEffect(() => {
  //   const cartProducts=JSON.parse(window.localStorage.getItem("product"))
  //   console.log(JSON.parse(cartProducts))

  // }, []);
  return (
    <div className="App">
      {showNav ? <Navbar /> : null}
      {showNav ? <Scroller /> : null}
      {showDashNav ? <SideBar /> : null}
      {showDashNav ? <DashboardNavbar /> : null}

      <Routes>
        <Route
          path="/"
          element={
            <Homepage
              showNavAndFoot={setShowNav}
              showDashNav={setshowDashNav}
            />
          }
        />
        <Route
          path="about"
          element={
            <About showNavAndFoot={setShowNav} showDashNav={setshowDashNav} />
          }
        />
        <Route
          path="buy"
          element={
            <BuyNow showNavAndFoot={setShowNav} showDashNav={setshowDashNav} />
          }
        />
        <Route
          path="contact"
          element={
            <ContactPage
              showNavAndFoot={setShowNav}
              showDashNav={setshowDashNav}
            />
          }
        />
        <Route
          path="buy/products/:productId"
          element={
            <ProductDetails
              showNavAndFoot={setShowNav}
              showDashNav={setshowDashNav}
              addToCart={addToCart}
            />
          }
        />
        <Route
          path="products/:productId"
          element={
            <ProductDetails
              showNavAndFoot={setShowNav}
              showDashNav={setshowDashNav}
            />
          }
        />
        <Route
          path="cart"
          element={
            <Cart
              showNavAndFoot={setShowNav}
              showDashNav={setshowDashNav}
              product={cart}
            />
          }
        />
        <Route
          path="login"
          element={
            <Login showNavAndFoot={setShowNav} showDashNav={setshowDashNav} />
          }
        />
        <Route
          path="dashboard"
          element={
            <Dashboard
              showNavAndFoot={setShowNav}
              showDashNav={setshowDashNav}
            />
          }
        />
        <Route
          path="/:productId"
          element={
            <AdminProductDetails
              showNavAndFoot={setShowNav}
              showDashNav={setshowDashNav}
            />
          }
        />
        <Route
          path="dashboard/products"
          element={
            <Products
              showNavAndFoot={setShowNav}
              showDashNav={setshowDashNav}
            />
          }
        />
        <Route
          path="dashboard/categories"
          element={
            <Categories
              showNavAndFoot={setShowNav}
              showDashNav={setshowDashNav}
            />
          }
        />
        <Route
          path="dashboard/users"
          element={
            <Users showNavAndFoot={setShowNav} showDashNav={setshowDashNav} />
          }
        />
        <Route
          path="/users/:userId"
          element={
            <Profile showNavAndFoot={setShowNav} showDashNav={setshowDashNav} />
          }
        />
        <Route
          path="/products/add"
          element={
            <AddProduct
              showNavAndFoot={setShowNav}
              showDashNav={setshowDashNav}
            />
          }
        />
        <Route
          path="/categories/add"
          element={
            <AddCategories
              showNavAndFoot={setShowNav}
              showDashNav={setshowDashNav}
            />
          }
        />
        <Route
          path="/dashboard/products/edit/:id"
          element={
            <EditProduct
              showNavAndFoot={setShowNav}
              showDashNav={setshowDashNav}
            />
          }
        />
        <Route
          path="/dashboard/categories/edit/:id"
          element={
            <EditCatgory
              showNavAndFoot={setShowNav}
              showDashNav={setshowDashNav}
            />
          }
        />
      </Routes>

      {showNav ? <Social /> : null}
      {showNav ? <ToTop /> : null}
      {showNav ? <Footer /> : null}
    </div>
  );
}

export default App;
