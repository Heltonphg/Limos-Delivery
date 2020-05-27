export const Types = {
  CREATE_PRODUCT_REQUEST: 'CREATE_PRODUCT_REQUEST',
  CREATE_PRODUCT_SUCCESS: 'CREATE_PRODUCT_SUCCESS',
  CREATE_PRODUCT_FAIL: 'CREATE_PRODUCT_FAIL',
  LOAD_BAG_REQUEST: 'LOAD_BAG_REQUEST',
  LOAD_BAG_SUCCES: 'LOAD_BAG_SUCCES',
  LOAD_BAG_FAIL: 'LOAD_BAG_FAIL',
};

const INITIAL_STATE = {
  products: [],
  error_create: null,
  loading: false,
  loading_create: false,
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
    case Types.CREATE_PRODUCT_FAIL:
      return {
        ...state,
        error_create: action.payload.error,
        loading_create: false,
      };
    case Types.LOAD_BAG_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case Types.LOAD_BAG_SUCCES:
      return {
        ...state,
        products: action.payload.products,
        loading: false,
      };
    default:
      return state;
  }
}

export const bagActions = {
  create_product_success: (product_bag) => ({
    type: Types.CREATE_PRODUCT_SUCCESS,
    payload: { product_bag },
  }),
  create_product_fail: (error) => ({
    type: Types.CREATE_PRODUCT_FAIL,
    payload: { error },
  }),
  create_product_request: (product) => ({
    type: Types.CREATE_PRODUCT_REQUEST,
    payload: product,
  }),
  load_bag_request: () => ({
    type: Types.LOAD_BAG_REQUEST,
    payload: {},
  }),
  load_bag_success: (products) => ({
    type: Types.LOAD_BAG_SUCCES,
    payload: { products },
  }),
  load_bag_fail: (error) => ({
    type: Types.LOAD_BAG_FAIL,
    payload: { error },
  }),
};
