import ACTION_TYPES from "../Constans/ActionTypes"

const { VIDEO } = ACTION_TYPES

const defaultValue ={
    idVideo:[],
    error:null,
    loading:true,
}
export function ReducerVideoByIdMember(
    state=defaultValue,
    action,
){
    switch (action.type) {
        case VIDEO.GET_DATA_VIDEO_START:
            return {...state, loading: true }
        case VIDEO.GET_DATA_VIDEO_FAILED:
            return {...state, error: action.payload, loading:false }
        case VIDEO.GET_DATA_VIDEO_SUCCESS:
            return {...state, idVideo: action.payload.data, loading:false }
    
        default:
            return state;
    }
}