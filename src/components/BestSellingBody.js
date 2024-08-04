import { useEffect, useState } from "react";
import BestSellerProduct from "./BestSellerProduct";

function BestSellingBody() {
  const mensUrl =
    "https://fakestoreapi.com/products/category/men's clothing?limit=3";
  const [mensProduct, setMensProduct] = useState([]);
  useEffect(() => {
    fetch(mensUrl)
      .then((response) => response.json())
      .then((data) => setMensProduct(data))
      .catch((err) => console.log(err));
  }, []);
  const electronicsUrl =
    "https://fakestoreapi.com/products/category/electronics?limit=3";
  const [electrronicsProduct, setelEctrronicsProduct] = useState([]);
  useEffect(() => {
    fetch(electronicsUrl)
      .then((response) => response.json())
      .then((data) => setelEctrronicsProduct(data))
      .catch((err) => console.log(err));
  }, []);
  // console.log(mensProduct);
  const prds = mensProduct.map((prd) => {
    return (
      <>
        <BestSellerProduct product={prd} />
      </>
    );
  });
  // console.log(electrronicsProduct);
  const elecs = electrronicsProduct.map((ele) => {
    return (
      <>
        <BestSellerProduct product={ele} />
      </>
    );
  });
  return (
    <>
      <div className="container pt-3 pb-3">
        <div className="row">
          <div className="col-lg-4 mt-2 mb-2">{prds[0]}</div>
          <div className="col-lg-4 mt-2 mb-2">{prds[1]}</div>
          <div className="col-lg-4 mt-2 mb-2">{prds[2]}</div>
        </div>
        <div className="row">
          <div className="col-lg-4 mt-2 mb-2">{elecs[0]}</div>
          <div className="col-lg-4 mt-2 mb-2">{elecs[1]}</div>
          <div className="col-lg-4 mt-2 mb-2">{elecs[2]}</div>
        </div>
      </div>
    </>
  );
}
export default BestSellingBody;
