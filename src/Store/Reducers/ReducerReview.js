import ACTION_TYPES from "../Constans/ActionTypes"

const { REVIEW } = ACTION_TYPES

const defaultValue = {
    dataReview: [],
    error: null,
    loading: true
}

export function ReducerReview(state= defaultValue, action){
    switch (action.type) {
        case REVIEW.GET_ALL_REVIEW_START:
            return{...state, loading: true}
        case REVIEW.GET_ALL_REVIEW_FAILED: 
            return{...state, error: action.payload, loading: false}
        case REVIEW.GET_ALL_REVIEW_SUCCESS:
            return{...state, dataReview: action.payload, loading: false}
        default:
            return state
    }
}