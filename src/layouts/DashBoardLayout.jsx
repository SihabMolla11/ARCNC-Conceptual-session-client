import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Sidebar from "../Components/DashBoard/Sidebar/Sidebar";
import Loader from "../Components/Loader/Loader";

const DashBoardLayout = () => {
  const { isLoading, email } = useSelector((state) => state.userSlice);

  if (isLoading || !email) {
    return <Loader />;
  }

  return (
    <div className="relative min-h-screen md:flex">
      <Sidebar />
      <div className="flex-1  md:ml-64">
        <div className="p-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashBoardLayout;
