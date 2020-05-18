export const Types = {
  CATEGORY_REQUEST: 'CATEGORY_REQUEST',
  LOAD_CATEGORY_REQUEST_ONLY_SNACK: 'LOAD_CATEGORY_REQUEST_ONLY_SNACK',
  CATEGORY_SUCCESS: 'CATEGORY_SUCCESS',
  CATEGORY_FAIL: 'CATEGORY_FAIL',
  LOAD_CATGORY_SNACK: 'LOAD_CATGORY_SNACK',
  SET_CURRENT: 'SET_CURRENT',
};

const INITIAL_STATE = {
  current: null,
  loading: false,
  loading_catgory: false,
  allcategories: [],
  catgorieSnack: [],
};

export default function categories(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.CATEGORY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case Types.LOAD_CATEGORY_REQUEST_ONLY_SNACK:
      return {
        ...state,
        loading_catgory: true,
      };
    case Types.CATEGORY_SUCCESS:
      return {
        ...state,
        allcategories: action.payload,
        loading: false,
      };
    case Types.CATEGORY_FAIL:
      return {
        ...state,
        loading: false,
      };
    case Types.LOAD_CATGORY_SNACK:
      return {
        ...state,
        catgorieSnack: action.payload.categories,
        loading_catgory: false,
      };
    case Types.SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      };
    default:
      return state;
  }
}

export const CatActions = {
  categoryRequest: () => ({
    type: Types.CATEGORY_REQUEST,
    payload: {},
  }),
  categorySucess: (allcategories) => ({
    type: Types.CATEGORY_SUCCESS,
    payload: allcategories,
  }),
  categoryFail: () => ({
    type: Types.CATEGORY_SUCCESS,
    payload: {},
  }),

  loadCategorySnackSuccess: (categories) => ({
    type: Types.LOAD_CATGORY_SNACK,
    payload: { categories },
  }),

  loadCategoryRequestOnlySnack: (categories) => ({
    type: Types.LOAD_CATEGORY_REQUEST_ONLY_SNACK,
    payload: categories,
  }),

  setCurrent: (cat) => ({
    type: Types.SET_CURRENT,
    payload: cat,
  }),
};
