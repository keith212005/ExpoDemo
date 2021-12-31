import * as networkListener from "./networkListener";
import * as saveUserInfo from "./saveUserInfo";
import * as setDrinkList from "./setDrinkList";

export const actionCreators = Object.assign(
  {},
  networkListener,
  saveUserInfo,
  setDrinkList
);
