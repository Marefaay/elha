import "./AddProduct.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Products from "./Prds";
import { useNavigate } from "react-router-dom";

function AddProduct(props) {
  props.showNavAndFoot(false);
  props.showDashNav(true);
  const inputs = document.getElementsByTagName("input");

  const [category, setCategory] = useState(" ");
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  const categoryHandle = (event) => {
    setCategory(event.target.value);
    // console.log(event.target.value);
  };
  useEffect(() => {
    fetch("http://localhost:3001/categories")
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.log(error));
  }, []);
  const ids = categories.map((cat) => cat.id);
  // console.log(ids)
  let maxId = Math.max(...ids, 0);
  console.log(maxId);
  const formSubmit = (e) => {
    e.preventDefault();

    if (category != " ") {
      // console.log(title, desc, price);
      // fetch("https://fakestoreapi.com/products", {
      //   method: "POST",
      //   body: { title, description: desc, price, count },
      // })
      //   .then((response) => response.json())
      //   .then((data) => console.log(data));
      axios
        .post("http://localhost:3001/categories", {
          id: maxId + 1,
          category,
        })
        .then((data) => console.log(data));
      console.log(inputs);
      for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = "";
      }
      navigate("/dashboard/categories");
    }
  };
  return (
    <div className="add-product">
      <h1>Add catgory</h1>
      <form onSubmit={formSubmit}>
        <div>
          <label> Product category</label>
          <input
            type="text"
            placeholder="Enter Category"
            onChange={categoryHandle}
          />
          {/* <input type="text" id="file" /> */}
        </div>
        <button id="add-product">Add category</button>
      </form>
    </div>
  );
}
export default AddProduct;
