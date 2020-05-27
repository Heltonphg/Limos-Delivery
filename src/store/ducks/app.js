//Actions Types
export const Types = {
  OPEN_MODAL: 'OPEN_MODAL',
  CLOSE_MODAL: 'CLOSE_MODAL',
};

//Reducers
const INITIAL_STATE = {
  modalVisible: false,
  modalTitle: '',
  modalMessage: '',
  modalType: 'warning',
  modalEvento: null,
};

export default function app(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.OPEN_MODAL:
      return {
        ...state,
        modalVisible: true,
        modalTitle: action.payload.title,
        modalMessage: action.payload.message,
        modalType: action.payload.modalType,
      };
    case Types.CLOSE_MODAL:
      return {
        ...state,
        modalVisible: false,
      };
    default:
      return state;
  }
}

//Actions Creators
export const AppActions = {
  openModal: (title, message, modalType = 'warning') => ({
    type: Types.OPEN_MODAL,
    payload: {title, message, modalType},
  }),
  closeModal: () => ({
    type: Types.CLOSE_MODAL,
  }),
};
