import { legacy_createStore as createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { ReducerDetailProduct, ReducerProductCategory, ReducerListProduct, ReducerTopProduct} from "./Reducers/Reducer";
import {ReducerReview} from "./Reducers/ReducerReview";
import { ReducerFeed } from "./Reducers/ReducerFeed";
import { ReducerEventData, ReducerCommentEvent } from "./Reducers/ReducerEvent";
import { ReducerUser, ReducerUserRegister } from "./Reducers/ReducerUser";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const rootReducer = combineReducers({
    ReducerProductCategory,
    ReducerListProduct,
    ReducerTopProduct,
    ReducerReview,
    ReducerFeed,
    ReducerEventData,
    ReducerUser,
    ReducerUserRegister,
    ReducerDetailProduct,
    ReducerCommentEvent,
})

const persistConfig = {
    key: 'root',
    storage,
  }

  const persistedReducer = persistReducer(persistConfig, rootReducer)
  const store = createStore(persistedReducer, applyMiddleware(thunk))
  const persistor = persistStore(store)

export {store, persistor}