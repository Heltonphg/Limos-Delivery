export const Types = {
  SET_CURRENT: 'SET_CURRENT',
};

const INITIAL_STATE = {
  current: null,
};

export default function categories(state = INITIAL_STATE, action) {
  switch (action.type) {
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
  setCurrent: (cat) => ({
    type: Types.SET_CURRENT,
    payload: cat,
  }),
};
