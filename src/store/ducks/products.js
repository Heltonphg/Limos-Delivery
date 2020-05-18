export const Types = {
  PRODUCT_REQUEST: 'PRODUCT_REQUEST',
  PRODUCT_SUCCESS: 'PRODUCT_SUCCESS',
  PRODUCT_FAIL: 'PRODUCT_FAIL',
};

const INITIAL_STATE = {
  products: [],
  loading: false,
};

export default function products(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case Types.PRODUCT_SUCCESS:
      return {
        ...state,
        products: action.payload.products,
        loading: false,
      };
    case Types.PRODUCT_FAIL:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}

export const ProductActions = {
  productRequest: (snackbar_id, category_id) => ({
    type: Types.PRODUCT_REQUEST,
    payload: { snackbar_id, category_id },
  }),
  productSuccess: (products) => ({
    type: Types.PRODUCT_SUCCESS,
    payload: { products },
  }),
  productFail: () => ({
    type: Types.PRODUCT_FAIL,
    payload: {},
  }),
};
