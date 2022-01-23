import { ShopActionTypes } from "./shop.types";

const INITIAL_STATE = {
  collections: null,
  isFatching: false,
  error: undefined,
};

export const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.FETCH_COLLECTIONS_START:
      return{
        ...state,
        isFatching: true,
      }
    case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        collections: action.payload,
      };
      case ShopActionTypes.FETCH_COLLECTIONS_FAILURE:
        return {
          ...state,
          error: action.payload
        }
    default:
      return state;
  }
};
