import { createStore  , applyMiddleware} from "redux";
import {thunk} from "redux-thunk";
import Product_Counter_Reducer from "./Reducer/reducer";
const store = createStore(Product_Counter_Reducer , applyMiddleware(thunk));

export default store;

