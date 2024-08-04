import SectionTitle from "./SectionTitle";
import Whyus from "./images/WhyUs.jpeg";
import "./WhyUs.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../fontAwesome";
function WhyUs() {
  return (
    <div className="why-us p-5 ">
      <SectionTitle title="Why Us" />
      <div className="why-us-image  mt-5">
        <img src={Whyus} className="img-fluid" />
      </div>
      <div className="propirties mt-5 mb-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="prop-box p-4 rounded mt-2 mb-2">
                <span>
                  <FontAwesomeIcon
                    icon="fa-solid fa-truck-fast"
                    fontSize={"30px"}
                  />
                </span>
                <h3>Fast Deelievery</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="prop-box p-4 rounded mt-2 mb-2">
                <span>
                  <FontAwesomeIcon
                    icon="fa-solid fa-user-lock"
                    fontSize={"25px"}
                  />
                </span>
                <h3>User Security</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="prop-box p-4 rounded mt-2 mb-2">
                <span>
                  <FontAwesomeIcon
                    icon="fa-solid fa-money-bill-wave"
                    fontSize={"25px"}
                  />
                </span>

                <h3>Multi Method to pay</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="prop-box p-4 rounded mt-2 mb-2">
                <span>
                  <FontAwesomeIcon
                    icon="fa-solid fa-repeat"
                    fontSize={"25px"}
                  />
                </span>
                <h3>Easy Retrve Money</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="prop-box p-4 rounded mt-2 mb-2">
                <span>
                  <FontAwesomeIcon
                    icon="fa-solid fa-cart-shopping"
                    fontSize={"25px"}
                  />
                </span>
                <h3>Easy Shopping</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default WhyUs;
