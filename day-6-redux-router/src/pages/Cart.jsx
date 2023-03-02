import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Fragment } from "react";

const Cart = () => {
  const carts = useSelector((state) => state.product.cart);

  return (
    <Fragment>
      <h2>Cart</h2>
      <ul>
        {carts.map((product, index) => (
          <div key={index}>
            <li>{product.cart}</li>
          </div>
        ))}
      </ul>
      {carts.length > 0 && (
        <Link to="/payment">
          <button className="float-right">Proceed to pay</button>
        </Link>
      )}
      {carts.length === 0 && (
        <div>
          <p>Start adding items to your cart!</p>
          <Link to="/">
            <button>Proceed to Product list</button>
          </Link>
        </div>
      )}
    </Fragment>
  );
};
export default Cart;
