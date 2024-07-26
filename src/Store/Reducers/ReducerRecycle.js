import ACTION_TYPES from "../Constans/ActionTypes"

const { RECYCLE } = ACTION_TYPES

const defaultValue ={
    recycleLeaderboard: [],
    error:null,
    loading:true,
}
export function ReducerRecycleLeaderboard(
    state=defaultValue,
    action,
){ 
    switch (action.type) {
        case RECYCLE.GET_ALL_RECYCLE_LEADERBOARD_START:
            return {...state, loading: true }
        case RECYCLE.GET_ALL_RECYCLE_LEADERBOARD_FAILED:
            return {...state, error: action.payload, loading:false }
        case RECYCLE.GET_ALL_RECYCLE_LEADERBOARD_SUCCESS:
            return {...state, recycleLeaderboard: action.payload, loading:false }
    
        default:
            return state;
    }
}

const defaultValue1 ={
    recycleHistory: [],
    error:null,
    loading:true,
}
export function ReducerRecycleHistory(
    state=defaultValue1,
    action,
){ 
    switch (action.type) {
        case RECYCLE.GET_ALL_RECYCLE_HISTORY_START:
            return {...state, loading: true }
        case RECYCLE.GET_ALL_RECYCLE_HISTORY_FAILED:
            return {...state, error: action.payload, loading:false }
        case RECYCLE.GET_ALL_RECYCLE_HISTORY_SUCCESS:
            return {...state, recycleHistory: action.payload, loading:false }
    
        default:
            return state;
    }
}