// CONSTS
const HOME_GET_PASSWORDS_PENDING = 'HOME_GET_PASSWORDS_PENDING';
const HOME_GET_PASSWORDS_SUCCESS = 'HOME_GET_PASSWORDS_SUCCESS';
const HOME_GET_PASSWORDS_FAILURE = 'HOME_GET_PASSWORDS_FAILURE';
const HOME_GET_REMOVE_PASSWORDS_ITEMS = 'HOME_GET_REMOVE_PASSWORDS_ITEMS';

const ADD_PASSWORD_PENDING = 'ADD_PASSWORD_PENDING';
const ADD_PASSWORD_SUCCESS = 'ADD_PASSWORD_SUCCESS';
const ADD_PASSWORD_FAILURE = 'ADD_PASSWORD_FAILURE';

const initialState = {
  items: [],
  loading: false,
  error: '',
};

// ACTIONS
export const getPasswordsPending = () => ({
  type: HOME_GET_PASSWORDS_PENDING,
});

export const getPasswordsSuccess = payload => ({
  type: HOME_GET_PASSWORDS_SUCCESS,
  payload,
});

export const getPasswordsFailure = payload => ({
  type: HOME_GET_PASSWORDS_FAILURE,
  payload,
});

export const removePasswordsItems = () => ({
  type: HOME_GET_REMOVE_PASSWORDS_ITEMS,
});

export const addPasswordPending = () => ({
  type: ADD_PASSWORD_PENDING,
});

export const addPasswordSuccess = payload => ({
  type: ADD_PASSWORD_SUCCESS,
  payload,
});

export const addPasswordFailure = payload => ({
  type: ADD_PASSWORD_FAILURE,
  payload,
});

// REDUCER
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case HOME_GET_PASSWORDS_PENDING:
      return {
        ...state,
        loading: true,
      };
    case HOME_GET_PASSWORDS_SUCCESS:
      return {
        ...state,
        items: action.payload,
        loading: false,
      };
    case HOME_GET_PASSWORDS_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case HOME_GET_REMOVE_PASSWORDS_ITEMS:
      return {
        ...state,
        items: [],
        error: '',
        loading: false,
      };
    case ADD_PASSWORD_PENDING:
      return {
        ...state,
        loading: true,
      };
    case ADD_PASSWORD_SUCCESS:
      return {
        ...state,
        items: [action.item],
        loading: false,
      };
    case ADD_PASSWORD_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default rootReducer;
