import "./BestSellerProduct.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../fontAwesome";
import { Link } from "react-router-dom";
function BestSellerProduct(props) {
  return (
    <>
      <div className="best-seller-product">
        <div className="product-img">
          <img src={props.product.image} className="img-fluid" />
        </div>
        <div className="prdocut-title">
          <h1>{props.product.title}</h1>
        </div>
        <div className="icon">
         <Link to={`products/${props.product.id}`} id="link"> <FontAwesomeIcon
            icon="fa-solid fa-up-right-from-square"
            fontSize={"25px"}
          /></Link>
        </div>
      </div>
    </>
  );
}
export default BestSellerProduct;
