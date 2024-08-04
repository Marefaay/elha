import { useEffect, useState } from "react";
import "./Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login(props) {
  props.showDashNav(false);
  props.showNavAndFoot(false);
  const register = document.getElementById("register");
  const loginColor = document.querySelector(".color");
  const loginText = document.querySelector(".login-txt");
  const color = document.querySelector(".login-color");
  const registerColor = document.querySelector(".register-color");
  const registerTxt = document.querySelector(".register-txt");
  console.log(loginColor);
  const [name, setName] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");
  const [nameError, setnameError] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [passError, setPassError] = useState(null);
  const [users, setUsers] = useState([]);
  const registerClick = () => {
    loginColor.classList.add("move-to-left");
    loginText.classList.add("display");
    color.classList.add("display");
    registerColor.classList.remove("display");
    registerTxt.classList.remove("display");
  };
  const loginClick = () => {
    loginColor.classList.remove("move-to-left");

    loginText.classList.remove("display");
    color.classList.remove("display");
    registerColor.classList.add("display");
    registerTxt.classList.add("display");
  };
  const handleRegisterNameChange = (e) => {
    const value = e.currentTarget.value;
    setName(value);
    if (name.length < 10) {
      setnameError("Name Must Be More Than 10 Characters");
    } else {
      setnameError(null);
    }
    console.log(name);
  };
  const handleRegisterEmailChange = (e) => {
    const value = e.currentTarget.value;
    // setEmail(value);
    const regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (value.match(regEx)) {
      setEmail(value);
      setEmailError(null);
    } else {
      setEmailError('The email must be as "mreffay271@gmail.com"');
    }
    // console.log(email);
  };
  const handleRegisterPasswordChange = (e) => {
    const value = e.currentTarget.value;
    const passRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W)[a-zA-Z\d\W]{8,}$/;
    if (value.match(passRegEx)) {
      setPassword(value);
      setPassError(null);
    } else {
      setPassError(
        "Password Must be At least 7 chars And conatin one lower and upper and speical chars"
      );
    }
    console.log(password);
  };
  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:3001/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);
  const usrsId = users.map((user) => user.id);
  const maxId = Math.max(...usrsId, 0);
  const registerFormSubmit = (e) => {
    e.preventDefault();
    if (nameError == null && emailError == null && passError == null) {
      // e.submit();
      axios({
        method: "post",
        url: "http://localhost:3001/users",
        data: {
          id: maxId + 1,
          username: name,
          email,
          password,
        },
      });
      window.localStorage.setItem("userName", name);
    }
    navigate("/");
  };
  return (
    <div className="bg">
      <div className="login">
        <div className="container">
          <div className="row">
            <div className="color"></div>
            <div className="col-lg-6">
              <div className="login-txt">
                <h1>Login</h1>
                <p>Use Your Password And Email To login</p>
                <form>
                  <input type="email" placeholder="Email" />
                  <input type="password" placeholder="Pasword" />
                  <button>Login</button>
                </form>
              </div>
              <div className="register-color display">
                <h1>Welcome Back</h1>
                <p>Use Your Email And Pasword To Use Our Site features</p>
                <button onClick={loginClick}>Login</button>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="login-color">
                <h1>Hello,Friend</h1>
                <p>Use name and email and password to use our site featuures</p>
                <button id="register" onClick={registerClick}>
                  Register
                </button>
              </div>
              <div className="register-txt display">
                <h1>Register</h1>
                <p>Use Your Password And Email To login</p>
                <form onSubmit={registerFormSubmit}>
                  <input
                    type="text"
                    placeholder="Name"
                    onChange={(e) => handleRegisterNameChange(e)}
                  />
                  {nameError != null ? (
                    <span style={{ color: "red", fontSize: "12px" }}>
                      {nameError}
                    </span>
                  ) : null}
                  <input
                    type="email"
                    placeholder="Email"
                    onChange={(e) => handleRegisterEmailChange(e)}
                  />
                  {emailError != null ? (
                    <span style={{ color: "red", fontSize: "12px" }}>
                      {emailError}
                    </span>
                  ) : null}
                  <input
                    type="password"
                    placeholder="Pasword"
                    onChange={(e) => handleRegisterPasswordChange(e)}
                  />
                  {passError != null ? (
                    <span style={{ color: "red", fontSize: "12px" }}>
                      {passError}
                    </span>
                  ) : null}
                  <button>Register</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
