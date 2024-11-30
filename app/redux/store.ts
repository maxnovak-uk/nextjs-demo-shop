import { combineReducers, configureStore  } from "@reduxjs/toolkit";
import counterReducer from "@/app/redux/features/counter/counterSlice";
import cartReducer from "@/app/redux/features/cart/cartSlice";

const rootReducer = combineReducers({
  counter: counterReducer,
  cart: cartReducer
  //add all your reducers here
},);

export const store = configureStore({
  reducer: rootReducer,
 });