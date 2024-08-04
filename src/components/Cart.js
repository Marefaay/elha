function Cart(props) {
  props.showNavAndFoot(true);
  props.showDashNav(false);
  const getCartProducts=()=>{
   
    console.log( window.localStorage.getItem("product"))
     
  }
  getCartProducts()
  return <h1>{props.product.title}</h1>;
}
export default Cart;
