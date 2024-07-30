import ACTIONS_TYPES from "../Constans/ActionTypes";

const {USER} = ACTIONS_TYPES

const defaultValue = {
    dataUser: null,
    error: null,
    loading: true
}

export function ReducerUser(state = defaultValue, action) {
    switch (action.type) {
        case USER.LOGIN_GET_START:
            return {...state, loading: true}
        case USER.LOGIN_GET_FAILED:
            return {...state, loading: false, error: action.payload}
        case USER.LOGIN_GET_SUCCESS:
            return {...state, loading: false, dataUser: action.payload}
        case USER.LOGIN_GET_LOGOUT:
            return {...state, dataUser: null, error: null}
        default:
            return state;
    }
}

const register = {
    dataRegister: null,
    error: null,
    loading: true
}

export function ReducerUserRegister(state = register, action) {
    switch (action.type) {
        case USER.REGISTER_GET_START:
            return {...state, loading: true}
        case USER.REGISTER_GET_FAILED:
            return {...state, loading: false, error: action.payload}
        case USER.LOGIN_GET_SUCCESS: 
            return {...state, loading: false, dataRegister: action.payload}
        default:
            return state
    }
}

const delAccont = {
    dataDelAccount: null,
    error: null,
    loading: true
}

export function ReducerDeleteAccount(state = delAccont, action) {
    switch (action.type) {
        case USER.DELETE_ACCOUNT_START:
            return {...state, loading: true}
        case USER.DELETE_ACCOUNT_FAILED:
            return {...state, loading: false, error: action.payload}
        case USER.DELETE_ACCOUNT_SUCCESS: 
            return {...state, loading: false, dataDelAccount: action.payload}
        default:
            return state
    }
}