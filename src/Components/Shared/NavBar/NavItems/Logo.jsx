import { Link } from "react-router-dom";
import logo from "../../../../assets/images/logo.png";
const Logo = () => {
  return (
    <Link to="/" className=" cursor-pointer hidden md:block">
      <img src={logo} alt="" height="100" width="100" />
    </Link>
  );
};

export default Logo;
