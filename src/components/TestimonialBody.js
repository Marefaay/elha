import JohnWeek from "./images/OIP.jpg";
import Leonardo from "./images/leonardo.jpg";
import Asmaa from "./images/Asmaa.jpg";
import Yasmin from "./images/yasmin.jpg";
import "./TestimoinalBody.css";
function TestomialBody() {
  return (
    <div className="testimonal-body shadow-lg mt-3 mb-4 rounded">
      <div className="container  ">
        <div className="row">
          <div className="col-lg-3 test">
            <div className="clinet-image">
              <img src={JohnWeek}id="john-image" className="img-fluid h-100 w-100" />
            </div>
          </div>
          <div className="col-lg-3 test">
            <div className="text p-3 pt-5" id="john">
              <p>
                "The user interface of this modal website is incredibly
                intuitive and user-friendly. I was able to navigate through
                different sections seamlessly and find exactly what I needed.
                Highly recommend it!"
              </p>
              <h6>John Week ,Product Manager</h6>
            </div>
          </div>
          <div className="col-lg-3 test">
            <div className="clinet-image">
              <img src={Leonardo} className="img-fluid h-100 w-100" />
            </div>
          </div>
          <div className="col-lg-3 test">
            <div className="text p-3 pt-5" id="leonardo">
              <p>
                "I've been using this modal website for a few months now, and it
                has significantly improved my productivity. The smooth
                transitions and clean design make it a pleasure to use every
                day."
              </p>
              <h6>Lenoardo Decaprio , Software Developer</h6>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 test">
            <div className="text p-3  pt-5 "id="asmaa">
              <p>
                "The user interface of this modal website is incredibly
                intuitive and user-friendly. I was able to navigate through
                different sections seamlessly and find exactly what I needed.
                Highly recommend it!"
              </p>
              <h6>Asmaa Galal ,Front Ebd Developer</h6>
            </div>
          </div>
          <div className="col-lg-3 test">
            <div className="clinet-image">
              <img src={Asmaa} className="img-fluid h-100 w-100" />
            </div>
          </div>

          <div className="col-lg-3 test">
            <div className="text p-3 pt-5" id="yasmin">
              <p>
                "This is hands down one of the best modal websites I've come
                across. The attention to detail and the focus on user experience
                are evident. Great job to the development team!"
              </p>
              <h6>Yasmin Sabry , Actress</h6>
            </div>
          </div>
          <div className="col-lg-3 test">
            <div className="clinet-image">
              <img src={Yasmin} id="yasmin-image" className="img-fluid h-100" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TestomialBody;
