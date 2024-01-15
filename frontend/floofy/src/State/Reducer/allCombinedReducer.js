import { combineReducers } from "redux";
import Product_Counter_Reducer from "./reducer";


const allCombineReducers = combineReducers({
      Product_reducer: Product_Counter_Reducer
})

export default allCombineReducers;



