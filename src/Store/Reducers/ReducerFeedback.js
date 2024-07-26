import ACTIONS_TYPES from "../Constans/ActionTypes";

const {FEEDBACK} = ACTIONS_TYPES

const defaultValue = {
    dataFeedback: null,
    error: null,
    loading: true
}

export function ReducerFeedback(state = defaultValue, action) {
    switch (action.type) {
        case FEEDBACK.POST_FEEDBACK_START:
            return {...state, loading: true}
        case FEEDBACK.POST_FEEDBACK_FAILED:
            return {...state, loading: false, error: action.payload}
        case FEEDBACK.POST_FEEDBACK_SUCCESS:
            return {...state, loading: false, dataFeedback: action.payload}
        default:
            return state;
    }
}
