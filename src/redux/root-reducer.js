import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";

const reducer = combineReducers({ user: userReducer, cart: cartReducer });

export default reducer;
