import React from "react";
import Cart from "./Cart";
import Shop from "./Shop";

const Container = () => {
  const cont = {
    margin: "0",
    padding: "0",
    display: "block"
  };
  return (
    <div style={cont}>
      <Shop></Shop>
      <Cart></Cart>
    </div>
  );
};

export default Container;
