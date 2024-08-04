import { useEffect, useState } from "react";
import BottomOfMain from "./BottomOfMain";
import mainSectionbg from "./images/mainSectionbg.png";
import "./MainSection.css";
import { Link } from "react-router-dom";
function MainSection() {
  const [scrollPostion, setScrollPostion] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const position = window.scrollY;

      setScrollPostion(position);
    });
  }, []);
  const firstColunm = document.getElementsByClassName("f-colunm");

  //   useEffect(()=>{
  // window.addEventListener("load",()=>{
  //   firstColunm[0].classList.add("show")

  // })
  //   },[])
  // console.log(scrollPostion);
  return (
    <>
      <main>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="f-colunm mt-5 pt-5  text-lg-start">
                <h1 className="text-uppercase ">
                  Shopping
                  <br />
                  Become easy
                </h1>
                <p className="text-black-50">
                  The Shopping is very importaant so we make it comfartable
                </p>
                <div className="btns d-flex justify-content-start mt-4  ">
                  <Link className="me-3 ps-3 pe-3 pt-2 pb-2" to="buy" id="buy"> Buy Now</Link>
                  <Link className="ps-3 pe-3 pt-2 pb-2" to="about" id="about">About Us</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 ">
              <div className="s-colunm">
                {scrollPostion > 170 ? (
                  <img className="img-fluid ms-5 moving" src={mainSectionbg} />
                ) : (
                  <img className="img-fluid ms-5 " src={mainSectionbg} />
                )}
              </div>
            </div>
          </div>
          <BottomOfMain />
        </div>
      </main>
    </>
  );
}
export default MainSection;
