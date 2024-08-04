// src/ProductsList.js
import React, { useEffect, useState } from "react";
import ProductHome from "./ProductHome";

function ProductsList({ filterItem }) {
  const [products, setProducts] = useState([]);
  const url = "https://fakestoreapi.com/products";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const filteredProducts = products.filter((product) =>
    filterItem === "all" ? true : product.category === filterItem
  );

  const prds = filteredProducts.map((product) => (
    <div className="col-lg-4" key={product.id}>
      <ProductHome product={product} />
    </div>
  ));

  return (
    <div className="product-list">
      <div className="container">
        <div className="row">{prds}</div>
      </div>
    </div>
  );
}

export default ProductsList;
