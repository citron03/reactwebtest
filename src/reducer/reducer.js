import { ADD_ORDER } from "../actions/ordersAction";
import { combineReducers } from "redux";

const initialState = {
  orders: ["init"],
};

const ordersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ORDER:
      return { orders: [...state.orders, action.payload] };
    default:
      return state;
  }
};

export default combineReducers({ ordersReducer });
