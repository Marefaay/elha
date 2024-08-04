import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../fontAwesome";
import "./Users.css";
import { useEffect, useState } from "react";
import DashHeading from "./DashHeading";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
function Users(props) {
  props.showNavAndFoot(false);
  props.showDashNav(true);
  const url = "http://localhost:3001/users";
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getAllUsers();
  }, []);
  console.log(users);
  const getAllUsers = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setUsers(data));
  };
  const deleteuser = (user) => {
    Swal.fire({
      title: `Are you sure You want to Delete "${user.username}"? `,
      icon: "warning",
      showCancelButton: true,
      iconColor: "#4a068a",
    }).then((data) => {
      if (data.isConfirmed) {
        fetch(`http://localhost:3001/users/${user.id}`, {
          method: "DELETE",
        })
          .then((response) => response.json())
          .then(() => getAllUsers());
        console.log(`${user.id}`);
      }
    });
  };
  const urs = users.map((user) => {
    return (
      <tr>
        <td>
          <Link>
            <FontAwesomeIcon
              icon="fa-solid fa-trash"
              color="red"
              fontSize={"22px"}
              onClick={() => deleteuser(user)}
            />
          </Link>
        </td>
        <td>{user.id}</td>
        <td>{user.username}</td>
        <td>{user.email}</td>
      </tr>
    );
  });
  return (
    <div className="dash-users ">
      <DashHeading type="Users" />
      <div className="overflow">
        <table>
          <thead>
            <tr>
              <th>Delete</th>
              <th>ID</th>
              <th>UserName</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>{urs}</tbody>
        </table>
      </div>
    </div>
  );
}
export default Users;
