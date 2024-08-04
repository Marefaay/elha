// import mainSectionbg from "./images/mainSectionbg.png"
import { Link } from "react-router-dom";
import Button from "./Button";
import SectionTitle from "./SectionTitle";
import "./UnderMain.css"
function UnderMain() {
  return (
    <>
      <div className="under-main">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 ">
              <div className="f-colunm mt-5 pt-3">
                <SectionTitle title="About Us"/>
                {/* <span className="d-block">About Us</span> */}
                <p className="text-black-50">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum
                </p>
                <Link to="contact" className="text-decoration-none btn">Contact Us</Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="s-column ">
                {/* <img className="img-fluid" src={mainSectionbg} /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default UnderMain;
