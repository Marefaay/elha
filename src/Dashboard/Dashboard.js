import DashboardBody from "./DashboardBody";
import SideBar from "./SideBar";

function Dashboard(props) {
  props.showNavAndFoot(false);
  props.showDashNav(true);
  return (
    <div className="dashboard">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-2 p-0">
            {/* <SideBar /> */}
          </div>
          <div className="col-lg-10 p-0">
            <DashboardBody />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
