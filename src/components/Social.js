import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../fontAwesome";
import "./Social.css";

function Social() {
  const toggle = () => {
    document.getElementsByClassName("icons")[0].classList.toggle("left");
  };

  function openWhatsApp() {
    var phoneNumber = '+201028712705';
    var message = 'Hello, I would like to chat with you.';
    var whatsappUrl = 'https://api.whatsapp.com/send?phone=' + phoneNumber + '&text=' + encodeURIComponent(message);
    window.open(whatsappUrl, '_blank');
  }

  return (
    <>
      <div className="social-icons">
        <button className="arrow d-block" onClick={toggle}>
          <span id="arrow">
            <FontAwesomeIcon
              icon="fa-solid fa-arrow-right-long"
              fontSize={"30px"}
            />
          </span>
        </button>
        <div className="icons">
          <a href="https://www.facebook.com">
            <span id="facebook">
              <FontAwesomeIcon
                icon="fa-brands fa-facebook-messenger"
                fontSize={"35px"}
              />
            </span>
          </a>
          <a href="https://www.instagram.com">
            <span id="instgram">
              <FontAwesomeIcon
                icon="fa-brands fa-instagram"
                fontSize={"35px"}
              />
            </span>
          </a>
          <button onClick={openWhatsApp}>
            <span id="whatsapp">
              <FontAwesomeIcon icon="fa-brands fa-whatsapp" fontSize={"35px"} />
            </span>
          </button>
          <a href="https://www.linkedin.com">
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
