import { combineReducers  } from "redux";
import ordersReducer from "./ordersSlice";

const rootReducer = combineReducers({
    orders: ordersReducer,
});

export default rootReducer;