import { createAction, handleActions } from "redux-actions";
import produce from "immer";

const CHANGE_FIELD = 'auth/CHANGE_FIELD';
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';

export const changeField = createAction(
  CHANGE_FIELD,
  ({form, key, value}) => ({
    form, // register, login
    key,  // email, password, passwordConfirm, nick
    value,  // 실제 바꾸려는 값
  }),
);

export const initializeForm = createAction(INITIALIZE_FORM, form => form);  // register / login

const initialState = {
  register: {
    email: '',
    password: '',
    passwordConfirm: '',
    nick: '',
  },
  login: {
    email: '',
    password: '',
  },
};

const auth = handleActions(
  {
    [CHANGE_FIELD]: (state, { payload: { form, key, value} }) =>
      produce(state, draft => {
        draft[form][key] = value; // 예: state.register.email을 바꾼다.
      }),
    [INITIALIZE_FORM]: (state, { payload: form }) => ({
      ...state,
      [form]: initialState[form],
    }),
  },
  initialState,
);

export default auth;