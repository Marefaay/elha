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
{
  /* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path
    fill="#4a068a"
    fill-opacity="1"
    d="M0,256L60,250.7C120,245,240,235,360,202.7C480,171,600,117,720,117.3C840,117,960,171,1080,213.3C1200,256,1320,288,1380,304L1440,320L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
  ></path>
</svg>;
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path
    fill="#4a068a"
    fill-opacity="1"
    d="M0,160L60,186.7C120,213,240,267,360,256C480,245,600,171,720,165.3C840,160,960,224,1080,218.7C1200,213,1320,139,1380,101.3L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
  ></path>
</svg>; */
}
