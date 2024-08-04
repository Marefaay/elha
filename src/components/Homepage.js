import ContactSection from "./ContactSection";
import Filters from "./Filters";
import Footer from "./Footer";
import MainSection from "./MainSection";
import Navbar from "./Navbar";
// import OurProducts from "./BestSelling";
// import Products from "./Products";
import TestomialSection from "./TestomialSection";
import UnderMain from "./UnderMain";
import BestSelling from "./BestSelling";
import Popup from "./Popup";

function Homepage(props) {
  props.showNavAndFoot(true);
  props.showDashNav(false)
  return (
    <>
      <div className="home">
        <Popup/>
        <MainSection />
        <UnderMain />
        <BestSelling />
        <TestomialSection />
        <ContactSection />
      </div>
    </>
  );
}
export default Homepage;
