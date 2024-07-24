import ACTION_TYPES from "../Constans/ActionTypes"

const { SUBSCRIPTION } = ACTION_TYPES

const defaultValue = {
    dataSubReview: [],
    error: null,
    loading: true
}

export function ReducerSubReview(state= defaultValue, action){
    switch (action.type) {
        case SUBSCRIPTION.REVIEW.GET_ALL_REVIEW_START:
            return{...state, loading: true}
        case SUBSCRIPTION.REVIEW.GET_ALL_REVIEW_FAILED: 
            return{...state, error: action.payload, loading: false}
        case SUBSCRIPTION.REVIEW.GET_ALL_REVIEW_SUCCESS:
            return{...state, dataSubReview: action.payload, loading: false}
        default:
            return state
    }
}