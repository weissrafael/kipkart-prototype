export const ADD_PRODUCT = "ADD_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";
export const RESET_CART = "RESET_CART";
export const SET_LIMIT = "SET_LIMIT";
export const RESET_LIMIT = "RESET_LIMIT";
export const CLEAR_MARKET_SELECTION = "CLEAR_MARKET_SELECTION";
export const SELECT_MARKET = "SELECET_MARKET";
export const ADD_TO_MISSING = "ADD_TO_MISSING";
export const ADD_LIST_TO_MISSING = "ADD_LIST_TO_MISSING";
export const REMOVE_FROM_MISSING = "REMOVE_FROM_MISSING";
export const RESET_MISSING_LIST = "RESET_MISSING_LIST";
export const RESET_ALL = "RESET_ALL";
export const REMOVE_FROM_LIST = "REMOVE_FROM_LIST";

export const addNewProduct = (product) => ({ type: ADD_PRODUCT, product });
export const addProduct = (barcode) => ({ type: ADD_PRODUCT, barcode });
export const removeProduct = (barcode) => ({ type: REMOVE_PRODUCT, barcode });
export const removeFromList = (barcode) => ({
  type: REMOVE_FROM_LIST,
  barcode,
});
export const resetCart = () => ({ type: RESET_CART });
export const resetAll = () => ({ type: RESET_ALL });
export const setLimit = (limit) => ({ type: SET_LIMIT, newLimit: limit });
export const resetLimit = () => ({ type: RESET_LIMIT });
export const addToMissing = (barcode) => ({ type: ADD_TO_MISSING, barcode });
export const addListToMissing = (createdList) => ({
  type: ADD_LIST_TO_MISSING,
  createdList,
});
export const removeFromMissing = (barcode) => ({
  type: REMOVE_FROM_MISSING,
  barcode,
});
export const resetMissingList = () => ({ type: RESET_MISSING_LIST });
export const selectMarket = (market) => ({ type: SELECT_MARKET, market });
export const clearMarketSelection = () => ({ type: CLEAR_MARKET_SELECTION });
