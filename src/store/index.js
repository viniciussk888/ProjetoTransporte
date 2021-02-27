import { createStore } from "redux";
import userReducer from "./userReducer";
import { persistReducer, persistStore } from "redux-persist";

//import storage from "redux-persist/lib/storage";
import AsyncStorage from "@react-native-community/async-storage";
const persistConfig = {
  key: "transp",
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, userReducer);

const store = createStore(persistedReducer);

const persistor = persistStore(store);

export { store, persistor };
