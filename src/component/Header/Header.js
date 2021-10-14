import React from "react";
import { connect } from "react-redux";
import { ReactComponent as Logo } from "../../Asset/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../CartIcon/CartIcon";
import CartDropDown from "../CartDropDown/CartDropDown";
import "./Header.scss";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import {
  HeaderContainer,
  LogoContainer,
  OptionLink,
  OptionsContainer,
} from "./Header.styles";

const Header = ({ currentUser, cartHidden }) => {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">SHOP</OptionLink>
        <OptionLink to="/contact">CONTACT</OptionLink>
        {currentUser ? (
          <OptionLink as="div" onClick={() => auth.signOut()}>
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink to="/login">LOGIN</OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>

      {cartHidden ? null : <CartDropDown />}
    </HeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  cartHidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
