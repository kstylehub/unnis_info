import ACTION_TYPES from "../Constans/ActionTypes";

const { PRODUCT } = ACTION_TYPES;

const defaultValue = {
  productCategory: [],
  error: null,
  loading: true,
};

export function ReducerProductCategory(state = defaultValue, action) {
  switch (action.type) {
    case PRODUCT.GET_PRODUCT_CATEGORY_START:
      return { ...state, loading: true };
    case PRODUCT.GET_PRODUCT_CATEGORY_FAILED:
      return { ...state, error: action.payload, loading: false };
    case PRODUCT.GET_PRODUCT_CATEGORY_SUCCESS:
      return { ...state, productCategory: action.payload, loading: false };
    default:
      return state;
  }
}

const listProductValue = {
  listProduct: [],
  error: null,
  loading: true,
};
export function ReducerListProduct(state = listProductValue, action) {
  switch (action.type) {
    case PRODUCT.GET_LIST_PRODUCT_START:
      return { ...state, loading: true };
    case PRODUCT.GET_LIST_PRODUCT_FAILED:
      return { ...state, error: action.payload, loading: false };
    case PRODUCT.GET_LIST_PRODUCT_SUCCESS:
      return { ...state, listProduct: action.payload, loading: false };
    default:
      return state;
  }
}

const listTopProduct = {
  topProduct: [],
  error: null,
  loading: true,
};

export function ReducerTopProduct(state = listTopProduct, action) {
  switch (action.type) {
    case PRODUCT.GET_TOP_PRODUCT_START:
      return { ...state, loading: true };
    case PRODUCT.GET_TOP_PRODUCT_FAILED:
      return { ...state, error: action.payload, loading: false };
    case PRODUCT.GET_TOP_PRODUCT_SUCCESS:
      return { ...state, topProduct: action.payload, loading: false };
    default:
      return state;
  }
}

const detailProduct = {
  dataDetailProduct: [],
  error: null,
  loading: true,
};

export function ReducerDetailProduct(state = detailProduct, action) {
  switch (action.type) {
    case PRODUCT.GET_DETAIL_PRODUCT_START:
      return { ...state, loading: true };
    case PRODUCT.GET_DETAIL_PRODUCT_FAILED:
      return { ...state, error: action.payload, loading: false };
    case PRODUCT.GET_DETAIL_PRODUCT_SUCCESS:
      return { ...state, dataDetailProduct: action.payload, loading: false };
    default:
      return state;
  }
}

const allProduct = {
  dataProduct: [],
  error: null,
  loading: true,
};

export function ReducerAllProduct(state = allProduct, action) {
  switch (action.type) {
    case PRODUCT.GET_ALL_PRODUCT_START:
      return { ...state, loading: true };
    case PRODUCT.GET_ALL_PRODUCT_FAILED:
      return { ...state, loading: false, error: action.payload };
    case PRODUCT.GET_ALL_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        dataProduct: action.payload,
      };
    default:
      return state;
  }
}
const allProductWithPagination = {
  dataProductWithPagination: [],
  error: null,
  loading: true,
};

export function ReducerProductWithPagination(
  state = allProductWithPagination,
  action
) {
  switch (action.type) {
    case PRODUCT.GET_PAGINATION_PRODUCT_START:
      return { ...state, loading: true };
    case PRODUCT.GET_PAGINATION_PRODUCT_FAILED:
      return { ...state, loading: false, error: action.payload };
    case PRODUCT.GET_PAGINATION_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        dataProductWithPagination: action.payload,
      };
    default:
      return state;
  }
}
