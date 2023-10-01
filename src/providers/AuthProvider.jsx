import { onAuthStateChanged, sendPasswordResetEmail } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useAddUserMutation } from "../Redux/features/usersApi";
import { setUser, toggleLoading } from "../Redux/userSlice/userSlice";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();
  const [addUser] = useAddUserMutation();

  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      const userData = {
        name: user?.displayName,
        email: user?.email,
        image: user?.photoURL,
        role: "user",
      };
      if (user) {
        dispatch(setUser({ email: user.email, name: user.displayName, image: user.photoURL }));
        dispatch(toggleLoading(false));
        addUser({ email: user.email, userData });
      } else {
        dispatch(toggleLoading(false));
      }
      console.log(user);
    });
  }, [dispatch]);

  const authInfo = {
    resetPassword,
  };

  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
