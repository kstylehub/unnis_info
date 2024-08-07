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

const defaultValue3 ={
    dataReportThread:[],
    error:null,
    loading:true,
}
export function ReducerReportThread(
    state=defaultValue3,
    action,
){
    switch (action.type) {
        case COMMUNITY.POST_REPORT_THREAD_START:
            return {...state, loading: true }
        case COMMUNITY.POST_REPORT_THREAD_FAILED:
            return {...state, error: action.payload, loading:false }
        case COMMUNITY.POST_REPORT_THREAD_SUCCESS:
            return {...state, dataReportThread: action.payload.data, loading:false }
        default:
            return state;
    }
}

const defaultValue4 ={
    dataReportReply:[],
    error:null,
    loading:true,
}
export function ReducerReportReply(
    state=defaultValue4,
    action,
){
    switch (action.type) {
        case COMMUNITY.POST_REPORT_THREAD_START:
            return {...state, loading: true }
        case COMMUNITY.POST_REPORT_THREAD_FAILED:
            return {...state, error: action.payload, loading:false }
        case COMMUNITY.POST_REPORT_THREAD_SUCCESS:
            return {...state, dataReportReply: action.payload.data, loading:false }
        default:
            return state;
    }
}

const defaultValueLikeThread ={
    dataLikeThread:[],
    error:null,
    loading:true,
}
export function ReducerLikeThreadCommunity (
    state=defaultValueLikeThread,
    action,
){
    switch (action.type) {
        case COMMUNITY.POST_LIKE_THREAD_START:
            return {...state, loading: true }
        case COMMUNITY.POST_LIKE_THREAD_FAILED:
            return {...state, error: action.payload, loading:false }
        case COMMUNITY.POST_LIKE_THREAD_SUCCESS:
            return {...state, dataLikeThread: action.payload.data, loading:false }
        default:
            return state;
    }
}

const defaultValueDislikeThread ={
    dataDislikeThread:[],
    error:null,
    loading:true,
}
export function ReducerDislikeThreadCommunity (
    state=defaultValueDislikeThread,
    action,
){
    switch (action.type) {
        case COMMUNITY.POST_DISLIKE_THREAD_START:
            return {...state, loading: true }
        case COMMUNITY.POST_DISLIKE_THREAD_FAILED:
            return {...state, error: action.payload, loading:false }
        case COMMUNITY.POST_DISLIKE_THREAD_SUCCESS:
            return {...state, dataDislikeThread: action.payload.data, loading:false }
        default:
            return state;
    }
}

const defaultValueLikeReply={
    dataLikeReply:[],
    error:null,
    loading:true,
}
export function ReducerLikeReplyCommunity (
    state=defaultValueLikeReply,
    action,
){
    switch (action.type) {
        case COMMUNITY.POST_LIKE_REPLY_START:
            return {...state, loading: true }
        case COMMUNITY.POST_LIKE_REPLY_FAILED:
            return {...state, error: action.payload, loading:false }
        case COMMUNITY.POST_LIKE_REPLY_SUCCESS:
            return {...state, dataLikeReply: action.payload.data, loading:false }
        default:
            return state;
    }
}

const defaultValueDislikeReply ={
    dataDislikeReply:[],
    error:null,
    loading:true,
}
export function ReducerDislikeReplyCommunity (
    state=defaultValueDislikeReply,
    action,
){
    switch (action.type) {
        case COMMUNITY.POST_DISLIKE_REPLY_START:
            return {...state, loading: true }
        case COMMUNITY.POST_DISLIKE_REPLY_FAILED:
            return {...state, error: action.payload, loading:false }
        case COMMUNITY.POST_DISLIKE_REPLY_SUCCESS:
            return {...state, dataDislikeReply: action.payload.data, loading:false }
        default:
            return state;
    }
}