import React, { Component } from "react";
import Cart from "./Cart";

const Item = props => {
  // document.getElementById("add").addEventListener("click", event => {
  //   var targetElement = event.target || event.srcElement;
  //   console.log(targetElement);

  var cartHandler = function() {
    console.log("Kya bhaav hai");
    const q = document.getElementsByClassName("choose")[0].value;
    const p = props.price;
    const n = props.name;
    console.log(q, p, n);
    let t = Cart.no;
    t = t + q;
    Cart.no = t;
    document.getElementsByClassName("span").innerHTML = t;

    const amount = p * q;
    document.getElementsByClassName("append").innerHTML =
      document.getElementsByClassName("append").innerHTML +
      (
        <tr>
          <td>{n}</td>
          <td>{q}</td>
          <td>{amount}</td>
        </tr>
      );

    let total = Cart.total;
    total = total + amount;
    document.getElementsByClassName("total").innerHTML = { total };
  };

  return (
    <div className="item">
      <img src={props.image}></img>
      <h3 className="name">{props.name}</h3>
      <h3 className="price">{props.price}</h3>
      <p>
        Quantity:
        <select className="choose">
          <option value="1">1</option>
          <option value="1">2</option>
          <option value="1">3</option>
          <option value="1">4</option>
          <option value="1">5</option>
        </select>
      </p>
      <button onClick={cartHandler()} id="add" key={props.id}>
        Add to cart
      </button>
    </div>
  );
};

export default Item;
