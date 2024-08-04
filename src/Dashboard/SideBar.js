import "./sideBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../fontAwesome";
import marketLogo from ".././components/images/WhatsApp_Image_2024-07-18_at_11.03.59_0dff3133-removebg-preview.png";
import { Link } from "react-router-dom";
function SideBar() {
  const lis = document.getElementsByTagName("li");
  // console.log(lis)
  const handlClick = (event) => {
    for (let i = 0; i < lis.length; i++) {
      console.log(lis[i]);
      lis[i].classList.remove("active-side-bar");
    }
    event.currentTarget.classList.add("active-side-bar");
    window.localStorage.setItem(
      "side-bar-active",
      event.currentTarget.dataset.name
    );
  };
  const getActive = () => {
    const activeIsExist = window.localStorage.getItem("side-bar-active");
    if (activeIsExist) {
      console.log(activeIsExist);
      for (let i = 0; i < lis.length; i++) {
        // console.log(lis[i].dataset.name);
        if (lis[i].dataset.name == activeIsExist) {
          lis[i].classList.add("active-side-bar");
          // console.log(lis[navi])
        }
      }
    } else {
      console.log("NO");
    }
  };
  getActive();

  return (
    <div className="side-bar ">
      <div className="market-name">
        <div className="market-logo">
          <img src={marketLogo} className="img-fluid  mt-3 logo " />
          <h2>Halal</h2>
          <div className="seprator">
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      <div className="links">
        <ul>
          <li onClick={handlClick} data-name="users">
            <Link
              to="dashboard/users"
              className="d-flex text-decoration-none link justify-content-between"
            >
              <FontAwesomeIcon icon="fa-solid fa-users" fontSize={"30px"} />
              <span className="d-block d-sm-none d-md-block ps-3"> Users</span>
            </Link>
          </li>
          <li onClick={handlClick} data-name="categories">
            <Link
              to="dashboard/categories"
              className="d-flex text-decoration-none link justify-content-between"
            >
              {" "}
              <FontAwesomeIcon icon="fa-solid fa-list" fontSize={"30px"} />
              <span className="d-block d-sm-none  d-md-block ps-3">Categories</span>
            </Link>
          </li>
          <li onClick={handlClick} data-name="products">
            <Link
              to="dashboard/products"
              className="d-flex text-decoration-none text-sm-center  link justify-content-between"
            >
              {" "}
              <FontAwesomeIcon
                icon="fa-solid fa-basket-shopping"
                fontSize={"30px"}
              />
              <span className="d-block d-sm-none  d-md-block ps-3">Products</span>
            </Link>
          </li>
          <li>
            <FontAwesomeIcon
              icon="fa-solid fa-arrow-right-from-bracket"
              fontSize={"30px"}
            />
            <span className="d-block  d-sm-none  d-md-block">Logout</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default SideBar;
