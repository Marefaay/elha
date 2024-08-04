import AboutUsMainSection from "./AboutUsMainSection";
import SectionTitle from "./SectionTitle";
import WhoWeAre from "./WhoWeAre";
import WhyUs from "./WhyUs";

function About(props) {
  props.showNavAndFoot(true);
  props.showDashNav(false)

  return (
    <>
      <AboutUsMainSection />
      <WhoWeAre />
      <WhyUs/>
    </>
  );
}
export default About;
