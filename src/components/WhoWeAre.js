import WhoAre from "./images/who-we-are.jpeg"
import SectionTitle from "./SectionTitle";
import "./WhoWeAre.css"
function WhoWeAre() {
  return (
    
    <div className="who-we-are">
              <SectionTitle title="Who We Are " margin="auto" />

      <div className="container p-4">
        <div className="row">
          <div className="col-lg-6 p-5">
            <div className="who-we-are-text">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged
              </p>
            </div>
          </div>
          <div className="col-lg-6 p-5">
            <div className="who-we-are-image ">
                <img src={WhoAre} className="img-fluid"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default WhoWeAre;
