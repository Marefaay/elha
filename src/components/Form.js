import { useState } from "react";
import "./Form.css";
function FormSection() {
  const [email, setEmail] = useState("");
  const [textarea, setTextarea] = useState("");
  const [emailError, setEmailError] = useState(null);
  const [textError, setTextError] = useState(null);
  const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
    console.log(gmailRegex.test(value));
    if (gmailRegex.test(value) == false) {
      setEmailError(' Email must be as "name@gmail.com "');
    } else {
      setEmailError(null);
    }
  };

  const handleTextareaChange = (event) => {
    const value = event.target.value;
    setTextarea(value);
    if (value.length <= 20) {
      setTextError("Message must be at least 20 characters");
    } else {
      setTextError(null);
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (gmailRegex.test(email) == true) {
      event.currentTarget.submit();
    }
    if (textarea > 20) {
      event.currentTarget.submit();
    }
    console.log(textarea, email);
    // alert(textarea, email);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <br />
        <input
          type="email"
          placeholder="Enter Your Email"
          required
          onChange={handleEmailChange}
        />
        {emailError != null ? (
          <span style={{ color: "red" }}>{emailError}</span>
        ) : null}
        <br />
        <br />
        <label>Message</label>
        <br />
        <textarea
          placeholder="Enter Your Message "
          required
          onChange={handleTextareaChange}
        ></textarea>
        {textError != null ? (
          <span style={{ color: "red" }}>{textError}</span>
        ) : null}
        <br />
        <br />
        <button type="submit">Send</button>
      </form>
    </>
  );
}
export default FormSection;
