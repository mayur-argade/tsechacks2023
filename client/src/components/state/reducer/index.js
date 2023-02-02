import { combineReducers } from "redux";
import amountReducer from "./amountReducer";
import

const reducers = combineReducers({
    amount: amountReducer,
    guestUserDetails: guestUserDetails
})


export default reducers;