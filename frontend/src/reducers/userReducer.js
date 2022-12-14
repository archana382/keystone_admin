import {
    LOGIN_REQUEST,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL,
    ADD_USER_REQUEST,
    ADD_USER_FAIL,
    ADD_USER_SUCCESS,
    ADD_USER_RESET,
    CLEAR_ERRORS,
  } from "../constants/userConstants";
  
  export const userReducer = (state = { user: {} }, action) => {
    switch (action.type) {
      case LOGIN_REQUEST:
      case REGISTER_USER_REQUEST:
    //   case LOAD_USER_REQUEST:
        return {
          loading: true,
          isAuthenticated: false,
        };
      case LOGIN_SUCCESS:
      case REGISTER_USER_SUCCESS:
    //   case LOAD_USER_SUCCESS:
        return {
          ...state,
          loading: false,
          isAuthenticated: true,
          user: action.payload,
        };
  
      case LOGOUT_SUCCESS:
        return {
          loading: false,
          user: null,
          isAuthenticated: false,
        };
      case LOGIN_FAIL:
      case REGISTER_USER_FAIL:
        return {
          ...state,
          loading: false,
          isAuthenticated: false,
          user: null,
          error: action.payload,
        };
  
    //   case LOAD_USER_FAIL:
    //     return {
    //       loading: false,
    //       isAuthenticated: false,
    //       user: null,
    //       error: action.payload,
    //     };
  
      case LOGOUT_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
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

//   export const addUserReducer = (state = { user: {} }, action) => {
//     switch (action.type) {
//       case ADD_USER_REQUEST:
//         return {
//           ...state,
//           loading: true,
//         };
//       case ADD_USER_SUCCESS:
//         return {
//           loading: false,
//           success: action.payload.success,
//           user: action.payload.user,
//         };
//       case ADD_USER_FAIL:
//         return {
//           ...state,
//           loading: false,
//           error: action.payload,
//         };
//       case ADD_USER_RESET:
//         return {
//           ...state,
//           success: false,
//         };
//       case CLEAR_ERRORS:
//         return {
//           ...state,
//           error: null,
//         };
//       default:
//         return state;
//     }
// };