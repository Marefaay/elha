import { useEffect, useState } from "react";
import Filters from "./Filters";
import ProductsList from "./ProductsList";
import FilterBy from "./FilterBy";
import MainSectionBuyNow from "./MainSectionBuyNow";
import SectionTitle from "./SectionTitle.js";
import "./BuyNow.css"
function BuyNow(props) {
  props.showNavAndFoot(true);
  props.showDashNav(false)
  const [filterItem, setFilterItem] = useState("all");
  // const url = "https://fakestoreapi.com/products/categories";
  // const [catgories, setCategories] = useState([]);
  // useEffect(() => {
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((data) => setCategories(data))
  //     .catch((err) => console.log(err));
  // });
  // console.log(catgories);
  // const categors = catgories.map((category) => {
  //   return <h6>{category}</h6>;
  // });
  return (
    <>
      <div className="main ">
        <MainSectionBuyNow />
      </div>
      <div className="section-title pt-4 pb-4">
        <SectionTitle title="Our Products" margin="auto" />
      </div>
      <div className="buy-now">
        <div className="container">
        <Filters setFilterItem={setFilterItem} />
        <ProductsList filterItem={filterItem} />
          {/* <div className="row">
            <div className="col-lg-9">
              <ProductsList filterItem={filterItem} />
            </div> */}
            {/* <div className="col-lg-3">
              <FilterBy />
            </div> */}
          </div>
        {/* </div> */}
      </div>
    </>
  );
}
export default BuyNow;
