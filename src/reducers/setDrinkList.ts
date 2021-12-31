import { REDUCER_TYPE } from "@constants";

export const setDrinkList = (state = "", action: any) => {
  switch (action.type) {
    case REDUCER_TYPE.SET_DRINK_LIST: {
      return action.data;
    }
    default: {
      return state;
    }
  }
};
