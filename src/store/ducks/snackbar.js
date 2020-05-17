//Actions Types
export const Types = {
  SNACKBAR_REQUEST: 'SNACKBAR_REQUEST',
  SNACKBAR_SUCCESS: 'SNACKBAR_SUCCESS',
  SNACKBAR_FAIL: 'SNACKBAR_FAIL',
  DATAIL_SNACK_REQUEST: 'DATAIL_SNACK_REQUEST',
  DATAIL_SNACK_SUCCESS: 'DATAIL_SNACK_SUCCESS',
  ALTERAR_SNACK: 'ALTERAR_SNACK',
  IO_SNACK_ADD: 'IO_SNACK_ADD',
};

//Reducers
const INITIAL_STATE = {
  snackbars: null,
  snack: null,
  loading: false,
  loadingDetail: false,
};

export default function snackBar(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SNACKBAR_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case Types.SNACKBAR_SUCCESS:
      return {
        ...state,
        snackbars: action.payload,
        loading: false,
      };
    case Types.SNACKBAR_FAIL:
      return {
        ...state,
        snackbars: [],
        loading: false,
      };
    case Types.DATAIL_SNACK_REQUEST:
      return {
        ...state,
        loadingDetail: true,
      };
    case Types.DATAIL_SNACK_SUCCESS:
      return {
        ...state,
        snack: action.payload,
        loadingDetail: false,
      };
    case Types.ALTERAR_SNACK:
      return {
        ...state,
        snackbars: state.snackbars.map((snack) =>
          snack.id === action.payload.id ? action.payload : snack,
        ),
      };
    case Types.IO_SNACK_ADD:
      return {
        ...state,
        snackbars: [...state.snackbars, action.payload.snack]
      };
    default:
      return state;
  }
}

//Actions Creators
export const SnackBarActions = {
  snackbarsRequest: () => ({
    type: Types.SNACKBAR_REQUEST,
    payload: {},
  }),
  snackbarsSuccess: (snacks) => ({
    type: Types.SNACKBAR_SUCCESS,
    payload: snacks,
  }),
  snackbarsFail: () => ({
    type: Types.SNACKBAR_FAIL,
    payload: {},
  }),
  alterarSnack: (snack) => ({
    type: Types.ALTERAR_SNACK,
    payload: snack,
  }),
  ioSnackAdd: (snack) => ({
    type: Types.IO_SNACK_ADD,
    payload: { snack },
  }),
  detailSnackRequest: (id) => ({
    type: Types.DATAIL_SNACK_REQUEST,
    payload: { id },
  }),
  detailSnackSuccess: (snack) => ({
    type: Types.DATAIL_SNACK_SUCCESS,
    payload: snack,
  }),
};
