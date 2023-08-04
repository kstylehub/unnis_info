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

const dataComment ={
    commentEvent:[],
    error:null,
    loading:true,
}

export function ReducerCommentEvent(
    state=dataComment,
    action,
){
    switch (action.type){
        case EVENT.GET_DATA_COMMENT_START:
            return {...state, loading: true }
        case EVENT.GET_DATA_COMMENT_FAILED:
            return {...state, error: action.payload, loading:false }
        case EVENT.GET_DATA_COMMENT_SUCCESS:
            return {...state, event: action.payload, loading:false }
        default:
            return state;
    }
}

const postCommentEvent ={
    postComment:[],
    error:null,
    loading:true,
}

export function ReducerComment(
    state=postCommentEvent,
    action,
){
    switch (action.type){
        case EVENT.POST_COMMENT_START:
            return {...state, loading: true }
        case EVENT.POST_COMMENT_FAILED:
            return {...state, error: action.payload, loading:false }
        case EVENT.POST_COMMENT_SUCCESS:
            return {...state, event: action.payload, loading:false }
        default:
            return state;
    }
}