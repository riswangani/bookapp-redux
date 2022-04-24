import {combineReducers} from 'redux';
import {REGIST_USERS, GET_BOOKS, LOGIN_USER} from '../types';

// register
const initialRegisterState = {
  form: {},
};

const registerReducer = (state = initialRegisterState, action) => {
  switch (action.type) {
    case REGIST_USERS:
      return {
        ...state,
        form: action.payload,
      };
    default:
      return state;
  }
};

// login
const initialLoginState = {
  form: {},
};

const loginReducer = (state = initialLoginState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        form: action.payload,
      };
    default:
      return state;
  }
};

const reducer = combineReducers({
  registerReducer,
  loginReducer,
});

export default reducer;
