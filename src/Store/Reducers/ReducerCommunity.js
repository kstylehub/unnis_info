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

const defaultValue2 ={
    communityById:[],
    error:null,
    loading:true,
}
export function ReducerCommunityById(
    state=defaultValue2,
    action,
){
    switch (action.type) {
        case COMMUNITY.GET_DATA_COMMUNITY_BY_ID_START:
            return {...state, loading: true }
        case COMMUNITY.GET_DATA_COMMUNITY_BY_ID_FAILED:
            return {...state, error: action.payload, loading:false }
        case COMMUNITY.GET_DATA_COMMUNITY_BY_ID_SUCCESS:
            return {...state, communityById: action.payload.data, loading:false }
        default:
            return state;
    }
}