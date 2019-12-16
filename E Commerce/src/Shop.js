import React, { Component } from "react";
import Item from "./Item";
import "./Shop.css";

class Shop extends Component {
  state = {
    list: [
      {
        id: 1,
        name:
          "Ikall N6 Plus Tablet (7 inch, 8GB, 4G + LTE + Voice Calling) (Black)",
        price: "3999",
        image: require("./images/4.png")
      },
      {
        id: 2,
        name: "Canon EOS 1500D",
        price: "$6854",
        image: require("./images/2.png")
      },
      {
        id: 3,
        name: "Boat Airdopes",
        price: "$799",
        image: require("./images/3.png")
      },
      {
        id: 4,
        name:
          "Sony Extra Bass SRS-XB10 Portable Splash-Proof Wireless Speakers with Bluetooth and NFC",
        price: "$2000",
        image: require("./images/Capture.png")
      },
      {
        id: 5,
        name:
          "SNEHI Sh12 Wireless Bluetooth Headphone with FM and SD Card Slot (Black, Red)",
        price: "$449",
        image: require("./images/5.png")
      }
    ]
  };

  render() {
    return (
      <div className="sixty">
        <Item
          id={this.state.list[0].id}
          name={this.state.list[0].name}
          price={this.state.list[0].price}
          image={this.state.list[0].image}
        ></Item>
        <Item
          id={this.state.list[1].id}
          name={this.state.list[1].name}
          price={this.state.list[1].price}
          image={this.state.list[1].image}
        ></Item>
        <Item
          id={this.state.list[2].id}
          name={this.state.list[2].name}
          price={this.state.list[2].price}
          image={this.state.list[2].image}
        ></Item>
        <Item
          id={this.state.list[3].id}
          name={this.state.list[3].name}
          price={this.state.list[3].price}
          image={this.state.list[3].image}
        ></Item>
        <Item
          id={this.state.list[4].id}
          name={this.state.list[4].name}
          price={this.state.list[4].price}
          image={this.state.list[4].image}
        ></Item>
      </div>
    );
  }
}

export default Shop;
