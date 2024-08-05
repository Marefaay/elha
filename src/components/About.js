import AboutUsMainSection from "./AboutUsMainSection";

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
