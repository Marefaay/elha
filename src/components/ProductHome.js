import { Link } from "react-router-dom";
import "./ProductHome.css";
function ProductHome(props) {
  // const count = () => {
  //   console
  //   props.product.rating.forEach((r) => {
  //     return r[1];
  //   });
  // };
  return (
    <div className="card mb-3 pt-3">
      <div className="row ">
        <div className="crad-image">
          <img src={props.product.image} className="img-fluid" />
        </div>
        <div className="card-title pt-2 pb-2">
          <Link to={`products/${props.product.id}`} id="link">
         
            <h4> {props.product.title}</h4>
          </Link>
        </div>
        <div className="card-price">
          <h5>${props.product.price}</h5>
        </div>
      </div>
    </div>
  );
}
export default ProductHome;
