export const Types = {
  SET_CURRENT: 'SET_CURRENT',
  GET_CATEGORIES_REQUEST: 'GET_CATEGORIES_REQUEST',
  GET_CATEGORIES_SUCCESS: 'GET_CATEGORIES_SUCCESS',
};

const INITIAL_STATE = {
  current: null,
  all_categories: [],
  loading_cat: false,
};

export default function categories(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      };
    case Types.GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        all_categories: action.payload,
        loading_cat: false,
      };
    case Types.GET_CATEGORIES_REQUEST:
      return {
        ...state,
        loading_cat: true,
      };
    default:
      return state;
  }
}

export const CatActions = {
  setCurrent: (cat) => ({
    type: Types.SET_CURRENT,
    payload: cat,
  }),
  categories_success: (categories) => ({
    type: Types.GET_CATEGORIES_SUCCESS,
    payload: categories,
  }),
  categories_request: () => ({
    type: Types.GET_CATEGORIES_REQUEST,
    payload: {},
  }),
};
