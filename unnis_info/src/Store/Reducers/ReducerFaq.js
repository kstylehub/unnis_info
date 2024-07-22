import ACTION_TYPES from "../Constans/ActionTypes";

const { FAQ } = ACTION_TYPES;

const initialState = {
  dataFaqByCategory: [],
  error: null,
  loading: true,
};

export function ReducerFaqByCategory(state = initialState, action) {
  switch (action.type) {
    case FAQ.GET_FAQ_CATEGORY_START:
      return { ...state, loading: true };
    case FAQ.GET_FAQ_CATEGORY_FAILED:
      return { ...state, error: action.payload, loading: false };
    case FAQ.GET_FAQ_CATEGORY_SUCCESS:
      return { ...state, dataFaqByCategory: action.payload.dataFaq, loading: false };
    default:
      return state;
  }
}
