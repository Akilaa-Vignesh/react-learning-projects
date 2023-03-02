import { Link } from "react-router-dom";
import "./ProductsList.css";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { cartReducer } from "../stores/products/ProductSlice";
import { productList } from "../assets/MockData";
import { Fragment } from "react";

export default function ProductsList() {
  const productsList = productList;
  const carts = useSelector((state) => state.product.cart);
  const dispatch = useDispatch();

  return (
    <Fragment>
      <h2>Products List</h2>
      <ul>
        {productsList.map((product, index) => {
          return (
            <li key={index}>
              <span className="product-name">{product}</span>
              <button
                onClick={() =>
                  dispatch(cartReducer({ id: nanoid(), cart: product }))
                }
              >
                +Add
              </button>
            </li>
          );
        })}
      </ul>
      <Link to="/cart">
        <button className="float-right">Go to Cart({carts.length})</button>
      </Link>
    </Fragment>
  );
}
