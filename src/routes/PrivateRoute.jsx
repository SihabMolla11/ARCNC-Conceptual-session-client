import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router";
import Loader from "../Components/Loader/Loader";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { email, isLoading } = useSelector((state) => state.userSlice);

  if (isLoading) {
    return <Loader />;
  }

  if (email) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
