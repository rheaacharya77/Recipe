import { createStore } from "redux";
import {persistStore} from "redux-persist";
import {composeWithDevTools} from "redux-devtools-extension";

import myReducer from "./reducer";

export const store = createStore(myReducer, composeWithDevTools());

export const persistor = persistStore(store);
export default {store, persistor};