import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import reducer from "./root-reducer";
import { persistStore } from "redux-persist";

const middleware = [logger];

export const store = createStore(reducer, applyMiddleware(...middleware));

 export const persistor = persistStore(store);


