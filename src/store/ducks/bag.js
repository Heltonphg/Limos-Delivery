export const Types = {
  CREATE_PRODUCT_REQUEST: 'CREATE_PRODUCT_REQUEST',
  CREATE_PRODUCT_SUCCESS: 'CREATE_PRODUCT_SUCCESS',
  LOAD_BAG_REQUEST: 'LOAD_BAG_REQUEST',
  LOAD_BAG_SUCCES: 'LOAD_BAG_SUCCES',
  LOAD_BAG_FAIL: 'LOAD_BAG_FAIL',
};

const INITIAL_STATE = {
  products: [],
  loading: false,
  loading_create: false
};

export default function bag(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.CREATE_PRODUCT_REQUEST:
      return {
        ...state,
        loading_create: true,
      };
      case Types.CREATE_PRODUCT_SUCCESS:
      return {
        ...state,
        products: action.payload.product_bag,
        loading_create: false,
      };
    default:
      return state;
  }
}

export const bagActions = {
  create_product_success: (product_bag) => ({
    type: Types.CREATE_PRODUCT_SUCCESS,
    payload: {product_bag},
  }),
  create_product_request: (product) => ({
    type: Types.CREATE_PRODUCT_REQUEST,
    payload: product,
  }),
};
