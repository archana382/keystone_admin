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
    UPDATE_STUDENT_REQUEST,
    UPDATE_STUDENT_SUCCESS,
    UPDATE_STUDENT_FAIL,
    STUDENT_DETAILS_REQUEST,
    STUDENT_DETAILS_SUCCESS,
    STUDENT_DETAILS_FAIL,
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
  

// get All Student
export const getAllStudents = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_STUDENTS_REQUEST });
    const { data } = await axios.get(`/api/v1/students`);

    dispatch({ type: ALL_STUDENTS_SUCCESS, payload: data.students });
  } catch (error) {
    dispatch({ type: ALL_STUDENTS_FAIL, payload: error.response.data.message });
  }
};

// get  Student Details
export const getStudentDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: STUDENT_DETAILS_REQUEST });
    const { data } = await axios.get(`/api/v1/student/${id}`);

    dispatch({ type: STUDENT_DETAILS_SUCCESS, payload: data.student });
  } catch (error) {
    dispatch({ type: STUDENT_DETAILS_FAIL, payload: error.response.data.message });
  }
};
  




// Update Student
export const updateStudent = (id, studentData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_STUDENT_REQUEST });

    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.put(
      `/api/v1/student/${id}`,
      studentData,
      config
    );

    dispatch({ type: UPDATE_STUDENT_SUCCESS, payload: data.success });
  } catch (error) {
    dispatch({
      type: UPDATE_STUDENT_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Delete STUDENT
export const deleteStudent = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_STUDENT_REQUEST });

    const { data } = await axios.delete(`/api/v1/student/${id}`);

    dispatch({ type: DELETE_STUDENT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: DELETE_STUDENT_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Clearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};