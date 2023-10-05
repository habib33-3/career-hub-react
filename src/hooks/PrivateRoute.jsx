import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useNavigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const navigate = useNavigate();

  if (loading) {
    return <p className="my-20 text-center">Loading</p>;
  }

  if (user) {
    return children;
  }

  return (
    <Navigate
      to="/login"
      replace
    ></Navigate>
  );
};

export default PrivateRoute;
