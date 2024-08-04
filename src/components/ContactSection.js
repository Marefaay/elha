// import { Form } from "react-router-dom";
import ContactCard from "./ContactCard";
import FormSection from "./Form";
import SectionTitle from "./SectionTitle";

function ContactSection() {
  return (
    <>
      <div className="container p-sm-5 ">
        <SectionTitle title="Contact Us" />
        <div className="contact-body ">
          <div className="row justify-content-center align-items-center">
            {/* <div className="col-lg-6">
              <p>
             
                Contact us to get all information by semd message or got to
                Contact Us Page
              </p>
            </div> */}
            <div className="col-lg-12 m-auto">
              <FormSection />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ContactSection;
