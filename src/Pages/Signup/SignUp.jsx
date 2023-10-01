import { Link, useNavigate } from "react-router-dom";

import { useContext, useEffect } from "react";
import { Toaster, toast } from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { ImSpinner9 } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import { saveUser } from "../../Api/auth";
import { createUser, googleLogin } from "../../Redux/userSlice/userSlice";
import { AuthContext } from "../../providers/AuthProvider";

const SignUp = () => {
  const { signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const { isError, isLoading, email } = useSelector((state) => state.userSlice);
  const dispatch = useDispatch();

  // google signing
  const googleSigning = () => {
    dispatch(googleLogin());
  };

  // user registration
  const handelSighUp = (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    // --- MOST IMPORTANT --- image upload in image bb
    const image = event.target.image.files[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_KEY}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        const imageUrl = data?.data?.display_url;
        dispatch(createUser({ email, password, name, imageUrl }));
      });
  };

  useEffect(() => {
    if (!isLoading && email) {
      navigate(from, { replace: true });
    }
  }, [isLoading, email, navigate]);

  useEffect(() => {
    if (isError) {
      toast.error(isError.error.message);
    }
  }, [isError]);

  return (
    <>
      <div className="flex justify-center items-center min-h-screen py-10">
        <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900">
          <div className="mb-8 text-center">
            <h1 className="my-3 text-4xl font-bold">Sign Up</h1>
            <p className="text-sm text-gray-400">Welcome to AirCNC</p>
          </div>
          <form onSubmit={handelSighUp} noValidate="" action="" className="space-y-6 ng-untouched ng-pristine ng-valid">
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block mb-2 text-sm">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter Your Name Here"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                  data-temp-mail-org="0"
                />
              </div>
              <div>
                <label htmlFor="image" className="block mb-2 text-sm">
                  Select Image:
                </label>
                <input required type="file" id="image" name="image" accept="image/*" />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="Enter Your Email Here"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                  data-temp-mail-org="0"
                />
              </div>
              <div>
                <div className="flex justify-between">
                  <label htmlFor="password" className="text-sm mb-2">
                    Password
                  </label>
                </div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  required
                  placeholder="*******"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                />
              </div>
            </div>

            <div>
              <button type="submit" disabled={isLoading} className="bg-rose-500 w-full rounded-md py-3 text-white">
                {isLoading ? <ImSpinner9 className="m-auto animate-spin" size={24} /> : " Continue"}
              </button>
            </div>
          </form>
          <div className="flex items-center pt-4 space-x-1">
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
            <p className="px-3 text-sm dark:text-gray-400">Signup with social accounts</p>
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          </div>
          <div onClick={googleSigning} className="flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer">
            <FcGoogle size={32} />

            <p>Continue with Google</p>
          </div>
          <p className="px-6 text-sm text-center text-gray-400">
            Already have an account?{" "}
            <Link to="/login" className="hover:underline hover:text-rose-500 text-gray-600">
              Login
            </Link>
          </p>
          <Toaster />
        </div>
      </div>
    </>
  );
};

export default SignUp;
