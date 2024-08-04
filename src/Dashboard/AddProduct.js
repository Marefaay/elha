import "./AddProduct.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Products from "./Prds";
import { useNavigate } from "react-router-dom";

function AddProduct(props) {
  props.showNavAndFoot(false);
  props.showDashNav(true);
  const inputs=document.getElementsByTagName("input")
  const [title, setTitle] = useState(" ");
  const [titleError, setTitleError] = useState(null);
  const [descError, setDescError] = useState(null);
  const [desc, setDesc] = useState(" ");
  const [price, setPrice] = useState(" ");
  const [count, setCount] = useState(" ");
  const [category, setCategory] = useState(" ");
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const titleHandle = (event) => {
    const value = event.target.value;
    setTitle(value);

    if (value.length < 12) {
      setTitleError("Title must be longer than 12 chararcater");
    } else {
      setTitleError(null);
    }
    // console.log(event.target.value);
  };
  const descHandle = (event) => {
    const value = event.target.value;

    setDesc(value);
    if (value.length < 20) {
      setDescError("Description must be longer than 20 chararcater");
    } else {
      setDescError(null);
    }
    // console.log(event.target.value);
  };
  const priceHandle = (event) => {
    setPrice(event.target.value);
    // console.log(event.target.value);
  };
  const countHandle = (event) => {
    setCount(event.target.value);
    // console.log(event.target.value);
  };
  const categoryHandle = (event) => {
    setCategory(event.target.value);
    // console.log(event.target.value);
  };
  useEffect(() => {
    fetch("http://localhost:3001/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.log(error));
  }, []);
  const ids = products.map((prd) => prd.id);
  // console.log(ids)
  const maxId = Math.max(...ids, 0);
  // console.log(maxId);
  const formSubmit = (e) => {
    e.preventDefault();

    if (title != " " && desc != " " && price != " ") {
      console.log(title, desc, price);
      // fetch("https://fakestoreapi.com/products", {
      //   method: "POST",
      //   body: { title, description: desc, price, count },
      // })
      //   .then((response) => response.json())
      //   .then((data) => console.log(data));
      axios
        .post("http://localhost:3001/products", {
          id: maxId + 1,
          title,
          description: desc,
          price,
          // count,
          category,
        })
        .then((data) => console.log(data));
        console.log(inputs)
        for(let i=0;i<inputs.length;i++){
          inputs[i].value=""
        }
        navigate("/dashboard/products")
    }
  };
  return (
    <div className="add-product">
      <h1>Add Product</h1>
      <form onSubmit={formSubmit}>
        <div>
          <label>Product Title</label>
          <input
            placeholder="Enter Product Title"
            type="text"
            required
            onChange={titleHandle}
          />
          <br />
          {titleError != null ? (
            <span style={{ color: "red" }}>{titleError}</span>
          ) : null}
          <br />
        </div>
        <div>
          <label>Product Description</label>
          <input
            placeholder="Enter Product Description"
            type="text"
            required
            onChange={(event) => descHandle(event)}
          />
          <br />
          {descError != null ? (
            <span style={{ color: "red" }}>{descError}</span>
          ) : null}
          <br />
        </div>
        <div>
          <label>Product Price</label>
          <input
            placeholder="Enter Product Price"
            type="number"
            required
            onChange={(event) => {
              priceHandle(event);
            }}
          />
        </div>
        {/* <div>
          <label>Product Count</label>
          <input
            placeholder="Enter Product Count"
            type="number"
            required
            onChange={(event) => countHandle(event)}
          />
        </div> */}

        <div>
          <label> Product category</label>
          <input
            type="text"
            placeholder="Enter Category"
            onChange={categoryHandle}
          />
          {/* <input type="text" id="file" /> */}
        </div>
        <button id="add-product">Add Product</button>
      </form>
    </div>
  );
}
export default AddProduct;
