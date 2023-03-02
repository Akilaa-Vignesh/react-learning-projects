import { Fragment } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const OrderConfirmation = () => {
  const carts = useSelector((state) => state.product.cart);
  const { state } = useLocation();

  const submitOrderHandler = (event) => {
    event.preventDefault();
    if(carts.length>0) {
    alert("Order placed successfully");
    }
    else {
      alert("Add items in your cart!")
    }
  };

  return (
    <Fragment>
      <h1>Order Summary</h1>
      <h2> Item(s) in your cart</h2>
      {carts.map((product, index) => (
        <div key={index}>
          <h3>{product.cart}</h3>
        </div>
      ))}
      <div>
        <span>Pay by </span>
        <span className="bold">{state.paymentMethod}</span>
      </div>
      <button
        className="float-right"
        type="submit"
        onClick={submitOrderHandler}
      >
        Place order
      </button>
    </Fragment>
  );
};
export default OrderConfirmation;
