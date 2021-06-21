import { GO_TO } from "./types";
export const goTo = (value) => {
  return {
    type: GO_TO,
    payload: value,
  };
};
