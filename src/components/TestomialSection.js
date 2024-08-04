import SectionTitle from "./SectionTitle";
import TestomialBody from "./TestimonialBody";
import "./TestomialSection.css"
function TestomialSection() {
    return (
   <div className="testimonoal ">
   <div className="container">
          <SectionTitle title=" testmonial" margin="auto" />
          <TestomialBody/>
      </div>
   </div>
    )
}
export default TestomialSection;
