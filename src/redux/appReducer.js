import * as t from "./actionTypes";

const initialState = {
  loading: false,
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case t.SHOW_LOADER:
      return { ...state, loading: true };
    case t.HIDE_LOADER:
      return { ...state, loading: false };
    default:
      return state;
  }
};
