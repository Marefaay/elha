import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../fontAwesome";
import "./Social.css";
const icons = document.getElementsByClassName("icons");
function Social() {
  const toggle = () => {
    icons[0].classList.toggle("left");
  };
  function openWhatsApp() {
    // Replace the phone number with the desired WhatsApp number
    var phoneNumber = '+201028712705';
    var message = 'Hello, I would like to chat with you.';
    var whatsappUrl = 'https://api.whatsapp.com/send?phone=' + phoneNumber + '&text=' + encodeURIComponent(message);
    window.open(whatsappUrl, '_blank');
  }
  return (
    <>
      <div className="social-icons">
        <a className="arrow d-block" onClick={toggle}>
          <span id="arrow">
            <FontAwesomeIcon
              icon="fa-solid fa-arrow-right-long"
              fontSize={"30px"}
            />
          </span>
        </a>
        <div className="icons">
          <a href="#">
            <span id="facebook">
              <FontAwesomeIcon
                icon="fa-brands fa-facebook-messenger"
                fontSize={"35px"}
              />
            </span>
          </a>
          <a href="#">
            <span id="instgram">
              <FontAwesomeIcon
                icon="fa-brands fa-instagram"
                fontSize={"35px"}
              />
            </span>
          </a>
          <a href="#" onClick={openWhatsApp}>
            <span id="whatsapp">
                
              <FontAwesomeIcon icon="fa-brands fa-whatsapp" fontSize={"35px"} />
            </span>
          </a>
          <a href="#">
            <span id="linkedin">
              <FontAwesomeIcon
                icon="fa-brands fa-linkedin-in"
                fontSize={"35px"}
              />
            </span>
          </a>
        </div>
      </div>
    </>
  );
}
export default Social;
