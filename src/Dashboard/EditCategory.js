import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Edit.css";
import axios from "axios";

function EditCatgory(props) {
  props.showNavAndFoot(false);
  props.showDashNav(true);

  const params = useParams();
  const url = "http://localhost:3001/categories";

  const [category, setCategory] = useState({ category: "" });
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${url}/${params.id}`)
      .then((response) => response.json())
      .then((data) => setCategory(data));
  }, [params.id]);

  const categoryHandle = (event) => {
    setCategory({ category: event.target.value });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:3001/categories/${params.id}`, category)
      .then((data) => console.log(data));
    navigate("/dashboard/categories");
  };

  return (
    <div className="edit-catgory">
      <h1>Edit category</h1>
      <form onSubmit={formSubmit}>
        <div>
          <label> New Category</label>
          <input
            type="text"
            placeholder="Enter Category"
            value={category.category}
            onChange={categoryHandle}
          />
        </div>
        <button id="edit-category">Edit category</button>
      </form>
    </div>
  );
}

export default EditCatgory;