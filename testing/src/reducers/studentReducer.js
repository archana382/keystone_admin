import {
    ADD_STUDENT_REQUEST,
    ADD_STUDENT_FAIL,
    ADD_STUDENT_SUCCESS,
    ADD_STUDENT_RESET,
    ALL_STUDENTS_REQUEST,
    ALL_STUDENTS_FAIL,
    ALL_STUDENTS_SUCCESS,
    DELETE_STUDENT_REQUEST,
    DELETE_STUDENT_SUCCESS,
    DELETE_STUDENT_FAIL,
    DELETE_STUDENT_RESET,
    UPDATE_STUDENT_REQUEST,
    UPDATE_STUDENT_SUCCESS,
    UPDATE_STUDENT_FAIL,
    UPDATE_STUDENT_RESET,
    STUDENT_DETAILS_REQUEST,
    STUDENT_DETAILS_SUCCESS,
    STUDENT_DETAILS_FAIL,
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


export const allStudentsReducer = (state = { students: [] }, action) => {
  switch (action.type) {
    case ALL_STUDENTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ALL_STUDENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        students: action.payload,
      };

    case ALL_STUDENTS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
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

export const studentDetailsReducer = (state = { ALL_STUDENTS_SUCCESS: {} }, action) => {
  switch (action.type) {
    case STUDENT_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case STUDENT_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        student: action.payload,
      };

    case STUDENT_DETAILS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
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

export const profileReducer = (state = {}, action) => {
  switch (action.type) {
    // case UPDATE_PROFILE_REQUEST:
    // case UPDATE_PASSWORD_REQUEST:
    case UPDATE_STUDENT_REQUEST:
    case DELETE_STUDENT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    // case UPDATE_PROFILE_SUCCESS:
    // case UPDATE_PASSWORD_SUCCESS:
    case UPDATE_STUDENT_SUCCESS:
      return {
        ...state,
        loading: false,
        isUpdated: action.payload,
      };

    case DELETE_STUDENT_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: action.payload.success,
        message: action.payload.message,
      };

    // case UPDATE_PROFILE_FAIL:
    // case UPDATE_PASSWORD_FAIL:
    case UPDATE_STUDENT_FAIL:
    case DELETE_STUDENT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    // case UPDATE_PROFILE_RESET:
    // case UPDATE_PASSWORD_RESET:
    case UPDATE_STUDENT_RESET:
      return {
        ...state,
        isUpdated: false,
      };

    case DELETE_STUDENT_RESET:
      return {
        ...state,
        isDeleted: false,
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