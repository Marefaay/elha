import "./Categories.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../fontAwesome";
import { useEffect, useState } from "react";
import DashHeading from "./DashHeading";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
function Categories(props) {
  const url = "http://localhost:3001/categories";
  props.showNavAndFoot(false);
  props.showDashNav(true);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getAllCategories();
    // for (let i = 0; i < data.length; i++) {
    //   setCategories(data[i].category);
    //   console.log(data[i].category)
    // }
  }, []);
  const getAllCategories = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setCategories(data));
  };
  const deleteCategory = (category) => {
    Swal.fire({
      title: `Are You Sure You Want To Delete "${category.category}" category`,
      showCancelButton: true,
      icon: "warning",
      iconColor: "#4a068a",
    }).then((data) => {
      if (data.isConfirmed) {
        fetch(`http://localhost:3001/categories/${category.id}`, {
          method: "DELETE",
        })
          .then((response) => response.json())
          .then(() => getAllCategories());
        console.log(`${category.id}`);
      }
    });
  };
  // console.log(categories.type)
  const ctg = categories.map((category) => {
    return (
      <tr>
        <td>
          {" "}
          <FontAwesomeIcon
            icon="fa-solid fa-trash"
            color="red"
            fontSize={"22px"}
            onClick={() => deleteCategory(category)}
          />
        </td>
        <td>{category.category}</td>
        <td>
          <Link to={`/dashboard/categories/edit/${category.id}`}>
            <FontAwesomeIcon
              icon="fa-solid fa-pen-to-square"
              color="green"
              fontSize={"22px"}
            />
          </Link>
        </td>
      </tr>
    );
  });
  return (
    <div className="dash-categories ">
      {/* <div className="d-flex align-items-center justify-content-between p-5 pb-0">
        <div className="heading">
          {" "}
          <h2>All Categories</h2>
        </div>
        <div className="add-category">
          <span>
            <FontAwesomeIcon icon="fa-solid fa-plus" /> Add Category
          </span>
        </div>
      </div> */}
      <DashHeading type="categories" />

     <div className="overflow">
     <table>
        <thead>
          <tr>
            <th>Delete</th>
            <th>Category name</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>{ctg}</tbody>
      </table>
     </div>
    </div>
  );
}
export default Categories;
