import { signOut } from "firebase/auth";
import { useCallback, useContext, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logOut } from "../../../../Redux/userSlice/userSlice";
import auth from "../../../../firebase/firebase.config";
import Avatar from "./Avatar";

const MenuDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { email } = useSelector((state) => state.userSlice);
  const dispatch = useDispatch();
  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  const handelLogOut = () => {
    signOut(auth);
    dispatch(logOut());
  };

  return (
    <div className="relative">
      {/* Arcnc button  */}
      <div className="flex flex-row items-center gap-3">
        <div className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer">AirCNC your home</div>
        <div onClick={toggleOpen} className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition">
          <AiOutlineMenu />
          <Avatar />
        </div>
        {/* droupdown button  */}
      </div>
      {isOpen && (
        <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm">
          <div className="flex flex-col cursor-pointer">
            {email ? (
              <div>
                <Link to="/dashboard" className="block px-4 py-3 hover:bg-neutral-100 transition font-semibold">
                  Dashboard
                </Link>
                <div onClick={handelLogOut} className="px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer">
                  Logout
                </div>
              </div>
            ) : (
              <>
                <Link to="/login" className="px-4 py-3 hover:bg-neutral-100 transition font-semibold">
                  Login
                </Link>
                <Link to="/signup" className="px-4 py-3 hover:bg-neutral-100 transition font-semibold">
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuDropdown;
