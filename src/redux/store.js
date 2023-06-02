import { createStore } from "redux";
import cartReducers from "./reducers/cart-reducers";

const mystore = createStore(cartReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default mystore;