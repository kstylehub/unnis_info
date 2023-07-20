import ACTION_TYPES from "../Constans/ActionTypes"

const { FEED } = ACTION_TYPES

const defaultValue = {
    dataFeed: [],
    error: null,
    loading: true
}

export function ReducerFeed(state= defaultValue, action){
    switch (action.type) {
        case FEED.GET_ALL_FEED_START:
            return{...state, loading: true}
        case FEED.GET_ALL_FEED_FAILED: 
            return{...state, error: action.payload, loading: false}
        case FEED.GET_ALL_FEED_SUCCESS:
            return{...state, dataFeed: action.payload, loading: false}
        default:
            return state
    }
}