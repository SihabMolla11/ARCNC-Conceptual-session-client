import { useContext } from "react";
import { FaUserCircle } from "react-icons/fa";
import { useSelector } from "react-redux";
import { AuthContext } from "../../../../providers/AuthProvider";

const Avatar = () => {
  // const { user } = useContext(AuthContext);
  const { image, email } = useSelector((state) => state.userSlice);

  return <div className="hidden md:block">{email ? <img className="w-8 h-8 rounded-full" src={image} alt="" /> : <FaUserCircle className="text-4xl text-[#d1cfcf] " />}</div>;
};

export default Avatar;
