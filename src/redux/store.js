import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import reducer from "./root-reducer";
import { persistStore } from "redux-persist";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";

const middleware = [thunk];

 if(process.env.NODE_ENV === 'development'){
     middleware.push(logger);
 }

export const store = createStore(reducer,composeWithDevTools(applyMiddleware(...middleware)) );

 export const persistor = persistStore(store);


