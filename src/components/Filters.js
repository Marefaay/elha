// src/Filters.js
import { useEffect, useState } from "react";
import Button from "./Button";
import "./Filter.css";

function Filters({ setFilterItem }) {
  const [categories, setCategories] = useState([]);
  const url = "https://fakestoreapi.com/products/categories";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleClick = (category) => {
    setFilterItem(category);
  };

  const btns = categories.map((category) => (
    <Button
      key={category}
      category={category}
      handleClick={handleClick}
    
    />
  ));
 
  return (
    <div className="filter mt-5 m-auto">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-2">
            <button
              className="All "
              onClick={() => handleClick("all") }
            >
              All
            </button>
          </div>
          {btns.map((btn, index) => (
            <div className="col-lg-2" key={index}>
              {btn}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Filters;
