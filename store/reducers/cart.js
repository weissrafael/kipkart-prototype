import {
  ADD_LIST_TO_MISSING,
  ADD_PRODUCT,
  ADD_TO_MISSING,
  REMOVE_FROM_MISSING,
  REMOVE_PRODUCT,
  RESET_CART,
  RESET_LIMIT,
  RESET_MISSING_LIST,
  SET_LIMIT,
  SELECT_MARKET,
  CLEAR_MARKET_SELECTION,
  RESET_ALL,
  REMOVE_FROM_LIST,
} from "../actions/cart";

const initialState = {
  cartList: {},
  limit: 99999,
  missingItems: {},
  market: {},
};

function cartReducer(state = initialState, action) {
  const { type, product, barcode, newLimit, createdList, market } = action;
  const { cartList, missingItems } = state;
  const newList = { ...cartList };
  const newMissingItems = { ...missingItems };
  const newCreatedList = { ...createdList };
  const newMarket = { ...market };
  const serialCode = product ? product.barcode : barcode;
  switch (type) {
    case ADD_PRODUCT:
      if (newList[serialCode]) {
        newList[serialCode].quantity += 1;
      } else {
        newList[serialCode] = product;
        newList[serialCode].quantity = 1;
      }
      return {
        ...state,
        cartList: newList,
      };

    case REMOVE_PRODUCT:
      newList[serialCode].quantity -= 1;
      if (newList[serialCode].quantity <= 0) delete newList[serialCode];
      return {
        ...state,
        cartList: newList,
      };

    case REMOVE_FROM_LIST:
      delete newList[serialCode];
      return {
        ...state,
        cartList: newList,
      };

    case RESET_CART:
      return {
        ...state,
        cartList: {},
      };

    case SET_LIMIT:
      return {
        ...state,
        limit: newLimit,
      };

    case RESET_LIMIT:
      return {
        ...state,
        limit: 99999,
      };

    case SELECT_MARKET:
      return {
        ...state,
        market: newMarket,
      };

    case CLEAR_MARKET_SELECTION:
      return {
        ...state,
        market: {
          name: "",
          id: "",
        },
      };

    case ADD_TO_MISSING:
      if (newMissingItems[serialCode]) {
        newMissingItems[serialCode].quantity += 1;
      } else {
        newMissingItems[serialCode] = product;
        newMissingItems[serialCode].quantity = 1;
      }
      return {
        ...state,
        missingItems: newMissingItems,
      };

    case ADD_LIST_TO_MISSING:
      return {
        ...state,
        missingItems: newCreatedList,
      };

    case REMOVE_FROM_MISSING:
      newMissingItems[serialCode].quantity -= 1;
      if (newMissingItems[serialCode].quantity <= 0)
        delete newMissingItems[serialCode];
      return {
        ...state,
        missingItems: newMissingItems,
      };

    case RESET_MISSING_LIST:
      return {
        ...state,
        missingItems: {},
      };

    case RESET_ALL:
      return {
        ...state,
        cartList: {},
        limit: 99999,
        missingItems: {},
      };

    default:
      return state;
  }
}

export default cartReducer;
