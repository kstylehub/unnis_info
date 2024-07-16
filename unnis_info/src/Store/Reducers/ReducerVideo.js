import ACTION_TYPES from "../Constans/ActionTypes";

const { VIDEO } = ACTION_TYPES;

const defaultValue = {
  idVideo: [],
  error: null,
  loading: true,
};
export function ReducerVideoByIdMemberYoutube(state = defaultValue, action) {
  switch (action.type) {
    case VIDEO.GET_DATA_VIDEO_START:
      return { ...state, loading: true };
    case VIDEO.GET_DATA_VIDEO_FAILED:
      return { ...state, error: action.payload, loading: false };
    case VIDEO.GET_DATA_VIDEO_SUCCESS:
      return { ...state, idVideo: action.payload, loading: false };

    default:
      return state;
  }
}

const videoValue = {
  videoInstagram: [],
  error: null,
  loading: true,
};
export function ReducerVideoByIdMemberInstagram(state = videoValue, action) {
  switch (action.type) {
    case VIDEO.GET_DATA_VIDEO_INSTAGRAM_START:
      return { ...state, loading: true };
    case VIDEO.GET_DATA_VIDEO_INSTAGRAM_FAILED:
      return { ...state, error: action.payload, loading: false };
    case VIDEO.GET_DATA_VIDEO_INSTAGRAM_SUCCESS:
      return { ...state, videoInstagram: action.payload, loading: false };

    default:
      return state;
  }
}

const videoUnnisValue = {
  videoUnnis: [],
  error: null,
  loading: true,
};
export function ReducerVideoByIdMemberUnnis(state = videoUnnisValue, action) {
  switch (action.type) {
    case VIDEO.GET_DATA_VIDEO_UNNIS_START:
      return { ...state, loading: true };
    case VIDEO.GET_DATA_VIDEO_UNNIS_FAILED:
      return { ...state, error: action.payload, loading: false };
    case VIDEO.GET_DATA_VIDEO_UNNIS_SUCCESS:
      return { ...state, videoUnnis: action.payload.data, loading: false };

    default:
      return state;
  }
}

const valueProductRecommen = {
  productrecommen: [],
  error: null,
  loading: true,
};
export function ReducerProductRecommendationVideo(
  state = valueProductRecommen,
  action
) {
  switch (action.type) {
    case VIDEO.GET_DATA_VIDEO_PRODUCT_RECOMMENDATION_START:
      return { ...state, loading: true };
    case VIDEO.GET_DATA_VIDEO_PRODUCT_RECOMMENDATION_FAILED:
      return { ...state, error: action.payload, loading: false };
    case VIDEO.GET_DATA_VIDEO_PRODUCT_RECOMMENDATION_SUCCESS:
      return { ...state, productrecommen: action.payload.data, loading: false };
    default:
      return state;
  }
}

const valueProduct = {
  productVideo: [],
  error: null,
  loading: true,
};
export function ReducerProductVideo(state = valueProduct, action) {
  switch (action.type) {
    case VIDEO.GET_DATA_VIDEO_PRODUCT_START:
      return { ...state, loading: true };
    case VIDEO.GET_DATA_VIDEO_PRODUCT_FAILED:
      return { ...state, error: action.payload, loading: false };
    case VIDEO.GET_DATA_VIDEO_PRODUCT_SUCCESS:
      return { ...state, productVideo: action.payload, loading: false };
    default:
      return state;
  }
}

const dafaultInfluencer = {
  videoInfluencer: [],
  error: null,
  loading: true,
};
export function ReducerVideoInfluencer(state = dafaultInfluencer, action) {
  switch (action.type) {
    case VIDEO.GET_DATA_VIDEO_INFLUENCER_START:
      return { ...state, loading: true };
    case VIDEO.GET_DATA_VIDEO_INFLUENCER_FAILED:
      return { ...state, error: action.payload, loading: false };
    case VIDEO.GET_DATA_VIDEO_INFLUENCER_SUCCESS:
      return { ...state, videoInfluencer: action.payload, loading: false };
    default:
      return state;
  }
}
