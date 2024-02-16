import { createStore, applyMiddleware } from "redux";
import AddRemoveProductReducer from "../reducers/AddRemoveItemsFromCart.reducer"
import {thunk} from "redux-thunk";

const store = createStore(AddRemoveProductReducer , applyMiddleware(thunk));

export default store;


