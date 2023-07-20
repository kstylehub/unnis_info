import ACTION_TYPES from "../Constans/ActionTypes"

const { EVENT } = ACTION_TYPES

const defaultValue ={
    event:[],
    error:null,
    loading:true,
}
export function ReducerEventData(
    state=defaultValue,
    action,
){
    switch (action.type) {
        case EVENT.GET_DATA_EVENT_START:
            return {...state, loading: true }
        case EVENT.GET_DATA_EVENT_FAILED:
            return {...state, error: action.payload, loading:false }
        case EVENT.GET_DATA_EVENT_SUCCESS:
            return {...state, event: action.payload, loading:false }
    
        default:
            return state;
    }
}