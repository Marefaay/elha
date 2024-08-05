import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../fontAwesome";
import "./AdminProductDetails.css";

function AdminProductDetails(props) {
  props.showNavAndFoot(false);
  const params = useParams();
  const [product, setProduct] = useState([]);
  
  const url = "https://fakestoreapi.com/products";
  
  useEffect(() => {
    fetch(`${url}/${params.productId}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((err) => console.log(err));
  }, [params.productId]); // Include params.productId in the dependency array
  
  return (
    <div className="dash-product-details mt-4">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="dash-product-image mt-5">
              <img src={product.image} className="img-fluid" alt="product-img" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="dash-product-text mt-5">
              <h1 className="mb-4">{product.title}</h1>
              <h1 className="mb-5">Price: ${product.price}</h1>
              <div className="product-description">
                <p>{product.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminProductDetails;
