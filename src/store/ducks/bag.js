export const Types = {
  PRODUCT_REALM_REQUEST: 'PRODUCT_REALM_REQUEST',
  PRODUCT_REALM_SUCCES: 'PRODUCT_REALM_SUCCES',
  PRODUCT_REALM_FAIL: 'PRODUCT_REALM_FAIL',
};

const INITIAL_STATE = {
  products: [],
  loading: false,
};

export default function bag(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.PRODUCT_REALM_REQUEST:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}

export const bagActions = {
  product_realm_request: () => ({
    type: Types.PRODUCT_REALM_REQUEST,
    payload: {},
  }),
};
