import "./BottomOfMain.css";
function BottomOfMain() {
  return (
    <>
      <div className="bottom-of-main">
        <div className="boxes ">
          <div className="container">
            <div className="row justify-content-evenly">
              <div className="col-lg-3 col-md-3 ">
                <span className="w-auto d-block text-center pt-3 pb-3 mt-2" id="fisrt">Fast Deleviry</span>
              </div>
              <div className="col-lg-3 col-md-3">
                <span className="w-auto d-block text-center pt-3 pb-3 mt-2" id="second">Updated Prices</span>
              </div>
              <div className="col-lg-3 col-md-3">
                <span className="w-auto d-block text-center pt-3 pb-3 mt-2" id="third">
                  Save Your Rights
                </span>
              </div>
              <div className="col-lg-3 col-md-3">
                <span className="w-auto d-block text-center pt-3 pb-3 mt-2" id="fourth">
                  Multi Method To Pay
                </span>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default BottomOfMain;
