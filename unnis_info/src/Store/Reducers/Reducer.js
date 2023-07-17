import ACTION_TYPES from "../Constans/ActionTypes"

const { PRODUCT } = ACTION_TYPES

const defaultValue = {
    productCategory: ['SkinCare', 'Cleansing', 'Mask', 'Suncare', 'Face', 'Lip&Eye', 'Body', 'Hair'],
    error: null,
    loading: true
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

const listProductValue = {
    listProduct: [],
    error: null,
    loading: true
}
export function ReducerListProduct(state = listProductValue, action) {
    switch (action.type) {
        case PRODUCT.GET_LIST_PRODUCT_START:
            return { ...state, loading: true }
        case PRODUCT.GET_LIST_PRODUCT_FAILED:
            return { ...state, error: action.payload, loading: false }
        case PRODUCT.GET_LIST_PRODUCT_SUCCESS:
            return { ...state, listProduct: action.payload, loading: false }
        default:
            return state;
    }
}