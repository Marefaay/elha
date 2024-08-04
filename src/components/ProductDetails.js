import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../fontAwesome";
import "./ProductDetails.css";
function ProductDetails(props) {
  props.showNavAndFoot(true);
  const params = useParams();
  const [product, setProduct] = useState([]);
  console.log(params.productId);
  const url = "https://fakestoreapi.com/products";
  console.log(`${url}/${params.productId}`);
  useEffect(() => {
    fetch(`${url}/${params.productId}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((err) => console.log(err));
  }, []);
  // const rate = product.rating.rate;
  // console.log(rate);
  return (
    <div className="product-details mt-4">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="product-image mt-5 ">
              <img src={product.image} className="img-fluid" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="product-text mt-5 ">
              <h1 className="mb-4"> {product.title}</h1>
              <h1 className="mb-5">${product.price}</h1>

              <button id="add-to-cart" onClick={() => props.addToCart(product)}>
                <span className="me-2">
                  <FontAwesomeIcon
                    icon="fa-solid fa-cart-plus"
                    fontSize={"20px"}
                  />
                </span>
                Add To cart
              </button>
            </div>
            <span id="spacer"></span>
            <div className="product-description ">
              <p>{product.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductDetails;
