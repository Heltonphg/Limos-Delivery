//Actions Types
export const Types = {
  SNACKBAR_REQUEST: 'SNACKBAR_REQUEST',
  SNACKBAR_SUCCESS: 'SNACKBAR_SUCCESS',
  DATAIL_SNACK_REQUEST: 'DATAIL_SNACK_REQUEST',
  DATAIL_SNACK_SUCCESS: 'DATAIL_SNACK_SUCCESS',
  ALTERAR_SNACK: 'ALTERAR_SNACK',
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
  alterarSnack: (snack) => ({
    type: Types.ALTERAR_SNACK,
    payload: snack,
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
