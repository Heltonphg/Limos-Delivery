//Actions Types
export const Types = {
  OPEN_MODAL: 'OPEN_MODAL',
  CLOSE_MODAL: 'CLOSE_MODAL',

  LOAD_ALL: 'LOAD_ALL',

  OPEN_MODAL_LOADING: 'OPEN_MODAL_LOADING',
  CLOSE_MODAL_LOADING: 'CLOSE_MODAL_LOADING',

  OPEN_MODAL_INFO: 'OPEN_MODAL_INFO',
  CLOSE_MODAL_INFO: 'CLOSE_MODAL_INFO',
};

//Reducers
const INITIAL_STATE = {
  modalVisible: false,
  modalTitle: '',
  modalMessage: '',
  modalType: 'warning',
  modalEvento: null,

  modalLoading: false,

  modalInfosVisible: false,
  modalInfoTitle: '',
  form_payment: [],
  horarios: [],
  fretes: [],
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
    case Types.OPEN_MODAL_LOADING:
      return {
        ...state,
        modalLoading: true,
      };
    case Types.CLOSE_MODAL_LOADING:
      return {
        ...state,
        modalLoading: false,
      };
    case Types.OPEN_MODAL_INFO:
      return {
        ...state,
        modalInfosVisible: true,
        modalInfoTitle: action.payload.title,
        form_payment: action.payload.form_payments,
        horarios: action.payload.horarios,
        fretes: action.payload.fretes,
      };
    case Types.CLOSE_MODAL_INFO:
      return {
        ...state,
        modalInfosVisible: false,
      };

    default:
      return state;
  }
}

//Actions Creators
export const AppActions = {
  openModal: (title, message, modalType = 'warning') => ({
    type: Types.OPEN_MODAL,
    payload: { title, message, modalType },
  }),
  closeModal: () => ({
    type: Types.CLOSE_MODAL,
    payload: {},
  }),
  openModalLoad: () => ({
    type: Types.OPEN_MODAL_LOADING,
  }),
  closeModalLoading: () => ({
    type: Types.CLOSE_MODAL_LOADING,
  }),
  load_all: () => ({
    type: Types.LOAD_ALL,
    payload: {},
  }),
  openModalInfo: (title, form_payments, horarios, fretes) => ({
    type: Types.OPEN_MODAL_INFO,
    payload: { title, form_payments, horarios, fretes },
  }),
  closeModalInfo: () => ({
    type: Types.CLOSE_MODAL_INFO,
  }),
};
