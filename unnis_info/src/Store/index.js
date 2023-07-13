import { legacy_createStore as createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { ReducerProductCategory } from "./Reducers/Reducer";
const rootReducer = combineReducers({
    ReducerProductCategory,
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store