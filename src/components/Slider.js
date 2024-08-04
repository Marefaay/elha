import { useEffect, useState } from "react";
import "./Slider.css";
function Slider() {
  const [products, setProducts] = useState([]);
  const url = "https://fakestoreapi.com/products?limit=3";
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);
  //   console.log(products);
  //   const slides=products.map((slide)=>{
  //     // console.log(slide)
  //     // console.log(products.length)
  //     if(slide.id===3){
  //         // console.log("stop")
  //         return 0;
  //     }
  //     return;

  //   })
  // console.log(products[0].image)
  const slides = products.map((slide) => {
    return (
      <div className="carousel-item active">
        <div className="row g-0">
          <div className="col-lg-4 col-sm-6 p-4 im">
            <img
              src={slide.image}
              className="img-fluid rounded-start p-5"
              alt="product 1image"
            />
          </div>
          <div className="col-md-8 col-sm-6 tx">
            <div className="card-body p-5">
              <h5 className="card-title text-uppercase w-50 text-dark">
                {slide.title}
              </h5>
              <span className="space"></span>
              <p className="card-desc text-black-50 ">{slide.description}</p>

              <p className="card-text">
                <small className="text-muted">
                  <a href="#" id="view-more">
                    View More Details
                  </a>
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  });
  return (
    <>
      <div
        id="carouselExampleIndicators"
        className="carousel slide "
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">{slides}</div>
        <div className="arrows ">
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
}
export default Slider;
