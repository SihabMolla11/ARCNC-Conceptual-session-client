import { Outlet } from "react-router-dom";
import Footer from "../Components/Shared/Footer/Footer";
import NavBar from "../Components/Shared/NavBar/NavBar";

const Main = () => {
  return (
    <div>
      <NavBar />
      <div className=" pt-28 pb-20">
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Main;
