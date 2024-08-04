import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../fontAwesome";
import "./ContactCard.css";
function ContactCard(props) {
  return (
    <>
      <div className="contact-card p-4 mt-3 mb-3 text-center rounded">
        {/* {props.title === "phone" ? (
          <span className="text-center icon ">
            <FontAwesomeIcon icon={["fas", "fa-phone"]} fontSize={"40px"} />
          </span>
        ) : props.title === "mail" ? (
          <span className="text-center icon ">
            <FontAwesomeIcon icon={["fas", "fa-envelope"]} fontSize={"40px"} />
          </span>
        ) : null} */}

        <h3 className="title mt-3 mb-3">{props.title}</h3>
        {props.title === "mail" ? (
          <h5 className="data">
            <a id="mail"
              href="mailto:mrefaay271@gmail.com"
              className="text-black text-decoration-none "
            >
              {props.data}
            </a>
          </h5>
        ) : (
          <h5 className="data">{props.data}</h5>
        )}
      </div>
    </>
  );
}
export default ContactCard;
