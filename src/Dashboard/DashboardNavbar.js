import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../fontAwesome";
import Person from "../components/images/Asmaa.jpg";
import "./DashboardNav.css";
function DashboardNavbar() {
  const name=window.localStorage.getItem("userName")
  // let userName=name
  console.log(name)
  return (
    <div className="nav-dash">
      <Link to="/" id="home">
        <FontAwesomeIcon icon="fa-solid fa-house" fontSize={"25px"} />
      </Link>
      <div className="admin">
        <div className="admin-name me-3">
          <h5>Hello, {name}</h5>
        </div>
        <div className="admin-image">
          <span >{name.slice(0,1)}</span>
          {/* <img src={Person} /> */}
        </div>
      </div>
    </div>
  );
}
export default DashboardNavbar;
