import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import aapReducer from "./slices/app";
import authReducer from "./slices/auth";
import conversatioReducer from "./slices/conversation";

//slices

const rootPeristConfig = {
  key: "root",
  storage,
  keyPrefix: "redux-",
  //whitelist: [],
  //blacklist: [],
};

const rootReducer = combineReducers({
  app: aapReducer,
  auth: authReducer,
  conversation: conversatioReducer,
});

export { rootPeristConfig, rootReducer };
