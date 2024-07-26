import ACTION_TYPES from "../Constans/ActionTypes"

const { BANNER } = ACTION_TYPES

const defaultValue ={
    banner:null,
    error:null,
    loading:true,
}
export function ReducerActiveBanner(
    state=defaultValue,
    action,
){
    switch (action.type) {
        case BANNER.GET_DATA_BANNER_START:
            return {...state, loading: true }
        case BANNER.GET_DATA_BANNER_FAILED:
            return {...state, error: action.payload, loading:false }
        case BANNER.GET_DATA_BANNER_SUCCESS:
            return {...state, banner: action.payload.data, loading:false }
    
        default:
            return state;
    }
}