import DashboardNavbar from "./DashboardNavbar";
import "./dashbody.css";
import Products from "./Prds";
import DashImg from "../../src/components/images/DashImg.png";
function DashboardBody() {
  return (
    <div className="dash-body m-0">
      <div className="container text-center mt-5">
        <div className="dash-text  mb-5">
          <h1>Welcome Here Our Dashboard</h1>
          <h4 className="p-3">You Can Control Every Thing In The Market</h4>
        </div>

        <div className="dash-img">
          <img src={DashImg} className="img-fluid" />
        </div>
      </div>
      {/* <DashboardNavbar/> */}
      {/* <Products/> */}
    </div>
  );
}
export default DashboardBody;
