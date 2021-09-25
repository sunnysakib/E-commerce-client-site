import React from "react";
import "./CartIcon.scss";
import { ReactComponent as ShopingIcon } from "../../Asset/shopping-bag.svg";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.action";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

const CartIcon = ({ toggleCartHidden,itemCount }) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShopingIcon className="shoping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

const mapStateToProps = (state) => ({
    itemCount: selectCartItemsCount(state)
  });

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
