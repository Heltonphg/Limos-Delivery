//Actions Types
export const Types = {
  SNACKBAR_REQUEST: 'SNACKBAR_REQUEST',
  SNACKBAR_SUCCESS: 'SNACKBAR_SUCCESS',
};

//Reducers
const INITIAL_STATE = {
  snackbars: null,
  loading: false,
};

export default function snackBar(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SNACKBAR_REQEUST:
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
};
