import ACTION_TYPES from "../Constans/ActionTypes"

const { PRODUCT } = ACTION_TYPES

const defaultValue = {
    productCategory: [],
    error: null,
    loading: false
}

export function ReducerProductCategory(state = defaultValue, action) {
    switch (action.type) {
        case PRODUCT.GET_PRODUCT_CATEGORY_START:
            return { ...state, loading: true }
        case PRODUCT.GET_PRODUCT_CATEGORY_FAILED:
            return { ...state, error: action.payload, loading: false }
        case PRODUCT.GET_PRODUCT_CATEGORY_SUCCESS:
            return { ...state, productCategory: action.payload, loading: false }
        default:
            return state;
    }
}