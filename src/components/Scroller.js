import { useEffect, useState } from "react";
import "./Scroller.css";
function Scroller() {
  const [scrollPosition, setScrollPosition] = useState();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const scroll = window.scrollY;
      setScrollPosition(scroll);
    });
  },[]);
  // console.log(scrollPosition);
  const position = `${scrollPosition}%`;
  // console.log(position)
  return (
    <div className="scoller">
      {/* <div id="scroll"  style={{width:`${position}`}}></div> */}
    </div>
  );
}
export default Scroller;
