import { GO_TO } from "./types";

const initialState = {
  goTo: null,
};
export const appReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GO_TO:
      return { ...state, goTo: payload };

    default:
      return state;
  }
};
