import { createBrowserRouter } from "react-router-dom";
import AddRoom from "../Pages/Dashboard/AddRoom/AddRoom";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import RoomDetails from "../Pages/RoomDetails/RoomDetails";
import SignUp from "../Pages/Signup/SignUp";
import DashBoardLayout from "../layouts/DashBoardLayout";
import Main from "../layouts/Main";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/room/:id",
        element: (
          <PrivateRoute>
            <RoomDetails />
          </PrivateRoute>
        ),
      },
    ],
  },
  { path: "/login", element: <Login /> },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/dashboard",
    element: <DashBoardLayout />,
    children: [
      {
        path: "/dashboard/add-room",
        element: <AddRoom />,
      },
    ],
  },
]);
