import "./AboutUsMainSection.css";
function AboutUsMainSection() {
  return (
    <div className="main-about">
      <div className="container">
        <h1>About Us</h1>
        <p>
          We’re here to help and answer any questions you might have. Whether
          you’re looking for more information about our services, need
          assistance with an issue, or want to provide feedback, please feel
          free to reach out to us
        </p>
        <svg id="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319">
          <path
            fill="#8a2be2"
            fill-opacity="1"
            d="M0,256L40,240C80,224,160,192,240,192C320,192,400,224,480,213.3C560,203,640,149,720,154.7C800,160,880,224,960,240C1040,256,1120,224,1200,208C1280,192,1360,192,1400,192L1440,192L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
          ></path>
        </svg>
      </div>
    </div>
  );
}

export default AboutUsMainSection;
