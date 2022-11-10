export const ADD_ORDER = "ADD_ORDER";

export const addOrderAction = (data) => {
  return { type: ADD_ORDER, payload: data };
};
