import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Navigate} from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { loading, isAuthenticated, user } = useSelector((state) => state.user);

   if(loading === false){
    if (!isAuthenticated === true) {

      return <Navigate to="/login" replace />;
    }
    if (!isAuthenticated === true && user.role === "false") {
        
      return <Navigate to="/login" replace />;
    }
  }
  return (<Fragment>
    {loading === false && (
     children
    )}
  </Fragment>);
};

export default ProtectedRoute;
