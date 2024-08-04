import { useNavigate, useParams } from "react-router-dom";
import "./Edit.css";
import { useEffect, useState } from "react";
import axios from "axios";

function EditProduct(props) {
  props.showNavAndFoot(false);
  props.showDashNav(true);
  const params = useParams();
  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
  });
  const url = "http://localhost:3001/products";
  const [titleError, setTitleError] = useState(null);
  const [descError, setDescError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${url}/${params.id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, [params.id, url]);

  const titleHandle = (event) => {
    const value = event.target.value;
    setProduct((prevProduct) => ({
      ...prevProduct,
      title: value,
    }));

    if (value.length < 12) {
      setTitleError("Title must be longer than 12 characters");
    } else {
      setTitleError(null);
    }
  };

  const descHandle = (event) => {
    const value = event.target.value;
    setProduct((prevProduct) => ({
      ...prevProduct,
      description: value,
    }));

    if (value.length < 20) {
      setDescError("Description must be longer than 20 characters");
    } else {
      setDescError(null);
    }
  };

  const priceHandle = (event) => {
    setProduct((prevProduct) => ({
      ...prevProduct,
      price: event.target.value,
    }));
  };

  const categoryHandle = (event) => {
    setProduct((prevProduct) => ({
      ...prevProduct,
      category: event.target.value,
    }));
  };

  const formSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:3001/products/${params.id}`, {
        id: params.id,
        title: product.title,
        description: product.description,
        price: product.price,
        category: product.category,
      })
      .then((data) => console.log(data));
    navigate("/dashboard/products");
  };

  return (
    <div className="edit-product">
      <h1>Edit Product</h1>
      <form onSubmit={formSubmit}>
        <div>
          <label>Product Title</label>
          <input
            placeholder="Enter Product Title"
            type="text"
            required
            value={product.title}
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
            value={product.description}
            onChange={descHandle}
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
            value={product.price}
            onChange={priceHandle}
          />
        </div>
        <div>
          <label> Product category</label>
          <input
            type="text"
            placeholder="Enter Category"
            value={product.category}
            onChange={categoryHandle}
          />
        </div>
        <button id="edit-product">Edit Product</button>
      </form>
    </div>
  );
}

export default EditProduct;