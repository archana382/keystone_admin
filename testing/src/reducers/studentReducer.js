import {
    ADD_STUDENT_REQUEST,
    ADD_STUDENT_FAIL,
    ADD_STUDENT_SUCCESS,
    ADD_STUDENT_RESET,
    CLEAR_ERRORS,
  } from "../constants/studentConstants";
  

  export const studentReducer = (state = { student: {} }, action) => {
    switch (action.type) {
      case ADD_STUDENT_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case ADD_STUDENT_SUCCESS:
        return {
          loading: false,
          success: action.payload.success,
          student: action.payload.student,
        };
      case ADD_STUDENT_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case ADD_STUDENT_RESET:
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