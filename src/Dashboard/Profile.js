import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Profile() {
  const params = useParams();
  const url = "https://fakestoreapi.com/users";
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch(`${url}/${params.userId}`)
      .then((response) => response.json())
      .then((data) => setUser(data));
  });
  console.log(params)
  const usr=user.map((us)=>{
    return <h2>{us.username}</h2>
  })
  return <div className="profile">{usr}</div>;
}
export default Profile;

