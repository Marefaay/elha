import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../fontAwesome";
import "./ToTop.css";
import { useEffect, useState } from "react";
function ToTop() {
  const [scrollPostion, setScrollPostion] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const position = window.scrollY;

      setScrollPostion(position);
    });
  }, []);
  return (
    <div>
      {scrollPostion > 470 ? (
        <span
          id="top"
          className="position-fixed show "
          onClick={() => {
            document.documentElement.scrollTop = 0;
          }}
        >
          <FontAwesomeIcon icon="fa-solid fa-arrow-up-long" fontSize={"25px"} />
        </span>
      ) : (
        <span id="top" className="position-fixed hide">
          <FontAwesomeIcon icon="fa-solid fa-arrow-up-long" fontSize={"25px"} />
        </span>
      )}
    </div>
  );
}
export default ToTop;
