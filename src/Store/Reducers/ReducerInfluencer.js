import ACTION_TYPES from "../Constans/ActionTypes"

const { INFLUENCER } = ACTION_TYPES

const defaultValue ={
    influencer:null,
    error:null,
    loading:true,
}
export function ReducerAllInfluencer(
    state=defaultValue,
    action,
){
    switch (action.type) {
        case INFLUENCER.GET_DATA_INFLUENCER_START:
            return {...state, loading: true }
        case INFLUENCER.GET_DATA_INFLUENCER_FAILED:
            return {...state, error: action.payload, loading:false }
        case INFLUENCER.GET_DATA_INFLUENCER_SUCCESS:
            return {...state, influencer: action.payload.data, loading:false }
        default:
            return state;
    }
}