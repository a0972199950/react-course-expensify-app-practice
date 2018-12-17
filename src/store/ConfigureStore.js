import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import expenseReducer from "../reducers/expenses";
import filterReducer from "../reducers/filters";
import authReducer from "../reducers/auth";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export default () => {
    // combined reducer
    return createStore(combineReducers({
        expenses: expenseReducer,
        filters: filterReducer,
        auth: authReducer
    }), 
    composeEnhancers(applyMiddleware(thunk))
    );
}
