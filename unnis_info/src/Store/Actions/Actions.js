import ACTIONS_TYPES from "../Constans/ActionTypes";

const BASE_URL = 'http://52.74.126.149:9696'
const {PRODUCT} = ACTIONS_TYPES

export const getProductCategory = () => async (dispatch) => {
    try {
        dispatch({type: PRODUCT.GET_PRODUCT_CATEGORY_START})
        const response = await fetch(`${BASE_URL}/product/productCategory`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        console.log(response, "ini response <<<");
        if (!response.ok) {
            throw new Error('Internal server error')
        }

        const data = await response.json()
        dispatch({
            type: PRODUCT.GET_PRODUCT_CATEGORY_SUCCESS,
            payload: data
        })
        return data
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
        console.log(data, "< list prpoduct");
        dispatch({
            type: PRODUCT.GET_LIST_PRODUCT_SUCCESS,
            payload: data
        })
        return data
    } catch (error) {
        console.log('error get data', error);
        dispatch({
            type: PRODUCT.GET_LIST_PRODUCT_FAILED,
            payload: error
        })
    }
}