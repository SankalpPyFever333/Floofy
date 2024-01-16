
import {thunk} from "redux-thunk"
import { applyMiddleware, createStore } from "redux";
import Product_Counter_Reducer from "./Reducer/reducer";
const store = createStore(Product_Counter_Reducer , applyMiddleware(thunk));

export default store;



