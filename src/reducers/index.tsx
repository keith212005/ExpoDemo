// THIRD PARTY IMPORTS
import thunk from "redux-thunk";
import { combineReducers, createStore, applyMiddleware } from "redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistStore, persistReducer } from "redux-persist";

// LOCAL IMPORTS
import { REDUCER_TYPE } from "@constants";
import { saveNetwork } from "./networkReducer";
import { saveUserInfo } from "./saveUserInfo";
import { setDrinkList } from "./setDrinkList";

const appReducer = combineReducers({
  isOnline: saveNetwork,
  userInfo: saveUserInfo,
  drinkList: setDrinkList,
});

const rootReducer = (state: any, action: any) => {
  if (action.type === REDUCER_TYPE.RESET_STORE) {
    state = undefined;
  }
  return appReducer(state, action as any);
};

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  blacklist: [], // navigation will not be persisted
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, applyMiddleware(thunk));
const persistor = persistStore(store);

export { store, persistor };
