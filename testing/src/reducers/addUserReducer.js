import {
    ADD_USER_REQUEST,
    ADD_USER_FAIL,
    ADD_USER_SUCCESS,
    ADD_USER_RESET,
    CLEAR_ERRORS,
  } from "../constants/userConstants";
  

  export const addUserReducer = (state = { user: {} }, action) => {
    switch (action.type) {
      case ADD_USER_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case ADD_USER_SUCCESS:
        return {
          loading: false,
          success: action.payload.success,
          user: action.payload.user,
        };
      case ADD_USER_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case ADD_USER_RESET:
        return {
          ...state,
          success: false,
        };
      case CLEAR_ERRORS:
        return {
          ...state,
          error: null,
        };
      default:
        return state;
    }
};