import { legacy_createStore as createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { ReducerProductCategory, ReducerListProduct} from "./Reducers/Reducer";
import { ReducerEventData } from "./Reducers/ReducerEvent";
const rootReducer = combineReducers({
    ReducerProductCategory,
    ReducerListProduct,
    ReducerEventData,
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store