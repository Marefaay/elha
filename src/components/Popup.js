import Swal from "sweetalert2";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Popup() {
  useEffect(() => {
    const pop = setTimeout(() => {
      Swal.fire({
        title: "There Are Very Good Offer",
        showCancelButton: true,
        confirmButtonText: "Buy Now",
      }).then((data)=>{
        if(data.isConfirmed){
            window.location.href="buy"
        
        }
      });
    }, 3000);

    return () => clearTimeout(pop);
  }, []);

  return <div className="popup"></div>;
}

export default Popup;