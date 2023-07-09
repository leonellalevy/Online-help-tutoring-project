import React from "react";
import { useNavigate, Route, RouteProps, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store";

type ProtectedRouteProps = {
  component: React.ComponentType<any>;
};

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  component: Component,
  ...rest
}) => {
  const auth = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate();

  if (auth.account) {
    return <Route {...rest} element={<Component />} />;
  } else {
    return <Navigate to="/login" />;
  }
  
  // if (auth.account) {
  //   if (props.path === "/login") {
  //     navigate("/");
  //     return null;
  //   }
  //   return <Route {...props} />;
  // } else if (!auth.account) {
  //   navigate("/login");
  //   return null;
  // } else {
  //   return <div>Not found</div>;
  // }
};

export default ProtectedRoute;
