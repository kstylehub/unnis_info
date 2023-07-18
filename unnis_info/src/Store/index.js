import { legacy_createStore as createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { ReducerProductCategory, ReducerListProduct } from "./Reducers/Reducer";
const rootReducer = combineReducers({
    ReducerProductCategory,
    ReducerListProduct
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store