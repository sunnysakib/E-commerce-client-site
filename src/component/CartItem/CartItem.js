import React from "react";
import "./CartItem.scss";

const CartItem = ({ item }) => {
  const { imageUrl, name, price, quantity } = item;
  return (
    <div className="cart-item">
      <img src={imageUrl} alt="item-image" />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">{`${quantity} X ${price}`}</span>
      </div>
    </div>
  );
};

export default CartItem;