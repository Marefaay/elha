import Filters from "./Filters";
import ProductsList from "./ProductsList";

function Products() {
  return (
    <>
    <div className="container pt-5">
   
    <Filters />
    <ProductsList/>
    </div>
    
    </>
  );
}
export default Products;
