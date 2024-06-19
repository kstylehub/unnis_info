import { legacy_createStore as createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { ReducerDetailProduct, ReducerProductCategory, ReducerListProduct, ReducerTopProduct, ReducerAllProduct, ReducerProductWithPagination} from "./Reducers/Reducer";
import {ReducerReview} from "./Reducers/ReducerReview";
import { ReducerFeed } from "./Reducers/ReducerFeed";
import { ReducerEventData } from "./Reducers/ReducerEvent";
import { ReducerUser, ReducerUserRegister } from "./Reducers/ReducerUser";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { ReducerActiveBanner } from "./Reducers/ReducerBanner";
import { ReducerAllInfluencer } from "./Reducers/ReducerInfluencer";
import { ReducerVideoByIdMember } from "./Reducers/ReducerVideo";

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
    ReducerAllProduct,
    ReducerActiveBanner,
    ReducerAllInfluencer,
    ReducerVideoByIdMember,
    ReducerProductWithPagination
})

const persistConfig = {
    key: 'root',
    storage,
  }

  const persistedReducer = persistReducer(persistConfig, rootReducer)
  const store = createStore(persistedReducer, applyMiddleware(thunk))
  const persistor = persistStore(store)

export {store, persistor}