import { Fragment } from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import PaymentType from "./PaymentType";

export default function Payment() {
  const location = useLocation();
  const [paymentMethod, setPaymentMethod] = useState("Cash on Delivery");

  const paymentSelectionHandler = (e) => {
    setPaymentMethod(e.target.value);
  };

  return (
    <Fragment>
      <form>
        <h2>Select a Payment method</h2>
        <PaymentType
          paymentMethod={paymentMethod}
          paymentType="NetBanking"
          onChange={paymentSelectionHandler}
          id="1"
        />
        <PaymentType
          paymentMethod={paymentMethod}
          paymentType="Cash on Delivery"
          onChange={paymentSelectionHandler}
          id="2"
        />
        <PaymentType
          paymentMethod={paymentMethod}
          paymentType="UPI"
          onChange={paymentSelectionHandler}
          id="3"
        />
        <br />
        <div>Selected Payment method : {paymentMethod}</div>
        <br />
        <Link
          to="/orderConfirmation"
          state={{
            ...location.state,
            paymentMethod,
          }}
        >
          <button className="float-right">Confirm order</button>
        </Link>
      </form>
    </Fragment>
  );
}
