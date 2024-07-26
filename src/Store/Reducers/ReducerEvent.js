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

const defaultValue2 ={
    eventById:[],
    error:null,
    loading:true,
}
export function ReducerEventById(
    state=defaultValue2,
    action,
){
    switch (action.type) {
        case EVENT.GET_EVENT_ID_START:
            return {...state, loading: true }
        case EVENT.GET_EVENT_ID_FAILED:
            return {...state, error: action.payload, loading:false }
        case EVENT.GET_EVENT_ID_SUCCESS:
            return {...state, eventById: action.payload, loading:false }
    
        default:
            return state;
    }
}

const defaultValue3 ={
    eventReviewById:[],
    error:null,
    loading:true,
}
export function ReducerReviewEventById(
    state=defaultValue3,
    action,
){
    switch (action.type) {
        case EVENT.GET_EVENT_REVIEW_ID_START:
            return {...state, loading: true }
        case EVENT.GET_EVENT_REVIEW_ID_FAILED:
            return {...state, error: action.payload, loading:false }
        case EVENT.GET_EVENT_REVIEW_ID_SUCCESS:
            return {...state, eventReviewById: action.payload, loading:false }
    
        default:
            return state;
    }
}