import ACTION_TYPES from "../Constans/ActionTypes"

const { COMMUNITY } = ACTION_TYPES

const defaultValue ={
    Community:[],
    error:null,
    loading:true,
}
export function ReducerAllCommunity(
    state=defaultValue,
    action,
){
    switch (action.type) {
        case COMMUNITY.GET_DATA_COMMUNITY_START:
            return {...state, loading: true }
        case COMMUNITY.GET_DATA_COMMUNITY_FAILED:
            return {...state, error: action.payload, loading:false }
        case COMMUNITY.GET_DATA_COMMUNITY_SUCCESS:
            return {...state, Community: action.payload.data, loading:false }
        default:
            return state;
    }
}