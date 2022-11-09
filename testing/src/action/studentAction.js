import {
    ADD_STUDENT_REQUEST,
    ADD_STUDENT_FAIL,
    ADD_STUDENT_SUCCESS,
    ADD_STUDENT_RESET,
    CLEAR_ERRORS,

} from "../constants/studentConstants";
import axios from "axios";

//Add Student
 export const addStudent = (studentData) => async (dispatch) => {
    try {
      dispatch({ type: ADD_STUDENT_REQUEST });
  
      const config = {
        headers: { "Content-Type": "application/json" },
      };
  
      const { data } = await axios.post(
        `/api/v1/addstudent`,
        studentData,
        config
      );
  
      dispatch({
        type: ADD_STUDENT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ADD_STUDENT_FAIL,
        payload: error.response.data.message,
      });
    }
  };
  
    // Clearing Errors
      export const clearErrors = () => async (dispatch) => {
        dispatch({ type: CLEAR_ERRORS });
      };