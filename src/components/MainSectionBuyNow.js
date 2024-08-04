import BuyNowMain from "./images/BuyNowMain.png";
import "./MainSectionBuyNow.css";
function MainSectionBuyNow() {
  return (
    <>
      <div className="main p-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="text-main">
                <h1>
                  Welcome <br />
                  to Our Shop
                </h1>
                <p >
                  Discover a wide range of products that cater to all your
                  needs. Whether you're looking for fashion, electronics, home
                  decor, or anything in between, our carefully curated
                  collection has something for everyone.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="img-main">
                <img src={BuyNowMain} className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default MainSectionBuyNow;
