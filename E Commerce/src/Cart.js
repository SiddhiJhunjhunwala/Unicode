import React, { Component } from "react";
import "./cart.css";
import Item from "./Item.js";

class Cart extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    var no = 0;
    return (
      <div className="forty">
        <h1>Your Cart</h1>
        No of products:<span className="span">{no}</span>
        <table className="append">
          <tr>
            <td>Product</td>
            <td>Quantity</td>
            <td>Amount</td>
          </tr>
        </table>
        <p className="total">{Item.total}</p>
        <h4>Your order is eligible for free delivery!!</h4>
        <button>Proceed to buy</button>
      </div>
    );
  }
}
export default Cart;
