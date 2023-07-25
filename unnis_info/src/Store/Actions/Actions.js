import ACTIONS_TYPES from "../Constans/ActionTypes";

const BASE_URL = 'http://52.74.126.149:9696'
const {PRODUCT, REVIEW, FEED, EVENT, USER} = ACTIONS_TYPES


export const logout = () => ({
    type: USER.LOGIN_GET_LOGOUT
})
export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({type: USER.LOGIN_GET_START})
        const response = await fetch(`${BASE_URL}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify({email, password})
        })
        if(!response.ok){
            throw new Error('Internal server error')
        }

        const data = await response.json()
        dispatch({
            type: USER.LOGIN_GET_SUCCESS,
            payload: data
        })
    } catch (error) {
        console.log('error login');
        dispatch({
            type: USER.LOGIN_GET_FAILED,
            payload: error
        })
    }
}

export const getProductCategory = () => async (dispatch) => {
    try {
        dispatch({type: PRODUCT.GET_PRODUCT_CATEGORY_START})
        const response = await fetch(`${BASE_URL}/product/productCategory`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (!response.ok) {
            throw new Error('Internal server error')
        }

        const data = await response.json()
        dispatch({
            type: PRODUCT.GET_PRODUCT_CATEGORY_SUCCESS,
            payload: data
        })
    } catch (error) {
        console.log('error get data', error);
        dispatch({
            type: PRODUCT.GET_PRODUCT_CATEGORY_FAILED,
            payload: error
        })
    }
}

export const getListProduct = () => async (dispatch) => {
    try {
        dispatch({type: PRODUCT.GET_LIST_PRODUCT_START})
        const response = await fetch(`${BASE_URL}/product/listProductByLogin/0_`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (!response.ok) {
            throw new Error('Internal server error')
        }

        const data = await response.json()
        dispatch({
            type: PRODUCT.GET_LIST_PRODUCT_SUCCESS,
            payload: data
        })
    } catch (error) {
        console.log('error get data', error);
        dispatch({
            type: PRODUCT.GET_LIST_PRODUCT_FAILED,
            payload: error
        })
    }
}

export const getTopProduct = () => async (dispatch) => {
    try {
        dispatch({type: PRODUCT.GET_TOP_PRODUCT_START})
        const response = await fetch(`${BASE_URL}/product/topProduct`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (!response.ok) {
            throw new Error('Internal server error')
        }

        const data = await response.json()
        dispatch({
            type: PRODUCT.GET_TOP_PRODUCT_SUCCESS,
            payload: data
        })
    } catch (error) {
        console.log('error get data', error);
        dispatch({
            type: PRODUCT.GET_TOP_PRODUCT_FAILED,
            payload: error
        })
    }
}

export const getAllReview = () => async (dispatch) => {
    try {
        dispatch({type: REVIEW.GET_ALL_REVIEW_START})
        const response = await fetch(`${BASE_URL}/reviewSub/listAllReviewMobile/0`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if(!response.ok) {
            throw new Error ('internal server error')
        }

        const data = await response.json()
        dispatch({
            type: REVIEW.GET_ALL_REVIEW_SUCCESS,
            payload: data
        })
    } catch (error) {
        console.log('error get data', error);
        dispatch({type: REVIEW.GET_ALL_REVIEW_FAILED, payload: error})
    }
}

export const getAllFeed = () => async (dispatch) => {
    try {
        dispatch({type: FEED.GET_ALL_FEED_START})
        const response = await fetch(`${BASE_URL}/feed/listFeedVisible`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if(!response.ok) {
            throw new Error ('internal server error')
        }

        const data = await response.json()
        dispatch({
            type: FEED.GET_ALL_FEED_SUCCESS,
            payload: data
        })
    } catch (error) {
        console.log('error get data', error);
        dispatch({type: FEED.GET_ALL_FEED_FAILED, payload: error})
    }
}

export const getEvent = () => async (dispatch) => {
    try {
        dispatch({type: EVENT.GET_DATA_EVENT_START})
        const response = await fetch(`${BASE_URL}/events/listEvent`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (!response.ok){
            throw new Error("internal Server error")
        }

        const data = await response.json()
        dispatch({
            type: EVENT.GET_DATA_EVENT_SUCCESS,
            payload: data
        })
        return data
    } catch (error){
        console.log('error get data',error);
        dispatch({
            type: EVENT.GET_DATA_EVENT_FAILED,
            payload: error
        })
    }
}