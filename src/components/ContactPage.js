import ContactCard from "./ContactCard";
import MainSectionContactPage from "./MainSectionContactPage";
import "./ContactPage.css"
function ContactPage(props) {
  props.showNavAndFoot(true);
  props.showDashNav(false)

  return (
    <>
      <MainSectionContactPage />
      <div className="info mb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <ContactCard title="phone" data="01028712705" />
            </div>
            <div className="col-lg-6">
              <ContactCard title="mail" data="mrefaay271@gmail.com" />
            </div>
          </div>
         <div className="map mt-5">
          <h5>Map</h5>
         <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d361.9452331890151!2d31.21096120609935!3d30.429065579277207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145875a3fa9298b7%3A0xfea69a52fd9c2cd6!2z2KfZhNi02YXZiNiq2Iwg2KjZhtmH2KfYjCDZhdit2KfZgdi42Kkg2KfZhNmC2YTZitmI2KjZitip!5e0!3m2!1sar!2seg!4v1720523194169!5m2!1sar!2seg"
            width="1000"
            height="400"
            // style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
         </div>
        </div>
      </div>
    </>
  );
}
export default ContactPage;
