import React from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../contexts/AuthContext/AuthContext";
import { useContext } from "react";

function ProtectedRoute({ children }) {
    // const isAuth = false;
    const { isAuth } = useContext(AuthContext);

    return isAuth ? children : <Navigate to="/auth/login" />;
    // return isAuth ? <p>authenticated</p> : <p>not authenticated</p>;
}

export default ProtectedRoute;
