import "./DashHeading.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../fontAwesome";
import { Link } from "react-router-dom";
function DashHeading(props) {
  return (
    <div className="d-flex align-items-center justify-content-between p-5 pb-0 head ">
      {props.type == "Users" ? (
        <div>
          <div className="heading">
            <h2>All {props.type}</h2>
          </div>
          <div className="add-type d-none">
            <span>
              <Link to={`/${props.type}/add`}>
                <FontAwesomeIcon icon="fa-solid fa-plus" /> Add {props.type}
              </Link>
            </span>
          </div>
        </div>
      ) : (
        <div className="d-flex ">
          <div className="heading">
            <h2>All {props.type}</h2>
          </div>
          <div className="add-type ms-5">
            <span>
              <Link to={`/${props.type}/add`} id="add">
                <FontAwesomeIcon icon="fa-solid fa-plus" /> Add {props.type}
              </Link>
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
export default DashHeading;
