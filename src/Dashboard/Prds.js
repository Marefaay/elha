import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../fontAwesome";
import "./Products.css";
import { Link } from "react-router-dom";
import DashHeading from "./DashHeading";
import Swal from "sweetalert2";
function Products(props) {
  props.showNavAndFoot(false);
  props.showDashNav(true);

  const edit = document.getElementById("edit");
  console.log(edit);
  const url = "http://localhost:3001/products";
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getAllProducts();
  }, []);
  const getAllProducts = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setProducts(data));
  };
  const deleteproduct = (product) => {
    Swal.fire({
      title: `Are you sure You want to Delete "${product.title}"? `,
      icon: "warning",
      showCancelButton: true,
      iconColor: "#4a068a",
    }).then((data) => {
      if (data.isConfirmed) {
        fetch(`http://localhost:3001/products/${product.id}`, {
          method: "DELETE",
        })
          .then((response) => response.json())
          .then(() => getAllProducts());
        console.log(`${product.id}`);
      }
    });
  };

  // console.log(products)
  const product = products.map((prd) => {
    return (
      <tr>
        <td>
          <FontAwesomeIcon
            icon="fa-solid fa-trash"
            color="red"
            fontSize={"22px"}
            onClick={() => deleteproduct(prd)}
          />
        </td>
        <td>{prd.id}</td>
        <td>{prd.title}</td>
        <td>
          <Link to={`/${prd.id}`}>
            <FontAwesomeIcon
              icon="fa-solid fa-eye"
              color="blueviolet"
              fontSize={"22px"}
            />
          </Link>
        </td>
        <td>{prd.category}</td>
        <td>{prd.price}</td>
        <td>
          <Link to={`/dashboard/products/edit/${prd.id}`} id="edit">
            <FontAwesomeIcon
              icon="fa-solid fa-pen-to-square"
              color="green"
              fontSize={"22px"}
            />{" "}
          </Link>
        </td>
      </tr>
    );
    // console.log(prd)
  });
  //   console.log(product)
  return (
    <div className="all-products-dash">
      <div className="container">
        <DashHeading type="products" />

     <div className="overflow">
     <table>
          <thead>
            <tr>
              <th>Delete</th>
              <th> id</th>
              <th> title</th>
              <th>view</th>
              <th> category</th>
              <th> price</th>
              <th> edit</th>
            </tr>
          </thead>
          <tbody>{product}</tbody>
        </table>
     </div>
      </div>
    </div>
  );
}
export default Products;
