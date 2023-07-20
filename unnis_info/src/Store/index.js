import { legacy_createStore as createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { ReducerProductCategory, ReducerListProduct, ReducerTopProduct } from "./Reducers/Reducer";
import {ReducerReview} from "./Reducers/ReducerReview";
import { ReducerFeed } from "./Reducers/ReducerFeed";

const rootReducer = combineReducers({
    ReducerProductCategory,
    ReducerListProduct,
    ReducerTopProduct,
    ReducerReview,
    ReducerFeed
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store