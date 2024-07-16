import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from "redux";
import thunk from "redux-thunk";
import {
  ReducerDetailProduct,
  ReducerProductCategory,
  ReducerListProduct,
  ReducerTopProduct,
  ReducerAllProduct,
  ReducerProductWithPagination,
} from "./Reducers/Reducer";
import { ReducerReview } from "./Reducers/ReducerReview";
import {
  ReducerAllFeedById,
  ReducerFeed,
  ReducerReviewFeed,
} from "./Reducers/ReducerFeed";
import {
  ReducerEventById,
  ReducerEventData,
  ReducerReviewEventById,
} from "./Reducers/ReducerEvent";
import { ReducerUser, ReducerUserRegister } from "./Reducers/ReducerUser";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { ReducerActiveBanner } from "./Reducers/ReducerBanner";
import { ReducerAllInfluencer } from "./Reducers/ReducerInfluencer";
import {
  ReducerProductRecommendationVideo,
  ReducerProductVideo,
  ReducerVideoByIdMemberInstagram,
  ReducerVideoByIdMemberUnnis,
  ReducerVideoByIdMemberYoutube,
  ReducerVideoInfluencer,
} from "./Reducers/ReducerVideo";
import { ReducerAllCommunity } from "./Reducers/ReducerCommunity";
import {
  ReducerRecycleHistory,
  ReducerRecycleLeaderboard,
} from "./Reducers/ReducerRecycle";
import { ReducerFeedback } from "./Reducers/ReducerFeedback";

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
  ReducerVideoByIdMemberYoutube,
  ReducerProductWithPagination,
  ReducerVideoByIdMemberInstagram,
  ReducerVideoByIdMemberUnnis,
  ReducerVideoInfluencer,
  ReducerProductRecommendationVideo,
  ReducerProductVideo,
  ReducerAllCommunity,
  ReducerEventById,
  ReducerReviewEventById,
  ReducerAllFeedById,
  ReducerReviewFeed,
  ReducerRecycleHistory,
  ReducerRecycleLeaderboard,
  ReducerFeedback
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, applyMiddleware(thunk));
const persistor = persistStore(store);

export { store, persistor };
