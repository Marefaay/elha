import { useEffect, useState } from "react";
import SectionTitle from "./SectionTitle";
// import Product from "./ProductHome";
import ProductHome from "./ProductHome";
import Slider from "./Slider";
import BestSellingBody from "./BestSellingBody";

function BestSelling() {
  const url = "https://fakestoreapi.com/products/2";

  const [product, setProduct] = useState({});
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((err) => console.log(err));
  });
  // console.log(product);
  return (
    <>
      <div className="our-products pt-5">
        <div className="container ">
          <SectionTitle title="Best Selling" margin="auto" />
          <div className="product mt-3 ">
            {/* <ProductHome product={product} /> */}
            {/* <Slider /> */}
            <BestSellingBody />
          </div>
        </div>
      </div>
    </>
  );
}
export default BestSelling;
