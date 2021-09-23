import React from "react";
import './CartIcon.scss'
import {ReactComponent as ShopingIcon} from "../../Asset/shopping-bag.svg";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.action";


const CartIcon = ({toggleCartHidden}) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShopingIcon className="shoping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};


const mapDispatchToProps = dispatch => ({
    toggleCartHidden: ()=> dispatch(toggleCartHidden())
})
export default connect(null, mapDispatchToProps)(CartIcon);
