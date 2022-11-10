import React, { Fragment, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
// import 'react-data-grid/lib/styles.css';
// import DataGrid from 'react-data-grid';
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";
import { Button } from "@material-ui/core";
// import MetaData from "../layout/MetaData";
// import EditIcon from "@material-ui/icons/Edit";
// import DeleteIcon from "@material-ui/icons/Delete";
// import SideBar from "./Sidebar";
// import "./studentList.css"
import {
  deleteStudent,
  getAllStudents,
  clearErrors,
} from "./action/studentAction";
import { DELETE_STUDENT_RESET } from "./constants/studentConstants";

const StudentList = () => {
  const dispatch = useDispatch();

  const alert = useAlert();
  const navigate = useNavigate();
  const { error, students } = useSelector((state) => state.allStudents);

  const { error: deleteError, isDeleted } = useSelector(
    (state) => state.student
  );

  const deleteStudentHandler = (id) => {
    dispatch(deleteStudent(id));
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (deleteError) {
      alert.error(deleteError);
      dispatch(clearErrors());
    }

    if (isDeleted) {
      alert.success("Student Deleted Successfully");
      navigate("/dashboard");
      dispatch({ type: DELETE_STUDENT_RESET });
    }

    dispatch(getAllStudents());
  }, [dispatch, alert, error, deleteError, navigate, isDeleted]);

  const columns = [
    { field: "id", headerName: "Student ID", minWidth: 200, flex: 0.5 },

    {
      field: "name",
      headerName: "Name",
      minWidth: 150,
      flex: 0.3,
    },
    {
      field: "phone",
      headerName: "Phone",
      // type: "number",
      minWidth: 150,
      flex: 0.3,
    },

    { 
      field: "email",
      headerName: "Email",
      // type: "number",
      minWidth: 270,
      flex: 0.5,
    },
    { 
      field: "qualification",
      headerName: "Qualification",
      // type: "number",
      minWidth: 150,
      flex: 0.3,
    },
    { 
      field: "valley",
      headerName: "valley",
      // type: "number",
      minWidth: 150,
      flex: 0.3,
    },
    { 
      field: "country",
      headerName: "Country",
      // type: "number",
      minWidth: 150,
      flex: 0.3,
    },
    { 
      field: "category",
      headerName: "Category",
      // type: "number",
      minWidth: 150,
      flex: 0.3,
    },

    // {
    //   field: "actions",
    //   flex: 0.3,
    //   headerName: "Actions",
    //   minWidth: 150,
    //   type: "number",
    //   sortable: false,
    //   renderCell: (params) => {
    //     return (
    //       <Fragment>
    //         <Link to={`/student/${params.getValue(params.id, "id")}`}>
    //           {/* <EditIcon /> */}
    //         </Link>

    //         <Button
    //           onClick={() =>  
    //             deleteStudentHandler(params.getValue(params.id, "id"))
    //           }
    //         >
    //           {/* <DeleteIcon /> */}
    //         </Button>
    //       </Fragment>
    //     );
    //   },
    // },
  ];

  const rows = [];

  students &&
    students.forEach((item) => {
      rows.push({
        id: item._id,
        name: item.name,
        phone: item.phone,
        email: item.email,
        valley: item.valley,
        qualification: item.qualification,
        country: item.country,
        category: item.category,
      });
    });

  return (
    <Fragment>
      {/* <MetaData title={`ALL PRODUCTS - Admin`} /> */}

      <div className="dashboard">
        {/* <SideBar /> */}
        <div className="studentListContainer">
          <h1 id="studentListHeading">ALL STUDENT</h1>

          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            className="studentListTable"
            autoHeight
          />
        </div>
      </div>
    </Fragment>
  );
};

export default StudentList;
