import { Fragment } from "react";

const PaymentType = (props) => {
  const {
    onChange: paymentSelectionHandler,
    paymentMethod,
    paymentType,
    id,
  } = props;
  return (
    <div>
      <input
        type="radio"
        onChange={paymentSelectionHandler}
        id={id}
        checked={paymentMethod === paymentType}
        value={paymentType}
      />
      {paymentType}
    </div>
  );
};
export default PaymentType;
