import { combineReducers } from "redux";
import ordersReducer from "./ordersSlice";
import refundsReducer from "./refundsSlice";
import customerReducer from "./customersSlice";

const rootReducer = combineReducers({
  orders: ordersReducer,
  refunds: refundsReducer,
  customers: customerReducer,
});

export default rootReducer;
